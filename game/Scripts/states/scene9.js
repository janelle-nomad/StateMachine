var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // SCENE 9 CLASS
    var Scene9 = (function (_super) {
        __extends(Scene9, _super);
        // CONSTRUCTOR
        function Scene9() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Scene9.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("The cat speaks with a human voice and asks you to open the door behind you\n\n\nWhat should you do next?\n\n\n\n\n\nKick it out of the house\n\n\n\n\n\nOr, trust it, and open the door behind you", "1.5em Consolas", "#000000", 220, 130);
            this.addChild(this._levelLabel); // add label to the stage
            // choice 1 label
            this._choiceFoodLabel = new objects.Label("Kick it out", "1.5em Consolas", "#000000", 200, 300);
            this.addChild(this._choiceFoodLabel);
            // choice 1 button
            this._choiceFoodButton = new objects.Button("NextButton", 220, 360);
            this._choiceFoodButton.on("click", this._clickChoiceFoodButton, this); // event listener
            this.addChild(this._choiceFoodButton);
            // choice 2 label
            this._choiceMagicLabel = new objects.Label("Open door", "1.5em Consolas", "#000000", 410, 300);
            this.addChild(this._choiceMagicLabel);
            // choice 2 button
            this._choiceMagicButton = new objects.Button("NextButton", 420, 360);
            this._choiceMagicButton.on("click", this._clickChoiceMagicButton, this); // event listener
            this.addChild(this._choiceMagicButton);
            stage.addChild(this);
        };
        Scene9.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        Scene9.prototype._clickChoiceFoodButton = function (event) {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END6);
        };
        // Callback function / Event Handler for Choice 2 Button Click
        Scene9.prototype._clickChoiceMagicButton = function (event) {
            createjs.Sound.play("yay");
            changeState(config.SCENE_END9);
        };
        return Scene9;
    }(objects.Scene));
    states.Scene9 = Scene9;
})(states || (states = {}));
