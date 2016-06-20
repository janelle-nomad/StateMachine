var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // SCENE 6 CLASS
    var Scene6 = (function (_super) {
        __extends(Scene6, _super);
        // CONSTRUCTOR
        function Scene6() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Scene6.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("A group of good looking people are\n\n\ndiscussing musical taste with great abandon.\n\n\nThey ask you to name a selection.\n\n\n\n\n\nMake a selection as obscure as possible?\n\n\nOr select a particularly nostalgic break-up\n\n\nsong?", "1.5em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage
            // choice 1 label
            this._choiceObscureLabel = new objects.Label("Obscure", "1.5em Consolas", "#000000", 210, 300);
            this.addChild(this._choiceObscureLabel);
            // choice 1 button
            this._choiceObscureButton = new objects.Button("NextButton", 220, 360);
            this._choiceObscureButton.on("click", this._clickObscureButton, this); // event listener
            this.addChild(this._choiceObscureButton);
            // choice 2 label
            this._choiceEmotionalLabel = new objects.Label("Emotional", "1.5em Consolas", "#000000", 410, 300);
            this.addChild(this._choiceEmotionalLabel);
            // choice 2 button
            this._choiceEmotionalButton = new objects.Button("NextButton", 420, 360);
            this._choiceEmotionalButton.on("click", this._clickEmotionalButton, this); // event listener
            this.addChild(this._choiceEmotionalButton);
            charisma = 0;
            stage.addChild(this);
        };
        Scene6.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        Scene6.prototype._clickObscureButton = function (event) {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END7);
        };
        // Callback function / Event Handler for Choice 2 Button Click
        Scene6.prototype._clickEmotionalButton = function (event) {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END8);
        };
        return Scene6;
    }(objects.Scene));
    states.Scene6 = Scene6;
})(states || (states = {}));
//# sourceMappingURL=scene6.js.map