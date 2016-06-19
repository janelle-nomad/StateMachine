module states {
    // SCENE 6 CLASS
    export class Scene6 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;
        _choiceObscureLabel: objects.Label;
        _choiceEmotionalLabel: objects.Label;

        _choiceObscureButton: objects.Button;
        _choiceEmotionalButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

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
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        private _clickObscureButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END7);
        }

        // Callback function / Event Handler for Choice 2 Button Click
        private _clickEmotionalButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END8);
        }
    }
}  