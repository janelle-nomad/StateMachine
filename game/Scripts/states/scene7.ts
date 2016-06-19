module states {
    // SCENE 7 CLASS
    export class Scene7 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;
        _choiceDarkAlleyLabel: objects.Label;
        _choiceHappyStreetLabel: objects.Label;

        _choiceDarkAlleyButton: objects.Button;
        _choiceHappyStreetButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // level label
            this._levelLabel = new objects.Label("You cancel your cards and lie down on the sofa\n\n\nThe cat emerges infront of you\n\n\nYell at the cat\n\n\n\n\n\nOr chase it out of the house?\n\n\n\n\n\nOr the brightly lit family friendly\n\n\nthoroughfare.", "1.5em Consolas", "#000000", 220, 130);
            this.addChild(this._levelLabel); // add label to the stage

            // choice 1 label
            this._choiceDarkAlleyLabel = new objects.Label("Yell", "1.5em Consolas", "#000000", 200, 300);
            this.addChild(this._choiceDarkAlleyLabel);
            // choice 1 button
            this._choiceDarkAlleyButton = new objects.Button("NextButton", 220, 360);
            this._choiceDarkAlleyButton.on("click", this._clickChoiceDarkAlleyButton, this); // event listener
            this.addChild(this._choiceDarkAlleyButton);

            // choice 2 label
            this._choiceHappyStreetLabel = new objects.Label("Chase", "1.5em Consolas", "#000000", 410, 300);
            this.addChild(this._choiceHappyStreetLabel);
            // choice 2 button
            this._choiceHappyStreetButton = new objects.Button("NextButton", 420, 360);
            this._choiceHappyStreetButton.on("click", this._clickChoiceHappyStreetButton, this); // event listener
            this.addChild(this._choiceHappyStreetButton);

            stage.addChild(this);
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Choice 1 Button Click
        private _clickChoiceDarkAlleyButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("select");
            changeState(config.SCENE_8);
        }

        // Callback function / Event Handler for Choice 2 Button Click
        private _clickChoiceHappyStreetButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("select");
            changeState(config.SCENE_9);
        }
    }
}    