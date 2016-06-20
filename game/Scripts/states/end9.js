var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // END 9 CLASS --- THE GOOD ENDING
    var End9 = (function (_super) {
        __extends(End9, _super);
        // CONSTRUCTOR
        function End9() {
            _super.call(this);
        }
        // PUBLIC METHODS
        End9.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("The door is heavy as you push it open\n\n\nBefore your eyes are billions of 100 dollar bills before you\n\nrabbit disappear\n\n\nYou call the parents and they are happy but are more than willing for you to accept the cash, as it was your hard efforts that allowed it.\n\n\nYou are now a wealthy, but promise to use for mostly good deeds", "1.5em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage
            // game over label
            this._youWinLabel = new objects.Label("You Win!", "60px Consolas", "#000000", 320, 340);
            this.addChild(this._youWinLabel); // add label to the stage
            stage.addChild(this);
        };
        End9.prototype.update = function () {
            this._youWinLabel.rotation += 5;
        };
        return End9;
    }(objects.Scene));
    states.End9 = End9;
})(states || (states = {}));
//# sourceMappingURL=end9.js.map