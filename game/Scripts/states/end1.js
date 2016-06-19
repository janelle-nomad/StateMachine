var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // END 1 CLASS
    var End1 = (function (_super) {
        __extends(End1, _super);
        // CONSTRUCTOR
        function End1() {
            _super.call(this);
        }
        // PUBLIC METHODS
        End1.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("You try to put the kids to bed early, but they get unruly \n\n They tell their parents, and you later get a bad review...", "1.5em Consolas", "#000000", 220, 120);
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
        End1.prototype.update = function () {
            this._gameOverLabel.rotation += 5;
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Restart Button Click
        End1.prototype._clickRestartButton = function (event) {
            changeState(config.MENU_STATE);
        };
        return End1;
    }(objects.Scene));
    states.End1 = End1;
})(states || (states = {}));
