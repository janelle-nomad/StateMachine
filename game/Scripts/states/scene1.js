var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // SCENE 1 CLASS
    var Scene1 = (function (_super) {
        __extends(Scene1, _super);
        // CONSTRUCTOR
        function Scene1() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Scene1.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("You decide to play snakes and ladders\n\n\n\nWhen there's a knock on the door", "1.5em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage
            // choice 1 label
            this._choiceThinking = new objects.Label("Ignore it", "1.5em Consolas", "#000000", 210, 300);
            this.addChild(this._choiceThinking);
            // choice 1 button
            this._choiceThinkingDoorButton = new objects.Button("NextButton", 220, 360);
            this._choiceThinkingDoorButton.on("click", this._clickChoiceFashionButton, this); // event listener
            this.addChild(this._choiceThinkingDoorButton);
            // choice 2 label
            this._choiceThinkIgnore = new objects.Label("Open the door", "1.5em Consolas", "#000000", 410, 300);
            this.addChild(this._choiceThinkIgnore);
            // choice 2 button
            this._choiceThinkIgnoreButton = new objects.Button("NextButton", 420, 360);
            this._choiceThinkIgnoreButton.on("click", this._clickChoiceComfortButton, this); // event listener
            this.addChild(this._choiceThinkIgnoreButton);
            stage.addChild(this);
        };
        Scene1.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        Scene1.prototype._clickChoiceFashionButton = function (event) {
            charisma--;
            createjs.Sound.play("select");
            changeState(config.SCENE_2);
        };
        // Callback function / Event Handler for Choice 2 Button Click
        Scene1.prototype._clickChoiceComfortButton = function (event) {
            charisma++;
            createjs.Sound.play("select");
            changeState(config.SCENE_2);
        };
        return Scene1;
    }(objects.Scene));
    states.Scene1 = Scene1;
})(states || (states = {}));
//# sourceMappingURL=scene1.js.map