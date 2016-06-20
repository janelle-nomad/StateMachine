var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // SCENE 3 CLASS
    var Scene3 = (function (_super) {
        __extends(Scene3, _super);
        // CONSTRUCTOR
        function Scene3() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Scene3.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("Wanna head out for pizza?\n\n\nOr just boot up your food ordering app?", "1.5em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage
            // choice 1 label
            this._choiceTransitLabel = new objects.Label("Head out", "1.5em Consolas", "#000000", 200, 300);
            this.addChild(this._choiceTransitLabel);
            // choice 1 button
            this._choiceTransitButton = new objects.Button("NextButton", 220, 360);
            this._choiceTransitButton.on("click", this._clickChoiceTransitButton, this); // event listener
            this.addChild(this._choiceTransitButton);
            // choice 2 label
            this._choiceRideshareLabel = new objects.Label("Order food", "1.5em Consolas", "#000000", 410, 300);
            this.addChild(this._choiceRideshareLabel);
            // choice 2 button
            this._choiceRideshareButton = new objects.Button("NextButton", 420, 360);
            this._choiceRideshareButton.on("click", this._clickChoiceRideshareButton, this); // event listener
            this.addChild(this._choiceRideshareButton);
            stage.addChild(this);
        };
        Scene3.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        Scene3.prototype._clickChoiceTransitButton = function (event) {
            charisma--;
            transit = true;
            createjs.Sound.play("select");
            changeState(config.SCENE_4);
        };
        // Callback function / Event Handler for Choice 2 Button Click
        Scene3.prototype._clickChoiceRideshareButton = function (event) {
            charisma++;
            transit = false;
            createjs.Sound.play("select");
            changeState(config.SCENE_4);
        };
        return Scene3;
    }(objects.Scene));
    states.Scene3 = Scene3;
})(states || (states = {}));
//# sourceMappingURL=scene3.js.map