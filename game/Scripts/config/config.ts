module config {

    // State Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var OVER_STATE: number = 2;

    // Gameplay Scenes
    export var SCENE_0: number = 10; // Sneak Out
    export var SCENE_1: number = 11; // Play Game        Snobbiness -1 Charisma +1 CHA
    export var SCENE_2: number = 12; // Open the door?    display CHECK:( CHA < 0 = 2.0, CHA > 0 = 2.1)
    export var SCENE_3: number = 13; //  Head out for food?  -1 CHA OR take out for pizza +1 CHA
    export var SCENE_4: number = 14; // where to?         display CHECK:(CHA < 0 = 4.0, CHA > 0 = 4.1)

    export var SCENE_5: number = 15; // Run through alley CHECK: CHA >= 2 ELSE GOTO END2
    export var SCENE_6: number = 16; 
    export var SCENE_7: number = 17; 
    export var SCENE_8: number = 18; 
    export var SCENE_9: number = 19; 

    // Ending Scenes
    export var SCENE_END1: number = 91;
    export var SCENE_END2: number = 92;
    export var SCENE_END3: number = 93;
    export var SCENE_END4: number = 94;
    export var SCENE_END5: number = 95;
    export var SCENE_END6: number = 96;
    export var SCENE_END7: number = 97;
    export var SCENE_END8: number = 98;
    export var SCENE_END9: number = 99; // Win!
}