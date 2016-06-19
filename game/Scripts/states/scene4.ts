module states {
    // SCENE 4 CLASS
    export class Scene4 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;
        _choiceTrendyLabel: objects.Label;
        _choiceGothicLabel: objects.Label;

        _choiceTrendyButton: objects.Button;
        _choiceGothicButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            if (transit == true) {
                // level label
                this._levelLabel = new objects.Label("You all head back and you notice your wwallet is gone, and so is the cat...\n\n\nYour upset, but the kids try to cheer you up.\n\n\nYour upset\n\n\nShould you go back to the eatery?\n\n\n\nOr call and cancel your cards?", "1.5em Consolas", "#000000", 220, 120);
            } else {
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
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        private _clickChoiceTrendyButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("select");
            changeState(config.SCENE_5);
        }

        // Callback function / Event Handler for Choice 2 Button Click
        private _clickChoiceGothicButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("select");
            changeState(config.SCENE_7);
        }
    }
}     