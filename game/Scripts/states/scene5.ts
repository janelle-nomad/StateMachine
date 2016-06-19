module states {
    // SCENE 5 CLASS
    export class Scene5 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _introLabel: objects.Label;
        _levelLabel: objects.Label;
        _choiceRecordStoreLabel: objects.Label;
        _choiceAxeThrowingLabel: objects.Label;

        _choiceRecordStoreButton: objects.Button;
        _choiceAxeThrowingButton: objects.Button;
        _choiceContinueButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            // level label
            this._introLabel = new objects.Label("You arrive back at the eatery\n\n\nThe staff havent seen a wallet lying around\n\n\nThey did see a cat go run to the alley way beside the store...", "1.5em Consolas", "#000000", 220, 80);
            this.addChild(this._introLabel); // add label to the stage

            if (charisma == 2) {
                this._levelLabel = new objects.Label("Charisma: " + charisma + "\n\n\nYou run through the alley way with the kids in toe.\n\n\nTheres a cross roads\n\n\nWhere do you go?", "1.5em Consolas", "#000000", 220, 220);
                this.addChild(this._levelLabel); // add label to the stage            

                // choice 1 label
                this._choiceRecordStoreLabel = new objects.Label("right", "1.5em Consolas", "#000000", 210, 330);
                this.addChild(this._choiceRecordStoreLabel);
                // choice 1 button
                this._choiceRecordStoreButton = new objects.Button("NextButton", 220, 390);
                this._choiceRecordStoreButton.on("click", this._clickChoiceObscureButton, this); // event listener
                this.addChild(this._choiceRecordStoreButton);

                // choice 2 label
                this._choiceAxeThrowingLabel = new objects.Label("left", "1.5em Consolas", "#000000", 410, 330);
                this.addChild(this._choiceAxeThrowingLabel);
                // choice 2 button
                this._choiceAxeThrowingButton = new objects.Button("NextButton", 420, 390);
                this._choiceAxeThrowingButton.on("click", this._clickChoiceEmotionalButton, this); // event listener
                this.addChild(this._choiceAxeThrowingButton);

            }
            if (charisma < 2) {
                this._levelLabel = new objects.Label("Charisma: " + charisma + "\n\n\nYou hesitate to walk into the alley way with the kids\n\n\nYour hoping they doesn't see your nervous façade.", "1.5em Consolas", "#000000", 220, 220);
                this.addChild(this._levelLabel); // add label to the stage

                this._choiceContinueButton = new objects.Button("NextButton", 320, 360);
                this._choiceContinueButton.on("click", this._clickChoiceContinueButton, this); // event listener
                this.addChild(this._choiceContinueButton);
            }

            stage.addChild(this);
        }


        public update(): void {
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        private _clickChoiceObscureButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("select");
            changeState(config.SCENE_6);
        }

        // Callback function / Event Handler for Choice 2 Button Click
        private _clickChoiceEmotionalButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END3);
        }

        // Callback function / Event Handler for Next Button Click
        private _clickChoiceContinueButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("badEnd");
            changeState(config.SCENE_END2);
        }
    }
}     