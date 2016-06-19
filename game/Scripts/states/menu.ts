module states {
    // MENU CLASS
    export class Menu extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _titleLabel: objects.Label;
        _title2Label: objects.Label;
        _startButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {
            // hello label
            this._titleLabel = new objects.Label("A Night", "60px Consolas", "#000000", 320, 150);
            this.addChild(this._titleLabel); // add label to the stage

            this._title2Label = new objects.Label("Of Boring Events", "60px Consolas", "#000000", 320, 200);
            this.addChild(this._title2Label); // add label to the stage

            // start button
            this._startButton = new objects.Button("StartButton", 320, 340);
            this._startButton.on("click", this._clickStartButton, this); // event listener
            this.addChild(this._startButton);

            stage.addChild(this);
        }


        public update(): void {
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Start Button Click
        private _clickStartButton(event: createjs.MouseEvent): void {
            createjs.Sound.play("select"); // activate static class play 
            changeState(config.SCENE_0);
        }

    }


}