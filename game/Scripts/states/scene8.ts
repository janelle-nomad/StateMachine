module states {
    // SCENE 8 CLASS
    export class Scene8 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;
        _choiceComplimentLabel: objects.Label;
        _choiceLieLabel: objects.Label;

        _choiceComplimentButton: objects.Button;
        _choiceLieButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // level label
            this._levelLabel = new objects.Label("Maybe you could try asking nicely?", "1.25em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage

            // choice 1 label
            this._choiceComplimentLabel = new objects.Label("Compliment", "1.5em Consolas", "#000000", 180, 300);
            this.addChild(this._choiceComplimentLabel);
            // choice 1 button
            this._choiceComplimentButton = new objects.Button("NextButton", 200, 360);
            this._choiceComplimentButton.on("click", this._clickChoiceComplimentButton, this); // event listener
            this.addChild(this._choiceComplimentButton);

            // choice 2 label
            this._choiceLieLabel = new objects.Label("Threaten", "1.5em Consolas", "#000000", 430, 300);
            this.addChild(this._choiceLieLabel);
            // choice 2 button
            this._choiceLieButton = new objects.Button("NextButton", 440, 360);
            this._choiceLieButton.on("click", this._clickChoiceLieButton, this); // event listener
            this.addChild(this._choiceLieButton);

            stage.addChild(this);
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        private _clickChoiceComplimentButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END4);
        }

        // Callback function / Event Handler for Choice 2 Button Click
        private _clickChoiceLieButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END5);
        }
    }
}     