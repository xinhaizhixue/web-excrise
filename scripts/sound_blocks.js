Blockly.defineBlocksWithJsonArray([
    {
        "type": "play_sound",
        "message0": "Play %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "VALUE",
                "options": [
                    ["C4", "sounds/c4.m4a"],
                    ["D4", "sounds/d4.m4a"],
                    ["E4", "sounds/e4.m4a"],
                    ["F4", "sounds/f4.m4a"],
                    ["G4", "sounds/g4.m4a"],
                    ["A5", "sounds/A5.mp3"],
                    ["B5", "sounds/B5.mp3"],
                    ["C5", "sounds/c5.m4a"]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 355
    }
]);

Blockly.JavaScript['play_sound'] = function (block) {
    let value = '\'' + block.getFieldValue("VALUE") + '\'';
    return 'MusicMaker.queueSound(' + value + ');\n';
}