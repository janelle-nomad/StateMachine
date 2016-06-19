var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // SCENE 8 CLASS
    var Scene8 = (function (_super) {
        __extends(Scene8, _super);
        // CONSTRUCTOR
        function Scene8() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Scene8.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("Maybe you could try asking nicely?", "1.25em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage
            // choice 1 label
            this._choiceComplimentLabel = new objects.Label("Compliment", "1.5em Consolas", "#000000", 180, 300);
            this.addChild(this._choiceComplimentLabel);
            // choice 1 button
            this._choiceComplimentButton = new objects.Button("NextButton", 200, 360);
            this._choiceComplimentButton.on("click", this._clickChoiceComplimentButton, this); // event listener
            this.addChild(this._choiceComplimentButton);
            // choice 2 label
            this._choiceLieLabel = new objects.Label("Threaten", "1.5em Consolas", "#000000", 430, 300);
            this.addChild(this._choiceLieLabel);
            // choice 2 button
            this._choiceLieButton = new objects.Button("NextButton", 440, 360);
            this._choiceLieButton.on("click", this._clickChoiceLieButton, this); // event listener
            this.addChild(this._choiceLieButton);
            stage.addChild(this);
        };
        Scene8.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        Scene8.prototype._clickChoiceComplimentButton = function (event) {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END4);
        };
        // Callback function / Event Handler for Choice 2 Button Click
        Scene8.prototype._clickChoiceLieButton = function (event) {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END5);
        };
        return Scene8;
    }(objects.Scene));
    states.Scene8 = Scene8;
})(states || (states = {}));
