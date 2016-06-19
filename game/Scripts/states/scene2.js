var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // SCENE 2 CLASS
    var Scene2 = (function (_super) {
        __extends(Scene2, _super);
        // CONSTRUCTOR
        function Scene2() {
            _super.call(this);
        }
        // PUBLIC METHODS
        //
        Scene2.prototype.start = function () {
            if (charisma < 0) {
                // level label
                this._levelLabel = new objects.Label("You ignore it and loos to snakes and ladders to three 6 year olds\n\n\n..WOW \n\n\nYou and the kids are hungry", "1.5em Consolas", "#000000", 220, 120);
            }
            if (charisma > 0) {
                // level label
                this._levelLabel = new objects.Label("There's no one at the door when you open it \n\n\n but a black cat runs inside WEIRD...", "1.5em Consolas", "#000000", 220, 120);
            }
            this.addChild(this._levelLabel); // add label to the stage
            // choice 1 button
            this._nextButton = new objects.Button("NextButton", 320, 360);
            this._nextButton.on("click", this._clickNextButton, this); // event listener
            this.addChild(this._nextButton);
            stage.addChild(this);
        };
        Scene2.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Next Button Click
        Scene2.prototype._clickNextButton = function (event) {
            createjs.Sound.play("select");
            changeState(config.SCENE_3);
        };
        return Scene2;
    }(objects.Scene));
    states.Scene2 = Scene2;
})(states || (states = {}));
