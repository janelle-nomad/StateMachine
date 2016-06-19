module states {
    // SCENE 9 CLASS
    export class Scene9 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;
        _choiceFoodLabel: objects.Label;
        _choiceMagicLabel: objects.Label;

        _choiceFoodButton: objects.Button;
        _choiceMagicButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // level label
            this._levelLabel = new objects.Label("The cat speaks with a human voice and asks you to open the door behind you\n\n\nWhat should you do next?\n\n\n\n\n\nKick it out of the house\n\n\n\n\n\nOr, trust it, and open the door behind you", "1.5em Consolas", "#000000", 220, 130);
            this.addChild(this._levelLabel); // add label to the stage

            // choice 1 label
            this._choiceFoodLabel = new objects.Label("Kick it out", "1.5em Consolas", "#000000", 200, 300);
            this.addChild(this._choiceFoodLabel);
            // choice 1 button
            this._choiceFoodButton = new objects.Button("NextButton", 220, 360);
            this._choiceFoodButton.on("click", this._clickChoiceFoodButton, this); // event listener
            this.addChild(this._choiceFoodButton);

            // choice 2 label
            this._choiceMagicLabel = new objects.Label("Open door", "1.5em Consolas", "#000000", 410, 300);
            this.addChild(this._choiceMagicLabel);
            // choice 2 button
            this._choiceMagicButton = new objects.Button("NextButton", 420, 360);
            this._choiceMagicButton.on("click", this._clickChoiceMagicButton, this); // event listener
            this.addChild(this._choiceMagicButton);

            stage.addChild(this);
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        private _clickChoiceFoodButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END6);
        }

        // Callback function / Event Handler for Choice 2 Button Click
        private _clickChoiceMagicButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("yay");
            changeState(config.SCENE_END9);
        }
    }
}     