var config;
(function (config) {
    // State Constants
    config.MENU_STATE = 0;
    config.PLAY_STATE = 1;
    config.OVER_STATE = 2;
    // Gameplay Scenes
    config.SCENE_0 = 10; // Sneak Out
    config.SCENE_1 = 11; // Play Game        Snobbiness -1 Charisma +1 CHA
    config.SCENE_2 = 12; // Open the door?    display CHECK:( CHA < 0 = 2.0, CHA > 0 = 2.1)
    config.SCENE_3 = 13; //  Head out for food?  -1 CHA OR take out for pizza +1 CHA
    config.SCENE_4 = 14; // where to?         display CHECK:(CHA < 0 = 4.0, CHA > 0 = 4.1)
    config.SCENE_5 = 15; // Run through alley CHECK: CHA >= 2 ELSE GOTO END2
    config.SCENE_6 = 16;
    config.SCENE_7 = 17;
    config.SCENE_8 = 18;
    config.SCENE_9 = 19;
    // Ending Scenes
    config.SCENE_END1 = 91;
    config.SCENE_END2 = 92;
    config.SCENE_END3 = 93;
    config.SCENE_END4 = 94;
    config.SCENE_END5 = 95;
    config.SCENE_END6 = 96;
    config.SCENE_END7 = 97;
    config.SCENE_END8 = 98;
    config.SCENE_END9 = 99; // Win!
})(config || (config = {}));
//# sourceMappingURL=config.js.map