module states {
    // END 9 CLASS --- THE GOOD ENDING
    export class End9 extends objects.Scene {
        // PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;
        _youWinLabel: objects.Label;

        // CONSTRUCTOR
        constructor() {
            super();
        }

        // PUBLIC METHODS
        public start(): void {

            // level label
            this._levelLabel = new objects.Label("The door is heavy as you push it open\n\n\nBefore your eyes are billions of 100 dollar bills before you\n\nrabbit disappear\n\n\nYou call the parents and they are happy but are more than willing for you to accept the cash, as it was your hard efforts that allowed it.\n\n\nYou are now a wealthy, but promise to use for mostly good deeds", "1.5em Consolas", "#000000", 220, 120);
            this.addChild(this._levelLabel); // add label to the stage

            // game over label
            this._youWinLabel = new objects.Label("You Win!", "60px Consolas", "#000000", 320, 340);
            this.addChild(this._youWinLabel); // add label to the stage

            stage.addChild(this);
        }

        public update(): void {
            this._youWinLabel.rotation += 5;
        }
    }
}           