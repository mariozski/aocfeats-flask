define(['dojo/_base/array'],
function (array) {

    var FeatDescription = function (title, modificators, description) {
        this.title = title;
        this.parent = null;
        this.modificators = modificators;
        this.description = description;
    };

    FeatDescription.prototype.GetDescription = function () {
        var result = "<div class='title'>" + this.title + "</div>";
        if (this.parent.row != null) {
            result += "<div class='requirements'><div class='title'>Requirements</div>";
            // requirements
            var lvl = 0;
            if (this.parent.row < 6) {
                lvl = (this.parent.row + 1) * 5;
            } else {
                lvl = 30 + (this.parent.row - 5) * 10;
            }

            result += "<div class='r'>You must be at least level " + lvl + "</div>";
            if (this.parent.row > 1) {
                result += "<div class='r'>" + ((this.parent.row - 1) * 5) + " ranks purchased in this Feat Tree</div>";
            }

            result += "</div>";
        }

        // modifications
        if (this.modificators.length > 0) {
            var obj = this;
            var points = this.parent.Points();

            // display for current rank
            if (points > 0) {
                var addCode = '';
                array.forEach(obj.modificators, function (e) {
                    var sval = e.s[points - 1] || 0;
                    if (sval != 0)
                        addCode += "<div class='m'><span class='" + (sval >= 0 ? 'green' : 'red') + "'>" + (sval > 0 ? '+' : '') + sval + (e.suf || '') + "</span> " + e.t + "</div>";
                });

                if (addCode != '')
                    result += "<div class='modifications'><div class='title'>Modifications</div>" + addCode + "</div>";
            }

            // display for next rank
            if (!this.parent.IsFullyFitted()) {
                addCode = '';
                array.forEach(obj.modificators, function (e) {
                    var sval = e.s[points];
                    if (sval != 0)
                        addCode += "<div class='m'><span class='" + (sval >= 0 ? 'green' : 'red') + "'>" + (sval > 0 ? '+' : '') + sval + (e.suf || '') + "</span> " + e.t + "</div>";
                });

                if (addCode != '')
                    result += "<div class='modifications'><div class='title'>Next rank</div>" + addCode + "</div>";
            }
        }

        result += "<div class='description'><div class='title'>Description</div>" + this.description + "</div>";
        result += "<div class='help'>ctrl + left click - add all points</br>left click - add point</br>right click - remove point</div>";
        return result;
    };

    return FeatDescription;
}); //!-- require