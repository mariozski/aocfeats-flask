define(["dojo/string"],
function(string) {

    var Feat = function (id, tree, row, column, imgIndex, availablePoints, parent, featDescription) {
        this.id = id;
        this.tree = tree;
        this.row = row;
        this.column = column;
        this.availablePoints = availablePoints;
        this.imgIndex = imgIndex;
        this.usedPoints = 0;
        this.parent = parent;
        this.size = 38;
        this.description = featDescription;
        this.description.parent = this;
        this.positionX = (-this.imgIndex * this.size) + 'px';
    };

    Feat.prototype.SortId = function() {
        var shouldAdd = (this.parent != null
            && this.parent[0] == this.row
            && this.parent[1] > this.column);
        return parseInt(this.tree.toString() + this.row.toString() + (shouldAdd ? this.parent[1] : this.column).toString() + (shouldAdd ? '1' : '0'), 10);
    };

    Feat.prototype.PositionX = function () {
        return this.positionX;
    }

    Feat.prototype.PositionY = function () {
        return (-this.usedPoints * 16) + 'px';
    }

    Feat.prototype.Id = function() {
        return string.pad((this.id + this.usedPoints - 1).toString(16), 5, '0');
    };


    Feat.prototype.RawId = function() {
        return this.id.toString().substr(0, this.id.toString().length - 1)
    };

    Feat.prototype.IncreaseUsedPoints = function (fullyFit, maxPoints) {
        var p = 0,
            addedPoints = 0;

        if (fullyFit) {
            addedPoints = (maxPoints <= this.availablePoints ? maxPoints : this.availablePoints - this.usedPoints);
            p = this.usedPoints + addedPoints;
        } else {
            addedPoints = 1;
            p = this.usedPoints + addedPoints;
        }

        if (p <= this.availablePoints) {
            this.usedPoints = p;
            return addedPoints;
        }

        return 0;
    };

    Feat.prototype.DecreaseUsedPoints = function () {
        var p = this.usedPoints - 1;
        if (p >= 0) {
            this.usedPoints = p;
            return true;
        }

        return false;
    };

    Feat.prototype.GetDescription = function () {
        return this.description.GetDescription();
    };

    Feat.prototype.PointsNeeded = function () {
        return (this.row - 1) * 5;
    };

    Feat.prototype.HasAnyPoints = function () {
        return this.usedPoints != 0;
    };

    Feat.prototype.Points = function () {
        return this.usedPoints;
    };

    Feat.prototype.IsFullyFitted = function () {
        return this.usedPoints == this.availablePoints;
    };

    return Feat;
}); //!-- require

