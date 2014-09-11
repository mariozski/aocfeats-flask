/*****************************************************************************
 Copyright 2012 Mariusz Zieliński

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 *******************************************************************************/
define([
    "dojo/_base/array",
    "dojo/query",
    "dojo/dom-attr",
    "dojo/dom",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-geometry",
    "dojo/dom-prop",
    "dojo/window",
    "dojo/html",
    "dojo/on",
    "dojo/request/xhr",
    'dojo/dom-construct',
    'dojo/mouse',
    'dojo/io-query',
    "dojo/NodeList-manipulate"
],
function (array,
          query,
          domAttr,
          dom,
          style,
          domClass,
          geo,
          domProp,
          wndw,
          html,
          on,
          xhr,
          domConstruct,
          mouse,
          ioQuery) {

    return function (settings) {

        var _pointHeight = 16,
            _pointWidths = [14, 9, 10, 9, 12],
            _locked = false,
            _usedPoints = [],
            _classFeats = settings['classFeats']().feats || {},
            _generalFeats = settings['generalFeats'] || {},
            feats = [],
            _cachedUrl = '',
            _borderClasses = ['b-inactive', 'b-active', 'b-full'];

        var usedPoints = function(featTree) {
            return  _usedPoints[featTree];
        };

        var totalUsedPoints = function () {
            var total = 0,
                i;

            for (i = 0; i < _usedPoints.length; i++) {
                total += _usedPoints[i];
            }

            return total;
        };

        var totalAvailablePoints = function() {
            return 79 - totalUsedPoints();
        };

        var showPoints = function () {
            var total = totalUsedPoints();
            query('#used-points').text(total);
            query('#available-points').text(79 - total);

            query('#tree1').text(usedPoints(1));
            query('#tree2').text(usedPoints(2));
            query('#tree3').text(usedPoints(3));
        };

        var createLink = function() {
            createIngameLink();
        };

        var createIngameLink = function () {
            var featVals = query('#link-id').text(),
                feated = [];

            array.forEach(feats, function (e, i) {
                if (e.HasAnyPoints()) {
                    feated[e.SortId()] = e.Id();
                }
            });

            array.forEach(feated, function(e, i) {
                if (typeof e != 'undefined')
                    featVals += e;
            });

            if (!dom.byId('view').checked)
                dom.byId('view').checked = true;

            _cachedUrl = "";
            query('#link-hidden').val(featVals);
            on.emit(dom.byId('link-hidden'), 'change', {
                bubbles: true,
                cancelable: true
            });

            if (history !== undefined && history.replaceState !== undefined) {
                history.replaceState({},'', encodeURI(featVals));
            }
        };

        var addPoint = function (feat, pointsAdded) {
            _usedPoints[feat.tree]  = _usedPoints[feat.tree] + pointsAdded;
            showPoints();
            createLink();
        };

        var removePoint = function (feat) {
            _usedPoints[feat.tree]  = _usedPoints[feat.tree] - 1;
            showPoints();
            createLink();
        };

        var findParent = function (feat) {
            var parent = null,
                parentX = {},
                parentY = {};

            if (feat.parent != null) {
                parentX = feat.parent[0];
                parentY = feat.parent[1];

                parent = array.filter(feats, function (item) {
                    return item.tree == feat.tree && item.row == parentX && item.column == parentY;
                })[0];
            }

            return parent;
        };

        var featCellCode = function (feat) {
            var enabled = isEnabled(feat);

            return '<div class="border" style="'
                + 'width: 44px;'
                + 'height: 44px;'
                + 'left: ' + (feat.row == 1 ? 27 : 0) + 'px;'
                + 'top: -3px;'
                + 'background-image: url(/static/images/borders.png);'
                + 'background-position: ' + (enabled ? (feat.IsFullyFitted() ? '88px' : '44px') : '0px') + ' 0px;'
                + '"></div>'
                + '<div class="feat" style="'
                + (feat.row == 1 ? 'left: 30px;' : '')
                + 'background-image: url('
                + (feat.tree == 3 ? settings['generalTree'] : settings['classTree']) + '); background-position: '
                + (-feat.imgIndex * feat.size).toString() + 'px ' + (feat.PointsNeeded() <= usedPoints(feat.tree) ? feat.size : 0)
                + 'px;"></div>';
        };

        var getArrowCode = function(feat) {
            var fateCode = '',
                parent = findParent(feat),
                diff = 0,
                offset = 0;

            if (feat.column == parent.column && feat.row != parent.row) {
                diff = (feat.row - parent.row);
                offset = (diff > 1 ? 10 : 0);

                fateCode += '<div style="position: absolute; left: -4px; top: -'
                    + ((diff * 38) + offset) + 'px;'
                    + 'background-image: url(/static/images/arrow_vertical.png); width: 48px; height: '
                    + ((diff * 38) + offset + 10)
                    + 'px; z-index: 0;"></div>';

            } else if (feat.row == parent.row && feat.column > parent.column) {
                fateCode += '<div style="position: absolute; top: 0px;left: -20px; background-image: url(/static/images/arrow_right.png); height: 25px; width: 32px; z-index: 0;"></div>';
            } else if (feat.row == parent.row && feat.column < parent.column) {
                fateCode += '<div style="position: absolute; top: 0px;left: 38px; background-image: url(/static/images/arrow_left.png); height: 37px; width: 32px; z-index: 0;"></div>';
            }

            return fateCode;
        };

        var getPointsCode = function(feat) {
            var width = 0,
                i = 0;

            for (i = 0; i < feat.availablePoints; i++) {
                width += _pointWidths[i];
            }

            return '<div class="points" style="'
                + 'width: ' + width.toString() + 'px;'
                + 'left: ' + (feat.row == 1 ? 22 : (((4 - feat.availablePoints) * 4) + 0)) + 'px;'
                + 'top: 40px;'
                + 'background-position: ' + (isEnabled(feat) ? '-54px ' : '0px ') +  feat.PositionY() + ';">';
        };

        var hideDescription = function (e) {
            style.set(dom.byId('feat-description'), 'display', 'none');
        };

        var showDescription = function (e) {
            var item = e.currentTarget || e.fromTarget;
            if (typeof item === 'undefined')
                return;

            var id = item.id,
                idx = parseInt(id, 10),
                feat = feats[idx],
                desc = query('#feat-description'),
                featBox = dom.byId(idx.toString()),
                featPosition = geo.position(featBox),
                position = 0,
                box = wndw.getBox(),
                newX = featPosition.x + 60 + (feat.row == 1 ? 25 : 0),
                newY = featPosition.y;

            desc.innerHTML(feat.GetDescription());
            desc.style('display', 'block');

            position = geo.position(desc[0]);

            if ((newY + position.h) > box.h) {
                newY = box.h - position.h - 10;
            }

            if ((newX + position.w) > box.w) {
                newX = newX - 375;
            }

            desc.style('top', newY + 'px');
            desc.style('left', newX + 'px');
        };

        var isEnabled = function (feat) {
            return (feat.PointsNeeded() <= usedPoints(feat.tree) && (feat.parent == null || (feat.parent != null && findParent(feat).IsFullyFitted())));
        };

        var toggleFeat = function (feat) {
            var enabled = isEnabled(feat),
                idx = array.indexOf(feats, feat).toString(),
                x = feat.PositionX(),
                y = (enabled ? feat.size : 0) + 'px',
                newBorder = (enabled ? (feat.IsFullyFitted() ? '88px' : '44px') : '0px') + " 0px",
                border = query('#'+idx+' .border'),
                efeat = query('#'+idx+' .feat'),
                oldY = efeat.style('backgroundPosition')[0].split(' ')[1];

            style.set(dom.byId(idx).nextSibling, "backgroundPosition", (enabled ? '-54px ' : '0px ') + feat.PositionY());
            if (border.style('backgroundPosition') !== newBorder)
                border.style("backgroundPosition", (enabled ? (feat.IsFullyFitted() ? '88px' : '44px') : '0px') + " 0px");

            if (y.trim() !== oldY.trim()) {
                /// update only feats which should be changed
                query('.feat', dom.byId(idx))
                    .style("backgroundPosition", x + ' ' + y);
            }
        };

        var disableIfNoPoints = function (feat) {
            var idx = array.indexOf(feats, feat).toString();

            query('.feat', dom.byId(idx))
                .style("backgroundPosition", (-feat.imgIndex * feat.size).toString() + 'px ' + (feat.HasAnyPoints() ? feat.size : 0) + 'px');

            query('.border', dom.byId(idx))
                .style("backgroundPosition", (feat.HasAnyPoints() ? (feat.IsFullyFitted() ? 88 : 44) : 0) + 'px 0px');

            style.set(dom.byId(idx).nextSibling, "backgroundPosition", (feat.HasAnyPoints() ? '-54px ' : '0px ') + feat.PositionY());
        };

        var checkImages = function (feat, clickType) {
            var totalUsed = totalUsedPoints(),
                clickType = typeof clickType === 'undefined' ? "none" : clickType.click,
                i = 0;

            if ((typeof feat === 'undefined' && totalUsed !== 79) || totalUsed === 78) {     // check all trees and disable feats
                for (i = 0; i < feats.length; i++) {
                    toggleFeat(feats[i]);
                }
            } else if (typeof feat === 'undefined' || totalUsed === 79) {
                for (i = 0; i < feats.length; i++) {
                    disableIfNoPoints(feats[i]);
                }
            } else {                    // toggle only feats in same tree
                for (i = 0; i < feats.length; i++) {
                    if (clickType === 'none') {
                        toggleFeat(feats[i]);
                    } else if (clickType !== 'none' && feat.tree === feats[i].tree && feat.row <= feats[i].row) {
                        toggleFeat(feats[i]);
                    }
                }
            }
        };

        var leftClick = function (e) {
            e.preventDefault();

            var item = e.fromTarget || e.currentTarget;
            if (typeof item === 'undefined' || _locked)
                return false;

            var fullFit = e.ctrlKey,
                id = parseInt(item.id, 10),
                feat = feats[id],
                pointsAdded = 0;

            if ((feat.PointsNeeded() > usedPoints(feat.tree)) ||
                (totalUsedPoints() >= 79) ||
                (feat.parent != null && !findParent(feat).IsFullyFitted())) {
                return false;
            }

            pointsAdded = feat.IncreaseUsedPoints(fullFit, totalAvailablePoints());
            if (pointsAdded > 0) {
                addPoint(feat, pointsAdded);
                query('#feat-description').innerHTML(feat.GetDescription());
                updateBorder(feat);
                checkImages(feat, {click: "left"});
            }

            return false;
        };

        var updateBorder = function (feat, ommitCheckingEnabled) {
            var id = feat.Id(),
                enabled = isEnabled(feat),
                border = query('#'+id+' .border'),
                i = 0;

            ommitCheckingEnabled = typeof ommitCheckingEnabled !== 'undefined' ? ommitCheckingEnabled : false;

            for (i = 0; i < _borderClasses.length; i++) {
                border.removeClass(_borderClasses[id]);
            }

            if (ommitCheckingEnabled) {
                border.addClass(feat.row == 1 ? 'b-inactive' : 'b-active');
            } else {
                border.addClass( enabled ? (feat.IsFullyFitted() ? 'b-full' : 'b-active' ) : 'b-inactive');
            }
        };

        var rightClick = function (e) {
            e.preventDefault();

            if (_locked)
                return;

            var item = e.fromTarget || e.currentTarget;
            if (item == undefined)
                return false;

            var id = parseInt(item.id, 10);
            var feat = feats[id];
            var feated = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      // number of points on each level
            var allowed = true;
            var sum = 0;
            var childEmpty = true;
            var maxReq = 0;
            var maxReqFeated = 0;
            var allLevelsOk = true;

            array.forEach(feats, function (entry, i) {
                if (entry.tree == feat.tree) {
                    if (entry.parent != null && entry.parent[0] == feat.row && entry.parent[1] == feat.column) {
                        childEmpty = !entry.HasAnyPoints();
                    }

                    if (entry.row > feat.row && entry.HasAnyPoints()) {
                        allowed = false;
                    } else if (entry.row <= feat.row && entry.HasAnyPoints()) {
                        sum += entry.Points()
                    }

                    if (entry.HasAnyPoints() && entry.PointsNeeded() > maxReq)
                        maxReq = entry.PointsNeeded();

                    for (var i = 1; i <= 9; i++) {
                        if (entry.row <= i) {
                            feated[i] += entry.Points();
                        }
                    }
                }
            });

            var topFeat = maxReq / 5;
            for (var i = feat.row; i <= topFeat; i++) {
                var xreq = i * 5;
                if (feated[i] <= xreq) {
                    allLevelsOk = false;
                    break;
                }
            }

            array.forEach(feats, function (entry, i) {
                if (entry.tree == feat.tree && entry.PointsNeeded() == maxReq) {
                    maxReqFeated = maxReqFeated + entry.Points();
                }
            });

            if (allLevelsOk && childEmpty && (allowed || (!allowed && sum > (feat.PointsNeeded() + 5)))
                && (feat.PointsNeeded() == maxReq || maxReq < usedPoints(feat.tree) - maxReqFeated) && feat.DecreaseUsedPoints()) {
                removePoint(feat);
                //updatePointsAndBorder(item, feat);
                query('#feat-description').innerHTML(feats[id].GetDescription());
                checkImages(feat, {click: "right"});
                //getRating();
            }

            return false;
        };

        var clear = function (tree) {

            if (_locked)
                return;

            if (typeof tree == 'undefined') {
                _usedPoints = [0,0,0,0];
                array.forEach(feats, function (e, i) {
                    e.usedPoints = 0;
                    var node = dom.byId(i.toString());
                    //updatePointsAndBorder(node, e, true);
                });
            } else {
                _usedPoints[tree] = 0;
                array.forEach(feats, function (e, i) {
                    if (e.tree == tree)
                    {
                        e.usedPoints = 0;
                        var node = dom.byId(i.toString());
                        //updatePointsAndBorder(node, e, true);
                    }
                });
            }

            showPoints();
            checkImages();
            createLink();
            //getRating();
        };

        var getChoppedIngameLink = function(link) {
            var result = [];
            link = link.substring(3, link.length)
            for (var i = 0; link.length > 0; i++) {
                var value = link.substring(0, 5);
                var intValue = parseInt(value, 16);
                result[i] = intValue.toString();
                link = link.substring(5, link.length)
            }

            return result;
        };

        var isValid = function(link) {
            if (link == "")
                return true;

            if (link.length < 3)
                return false;

            var prefixes = ['118','11c','112','127','114','11f','116','12c','129','11d','12b', '122'],
                linkPrefix = link.slice(0, 3),
                isHex = array.indexOf(prefixes, linkPrefix) !== -1;

            if (isHex) {     // hex link
                var sublink = link.substring(3, link.length)
                for (var i = 0; sublink.length > 0; i++) {
                    var value = sublink.substring(0, 5);
                    if (value.length != 5) return false;
                    var intValue = parseInt(value, 16);
                    if (isNaN(intValue)) return false;
                    sublink = sublink.substring(5, link.length)
                }
            } else if (link.length == feats.length) {                   // decimal link
                for (var i = 0; i < link.length; i++) {
                    var intVal = parseInt(link[i]);
                    if (isNaN(intVal)) return false;
                    if (!(intVal >= 0 && intVal <= 5)) return false;
                }
            } else return false;

            return true;
        };

        var setupZeroClipboard = function() {
            ZeroClipboard.setMoviePath(settings['zeroClipboardPath'] || alert('Could not load ZeroClipboard library!'));
            var clip1 = new ZeroClipboard.Client();
            clip1.addEventListener("onMouseDown", function (event) {
                clip1.setText(dom.byId('link').value);
            });
            clip1.glue('copykey');

            on(window, "resize", function () {
                clip1.reposition();
            });
        };

        var setupSelectionOnLink = function() {
            query('#link').on('click, focus', function(e) {
                e.target.select();
            });

            query('#link').on('mouseup', function(e) {
                e.preventDefault();
            });
        };

        var initialize = function (load) {
            if (settings == undefined || settings["classTree"] == undefined)
                return;

            // fill proper data from class *.js file
            var classFeatsObj = settings.classFeats();
            dom.byId('tree1name').innerHTML = classFeatsObj.treeNames[0];
            dom.byId('tree2name').innerHTML = classFeatsObj.treeNames[1];
            dom.byId('link-id').innerHTML = classFeatsObj.id;

            _usedPoints = [0, 0, 0, 0];
            feats = _classFeats.concat(_generalFeats());

            var linkId = query('#link-id').text();
            var valid = isValid(settings["link"]);
            var ingame = settings['link'].indexOf(linkId) == 0;

            array.forEach(feats, function (e, i) {
                var innerDiv = query('div#feat-planner table').at(e.tree - 1).query('tr').at(e.row).query('td').at(e.column - 1).query('div.fh')[0];

                if (ingame) {
                    e.usedPoints = 0;

                    if (valid) {                // init only when valid
                        var featVals = getChoppedIngameLink(settings['link'])
                        array.forEach(featVals, function(fe) {
                            if (fe.indexOf(e.RawId()) == 0) {
                                var toAdd = parseInt(fe.substring(fe.length - 1, fe.length)) + 1;
                                e.usedPoints = toAdd;
                                _usedPoints[e.tree] += toAdd;
                            }
                        });
                    }
                } else {
                    e.usedPoints = 0;

                    if (settings['link'] != "" && valid) {
                        var numb = parseInt(settings['link'][i], 10);
                        if (!isNaN(numb) && numb >= 0 && numb <= 5) {
                            e.usedPoints = numb;
                            _usedPoints[e.tree] += numb;
                        }
                    }
                }

                innerDiv.id = i;

                on(innerDiv, mouse.enter, showDescription);
                on(innerDiv, mouse.leave, hideDescription);
                on(innerDiv, 'click', leftClick);
                on(innerDiv, 'contextmenu', rightClick);


                innerDiv.innerHTML = featCellCode(e);
                if (e.parent != null)
                    domConstruct.place(getArrowCode(e), innerDiv, 'after');

                domConstruct.place(getPointsCode(e), innerDiv, 'after');
            });

            if (!valid) {
                dom.byId('flash').innerHTML = '*Provided build link is invalid* - ';
            }

            query('#feat-planner-container').after('<div id="feat-description"></div>');

            setupZeroClipboard();
            setupSelectionOnLink();

            on(dom.byId('view'), 'click', function() {
                var checkbox = dom.byId('view');
                if (!checkbox.checked) {
                    if (_cachedUrl.length === 0) {
                        dom.byId('view').disabled = true;
                        // todo shortening
                        xhr.post(settings.shorten, {
                                data: {
                                    link: window.location
                                },
                                handleAs: "json"
                        }).then(
                            // success
                            function(data) {
                                _cachedUrl = data["shorturl"];
                                dom.byId('link').value = _cachedUrl;
                            },
                            //error
                            function(err) {
                                on.emit(dom.byId('link-hidden'), 'change', {
                                    bubbles: true,
                                    cancelable: true
                                });
                        }).always(function() { dom.byId('view').disabled = false; });
                    } else {
                       dom.byId('link').value = _cachedUrl;
                    }
                } else {
                    on.emit(dom.byId('link-hidden'), 'change', {
                        bubbles: true,
                        cancelable: true
                    });
                }
            });

            on(dom.byId('load'), 'click', function() {
                var input = query('#link').val();
                if (input !== '' && isValid(input)) {
                    document.location.href = query('#import-base').text() + input;
                }
            });

            on(dom.byId('link-hidden'), 'change', function() {
                dom.byId('link').value = this.value;
            });

            on(dom.byId('clear-button'), 'click', function() { clear(); });
            query('#clear-tree1, #clear-tree2, #clear-tree3').on('click', function(e) {
                if (e.target.id == 'clear-tree1') {
                    clear(1);
                } else if (e.target.id == 'clear-tree2') {
                    clear(2);
                } else if (e.target.id == 'clear-tree3') {
                    clear(3);
                }
            });

            showPoints();
            checkImages();
            createLink();
        };

        return function (load) {
                initialize(load);
            }
    };
});