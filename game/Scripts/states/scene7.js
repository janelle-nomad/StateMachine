var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // SCENE 7 CLASS
    var Scene7 = (function (_super) {
        __extends(Scene7, _super);
        // CONSTRUCTOR
        function Scene7() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Scene7.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("You cancel your cards and lie down on the sofa\n\n\nThe cat emerges infront of you\n\n\nYell at the cat\n\n\n\n\n\nOr chase it out of the house?\n\n\n\n\n\nOr the brightly lit family friendly\n\n\nthoroughfare.", "1.5em Consolas", "#000000", 220, 130);
            this.addChild(this._levelLabel); // add label to the stage
            // choice 1 label
            this._choiceDarkAlleyLabel = new objects.Label("Yell", "1.5em Consolas", "#000000", 200, 300);
            this.addChild(this._choiceDarkAlleyLabel);
            // choice 1 button
            this._choiceDarkAlleyButton = new objects.Button("NextButton", 220, 360);
            this._choiceDarkAlleyButton.on("click", this._clickChoiceDarkAlleyButton, this); // event listener
            this.addChild(this._choiceDarkAlleyButton);
            // choice 2 label
            this._choiceHappyStreetLabel = new objects.Label("Chase", "1.5em Consolas", "#000000", 410, 300);
            this.addChild(this._choiceHappyStreetLabel);
            // choice 2 button
            this._choiceHappyStreetButton = new objects.Button("NextButton", 420, 360);
            this._choiceHappyStreetButton.on("click", this._clickChoiceHappyStreetButton, this); // event listener
            this.addChild(this._choiceHappyStreetButton);
            stage.addChild(this);
        };
        Scene7.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        Scene7.prototype._clickChoiceDarkAlleyButton = function (event) {
            createjs.Sound.play("select");
            changeState(config.SCENE_8);
        };
        // Callback function / Event Handler for Choice 2 Button Click
        Scene7.prototype._clickChoiceHappyStreetButton = function (event) {
            createjs.Sound.play("select");
            changeState(config.SCENE_9);
        };
        return Scene7;
    }(objects.Scene));
    states.Scene7 = Scene7;
})(states || (states = {}));
//# sourceMappingURL=scene7.js.map