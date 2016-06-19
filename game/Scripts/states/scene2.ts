module states {
    // SCENE 2 CLASS
    export class Scene2 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;

        _nextButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        //
        public start(): void {

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
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Next Button Click
        private _clickNextButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("select");
            changeState(config.SCENE_3);
        }
    }
}    