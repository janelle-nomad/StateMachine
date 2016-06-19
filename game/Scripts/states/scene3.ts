module states {
    // SCENE 3 CLASS
    export class Scene3 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;
        _choiceTransitLabel: objects.Label;
        _choiceRideshareLabel: objects.Label;

        _choiceTransitButton: objects.Button;
        _choiceRideshareButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

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
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        private _clickChoiceTransitButton(event: createjs.MouseEvent): void {
            charisma--;
            transit = true;
            createjs.Sound.play("select");
            changeState(config.SCENE_4);
        }

        // Callback function / Event Handler for Choice 2 Button Click
        private _clickChoiceRideshareButton(event: createjs.MouseEvent): void {
            charisma++;
            transit = false;
            createjs.Sound.play("select");
            changeState(config.SCENE_4);
        }
    }
}    