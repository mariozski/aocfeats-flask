from flask import Flask, request, jsonify, redirect, url_for
from flask.templating import render_template
from flask.ext.assets import Environment, Bundle
from datetime import datetime, timedelta
import shelve
import requests

app = Flask(__name__)
# disable or enable debug mode for Flask
#app.debug = True
assets = Environment(app)
assets.url = app.static_url_path
scss = Bundle(r'css\fonts.scss',
              r'css\main.scss',
              r'css\normalize.scss',
              r'css\toggle-switch.scss',
              filters='pyscss',
              output='all.css')

# path to shelve database, it's used to store cached responses from is.gd to not query
# it too much.
SHELVE_DB = r'C:\Users\Mariusz\PycharmProjects\aocfeats\shorturl' if app.debug else r'some_other_location'

assets.register('stylesheets', scss)

allowed_classes = {'118': 'pom', '11c': 'tos', '11d': 'bs',
                   '114': 'guard', '11f': 'dt', '116': 'conq',
                   '12c': 'demo', '129': 'necro', '12b': 'hox',
                   '127': 'rgr', '122': 'sin', '112': 'barb'}


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/feat/<class_name>/')
def feat(class_name):
    if not class_name in map(lambda key: allowed_classes[key], allowed_classes):
        return index()

    # TODO: add handling of flash messages
    message = ""
    return render_template('feats.html', flash_message=message)


@app.route('/feat/<class_name>/<key>')
def feat_with_key(class_name, key):
    return feat(class_name)


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/shorten', methods=['POST'])
def shorten():
    link = request.form["link"]

    with shelve.open(SHELVE_DB) as db:
        if link in db:
            values = db.get(link)
            if values['date'] < datetime.now() - timedelta(days=30):
                del db[link]
            else:
                return jsonify({'shorturl': values['link']})

        if not app.debug:
            r = requests.get('http://is.gd/create.php', params={'format': 'json', 'url': link})
        else:
            r = requests.get('http://is.gd/create.php',
                             params={'format': 'json', 'url': 'http://aocfeats.com/test?url=118'})

        response = r.json()
        db[link] = {'date': datetime.now(), 'link': response['shorturl']}

        return jsonify(response)


@app.route('/import/<key>')
def import_build(key):
    char_key = key[:3]
    if char_key not in allowed_classes:
        return 'Could not import specified specialization.'

    return redirect(url_for('feat_with_key', class_name=allowed_classes[char_key], key=key))


if __name__ == '__main__':
    app.run()
