/// <reference path="../config/config.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../states/over.ts" />
/// <reference path="../states/menu.ts" />
/// <reference path="../states/scene9.ts" />
/// <reference path="../states/scene8.ts" />
/// <reference path="../states/scene7.ts" />
/// <reference path="../states/scene6.ts" />
/// <reference path="../states/scene5.ts" />
/// <reference path="../states/scene4.ts" />
/// <reference path="../states/scene3.ts" />
/// <reference path="../states/scene2.ts" />
/// <reference path="../states/scene1.ts" />
/// <reference path="../states/scene0.ts" />
/// <reference path="../states/end9.ts" />
/// <reference path="../states/end8.ts" />
/// <reference path="../states/end7.ts" />
/// <reference path="../states/end6.ts" />
/// <reference path="../states/end5.ts" />
/// <reference path="../states/end4.ts" />
/// <reference path="../states/end3.ts" />
/// <reference path="../states/end2.ts" />
/// <reference path="../states/end1.ts" />
// GLOBAL GAME FRAMEWORK VARIABLES
var assets;
var canvas;
var stage;
var stats;
var state;
var currentState; // alias for our current state
// GAME OBJECTS
var menu;
var over;
var charisma;
var transit;
// ADD SCENES HERE *************************************************
var scene0;
var scene1;
var scene2;
var scene3;
var scene4;
var scene5;
var scene6;
var scene7;
var scene8;
var scene9;
var sceneEnd1;
var sceneEnd2;
var sceneEnd3;
var sceneEnd4;
var sceneEnd5;
var sceneEnd6;
var sceneEnd7;
var sceneEnd8;
var sceneEnd9;
// manifest of all our assets
var manifest = [
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "NextButton", src: "../../Assets/images/NextButton.png" },
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "yay", src: "../../Assets/audio/yay.ogg" },
    { id: "select", src: "../Assets/audio/select.wav" },
    { id: "badEnd", src: "../Assets/audio/badEnd.wav" },
    { id: "intro", src: "../Assets/audio/intro.wav" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
}
function init() {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting
    state = config.MENU_STATE; // sets first scene
    changeState(state);
}
// Main Game Loop
function gameLoop(event) {
    stats.begin(); // start counting
    currentState.update(); // calling State's update method
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // stop counting
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// state machine prep
function changeState(state) {
    // Launch various scenes
    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            stage.removeAllChildren();
            menu = new states.Menu();
            currentState = menu;
            createjs.Sound.play("intro");
            break;
        case config.OVER_STATE:
            // show the default game over scene
            stage.removeAllChildren();
            over = new states.Over();
            currentState = over;
            break;
        case config.SCENE_0:
            stage.removeAllChildren();
            scene0 = new states.Scene0();
            currentState = scene0;
            break;
        case config.SCENE_1:
            stage.removeAllChildren();
            scene1 = new states.Scene1();
            currentState = scene1;
            break;
        case config.SCENE_2:
            stage.removeAllChildren();
            scene2 = new states.Scene2();
            currentState = scene2;
            break;
        case config.SCENE_3:
            stage.removeAllChildren();
            scene3 = new states.Scene3();
            currentState = scene3;
            break;
        case config.SCENE_4:
            stage.removeAllChildren();
            scene4 = new states.Scene4();
            currentState = scene4;
            break;
        case config.SCENE_5:
            stage.removeAllChildren();
            scene5 = new states.Scene5();
            currentState = scene5;
            break;
        case config.SCENE_6:
            stage.removeAllChildren();
            scene6 = new states.Scene6();
            currentState = scene6;
            break;
        case config.SCENE_7:
            stage.removeAllChildren();
            scene7 = new states.Scene7();
            currentState = scene7;
            break;
        case config.SCENE_8:
            stage.removeAllChildren();
            scene8 = new states.Scene8();
            currentState = scene8;
            break;
        case config.SCENE_9:
            stage.removeAllChildren();
            scene9 = new states.Scene9();
            currentState = scene9;
            break;
        case config.SCENE_END1:
            stage.removeAllChildren();
            sceneEnd1 = new states.End1();
            currentState = sceneEnd1;
            break;
        case config.SCENE_END2:
            stage.removeAllChildren();
            sceneEnd2 = new states.End2();
            currentState = sceneEnd2;
            break;
        case config.SCENE_END3:
            stage.removeAllChildren();
            sceneEnd3 = new states.End3();
            currentState = sceneEnd3;
            break;
        case config.SCENE_END4:
            stage.removeAllChildren();
            sceneEnd4 = new states.End4();
            currentState = sceneEnd4;
            break;
        case config.SCENE_END5:
            stage.removeAllChildren();
            sceneEnd5 = new states.End5();
            currentState = sceneEnd5;
            break;
        case config.SCENE_END6:
            stage.removeAllChildren();
            sceneEnd6 = new states.End6();
            currentState = sceneEnd6;
            break;
        case config.SCENE_END7:
            stage.removeAllChildren();
            sceneEnd7 = new states.End7();
            currentState = sceneEnd7;
            break;
        case config.SCENE_END8:
            stage.removeAllChildren();
            sceneEnd8 = new states.End8();
            currentState = sceneEnd8;
            break;
        case config.SCENE_END9:
            stage.removeAllChildren();
            sceneEnd9 = new states.End9();
            currentState = sceneEnd9;
            break;
    }
    currentState.start();
    console.log(currentState.numChildren);
}
//# sourceMappingURL=game.js.map