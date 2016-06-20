module states {
    // SCENE 1 CLASS
    export class Scene1 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;
        _choiceThinking: objects.Label;
        _choiceThinkIgnore: objects.Label;

        _choiceThinkingDoorButton: objects.Button;
        _choiceThinkIgnoreButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // level label
            this._levelLabel = new objects.Label("You decide to play snakes and ladders\n\n\n\nWhen there's a knock on the door", "1.5em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage

            // choice 1 label
            this._choiceThinking = new objects.Label("Ignore it", "1.5em Consolas", "#000000", 210, 300);
            this.addChild(this._choiceThinking);
            // choice 1 button
            this._choiceThinkingDoorButton = new objects.Button("NextButton", 220, 360);
            this._choiceThinkingDoorButton.on("click", this._clickChoiceFashionButton, this); // event listener
            this.addChild(this._choiceThinkingDoorButton);

            // choice 2 label
            this._choiceThinkIgnore = new objects.Label("Open the door", "1.5em Consolas", "#000000", 410, 300);
            this.addChild(this._choiceThinkIgnore);
            // choice 2 button
            this._choiceThinkIgnoreButton = new objects.Button("NextButton", 420, 360);
            this._choiceThinkIgnoreButton.on("click", this._clickChoiceComfortButton, this); // event listener
            this.addChild(this._choiceThinkIgnoreButton);

            stage.addChild(this);
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        private _clickChoiceFashionButton(event: createjs.MouseEvent): void {
            charisma--;
            createjs.Sound.play("select");
            changeState(config.SCENE_2);
        }

        // Callback function / Event Handler for Choice 2 Button Click
        private _clickChoiceComfortButton(event: createjs.MouseEvent): void {
            charisma++;
            createjs.Sound.play("select");
            changeState(config.SCENE_2);
        }
    }
}   