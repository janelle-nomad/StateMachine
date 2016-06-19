var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // END 5 CLASS
    var End5 = (function (_super) {
        __extends(End5, _super);
        // CONSTRUCTOR
        function End5() {
            _super.call(this);
        }
        // PUBLIC METHODS
        End5.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("While you try to come up with something\n\n\nconfident to say the staff member calls the kids parents\n\n\nDarn", "1.5em Consolas", "#000000", 220, 120);
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
        End5.prototype.update = function () {
            this._gameOverLabel.rotation += 5;
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Restart Button Click
        End5.prototype._clickRestartButton = function (event) {
            changeState(config.MENU_STATE);
        };
        return End5;
    }(objects.Scene));
    states.End5 = End5;
})(states || (states = {}));
