var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // END 3 CLASS
    var End3 = (function (_super) {
        __extends(End3, _super);
        // CONSTRUCTOR
        function End3() {
            _super.call(this);
        }
        // PUBLIC METHODS
        End3.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("You turn out to be quite terrible at\n\n\naxe-throwing, so terrible in fact that you\n\n\naccidentally chop off your thumb", "1.5em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage
            // game over label
            this._gameOverLabel = new objects.Label("Game Over", "60px Consolas", "#000000", 320, 240);
            this.addChild(this._gameOverLabel); // add label to the stage
            // restart button
            this._restartButton = new objects.Button("BackButton", 320, 340);
            this._restartButton.on("click", this._clickRestartButton, this); // event listener
            this.addChild(this._restartButton);
            stage.addChild(this);
        };
        End3.prototype.update = function () {
            this._gameOverLabel.rotation += 5;
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Restart Button Click
        End3.prototype._clickRestartButton = function (event) {
            changeState(config.MENU_STATE);
        };
        return End3;
    }(objects.Scene));
    states.End3 = End3;
})(states || (states = {}));
//# sourceMappingURL=end3.js.map