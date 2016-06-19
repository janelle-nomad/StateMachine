var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // SCENE 0 CLASS
    var Scene0 = (function (_super) {
        __extends(Scene0, _super);
        // CONSTRUCTOR
        function Scene0() {
            _super.call(this);
        }
        // PUBLIC METHODS
        Scene0.prototype.start = function () {
            // level label
            this._levelLabel = new objects.Label("It's Friday night, and your stuck babysitting\n\n\n\nDo you...\n\n\nPut the kids early to bed, & sneak out? \n\n\n Or...\n\n\n Play a game of snakes and ladders?", "1.5em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage
            // choice 1 label
            this._choiceStayInLabel = new objects.Label("Sneak Out", "1.5em Consolas", "#000000", 210, 300);
            this.addChild(this._choiceStayInLabel);
            // choice 1 button
            this._choiceStayInButton = new objects.Button("NextButton", 220, 360);
            this._choiceStayInButton.on("click", this._clickStayInButton, this); // event listener
            this.addChild(this._choiceStayInButton);
            // choice 2 label
            this._choiceGoOutLabel = new objects.Label("Play Game", "1.5em Consolas", "#000000", 410, 300);
            this.addChild(this._choiceGoOutLabel);
            // choice 2 button
            this._choiceGoOutButton = new objects.Button("NextButton", 420, 360);
            this._choiceGoOutButton.on("click", this._clickGoOutButton, this); // event listener
            this.addChild(this._choiceGoOutButton);
            charisma = 0;
            stage.addChild(this);
        };
        Scene0.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        Scene0.prototype._clickStayInButton = function (event) {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END1);
        };
        // Callback function / Event Handler for Choice 2 Button Click
        Scene0.prototype._clickGoOutButton = function (event) {
            createjs.Sound.play("select");
            changeState(config.SCENE_1);
        };
        return Scene0;
    }(objects.Scene));
    states.Scene0 = Scene0;
})(states || (states = {}));
