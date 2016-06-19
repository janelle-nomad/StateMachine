var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // SCENE 4 CLASS
    var Scene4 = (function (_super) {
        __extends(Scene4, _super);
        // CONSTRUCTOR
        function Scene4() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Scene4.prototype.start = function () {
            if (transit == true) {
                // level label
                this._levelLabel = new objects.Label("You all head back and you notice your wwallet is gone, and so is the cat...\n\n\nYour upset, but the kids try to cheer you up.\n\n\nYour upset\n\n\nShould you go back to the eatery?\n\n\n\nOr call and cancel your cards?", "1.5em Consolas", "#000000", 220, 120);
            }
            else {
                // level label
                this._levelLabel = new objects.Label("You have no signal, you all headed to a local eatery\n\n\nUh-oh your wallet is missing! The cat is gone as well \n\n\nShould you go back to the eatery?\n\n\nOr stay in, and your cancel cards?", "1.5em Consolas", "#000000", 220, 120);
            }
            this.addChild(this._levelLabel); // add label to the stage          
            // choice 1 label
            this._choiceTrendyLabel = new objects.Label("Go back", "1.5em Consolas", "#000000", 210, 300);
            this.addChild(this._choiceTrendyLabel);
            // choice 1 button
            this._choiceTrendyButton = new objects.Button("NextButton", 220, 360);
            this._choiceTrendyButton.on("click", this._clickChoiceTrendyButton, this); // event listener
            this.addChild(this._choiceTrendyButton);
            // choice 2 label
            this._choiceGothicLabel = new objects.Label("Call and cancel", "1.5em Consolas", "#000000", 410, 300);
            this.addChild(this._choiceGothicLabel);
            // choice 2 button
            this._choiceGothicButton = new objects.Button("NextButton", 420, 360);
            this._choiceGothicButton.on("click", this._clickChoiceGothicButton, this); // event listener
            this.addChild(this._choiceGothicButton);
            stage.addChild(this);
        };
        Scene4.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        Scene4.prototype._clickChoiceTrendyButton = function (event) {
            createjs.Sound.play("select");
            changeState(config.SCENE_5);
        };
        // Callback function / Event Handler for Choice 2 Button Click
        Scene4.prototype._clickChoiceGothicButton = function (event) {
            createjs.Sound.play("select");
            changeState(config.SCENE_7);
        };
        return Scene4;
    }(objects.Scene));
    states.Scene4 = Scene4;
})(states || (states = {}));
