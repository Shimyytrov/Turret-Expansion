print("Mod loaded!")
require("alib");
const lib = require("alib");

// listen for the event where a unit is destroyed
Events.on(UnitDestroyEvent, event => {
    // display toast on top of screen when the unit was a player
    if(event.unit.isPlayer()){
        Vars.ui.hudfrag.showToast("Wasted.");
    }
  })
  Events.on(SectorCaptureEvent, event => {
    const Victory = lib.loadSound("Victory");
    Victory.at(1, 1);
})
Events.on(WaveEvent, event => {
    const Victory = lib.loadSound("Victory");
    Victory.at(1, 1);
})