﻿module states {
    // END 3 CLASS
    export class End3 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;
        _gameOverLabel: objects.Label;
        _restartButton: objects.Button;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // level label
            this._levelLabel = new objects.Label("You turn out to be quite terrible at\n\n\naxe-throwing, so terrible in fact that you\n\n\naccidentally chop off your thumb", "1.5em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage

            // game over label
            this._gameOverLabel = new objects.Label("Game Over", "60px Consolas", "#000000", 320, 240);
            this.addChild(this._gameOverLabel); // add label to the stage

            // restart button
            this._restartButton = new objects.Button("BackButton", 320, 340);
            this._restartButton.on("click", this._clickRestartButton, this); // event listener
            this.addChild(this._restartButton);

            stage.addChild(this);
        }

        public update(): void {
            this._gameOverLabel.rotation += 5;
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++
        // Callback function / Event Handler for Restart Button Click
        private _clickRestartButton(event: createjs.MouseEvent): void {
            changeState(config.MENU_STATE);
        }
    }
}     