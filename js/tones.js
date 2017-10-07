var tonesDir = "tones/", tonesExt = ".wav";
var currTones;
var lowTones = ["4C", "4B", "4A", "3G", "3F", "3E", "3D", "3C", "3B", "3A",
	"2G", "2F", "2E", "2D", "2C", "2B"];
var midTones = ["5C", "5B", "5A", "4G", "4F", "4E", "4D", "4C", "4B", "4A",
	"3G", "3F", "3E", "3D", "3C", "3B"];
var highTones = ["6C", "6B", "6A", "5G", "5F", "5E", "5D", "5C", "5B", "5A",
	"4G", "4F", "4E", "4D", "4C", "4B"];

// Load middle octave tones for immediate playback on page load
function initTones(numSwitches) {
	for (var i = 0; i < numSwitches; i++) {
		midTones[i] = new Audio(tonesDir + midTones[i] + tonesExt);
	}
	currTones = midTones;
}

// Load remaining octave tones for quick access later
function loadAllTones(numSwitches) {
	for (var i = 0; i < numSwitches; i++) {
		lowTones[i] = new Audio(tonesDir + lowTones[i] + tonesExt);
		highTones[i] = new Audio(tonesDir + highTones[i] + tonesExt);
	}
};

// Make drag and drop permissible
function allowDrop(event) {
	event.preventDefault();
};

// Save image to be dropped
function drag(event) {
	event.dataTransfer.setData("Image", event.target.id);
};

// Move image to selected element to allow for octave change
function drop(event) {
 	event.preventDefault();
 	var treble = event.dataTransfer.getData("Image");
 	event.target.appendChild($("#" + treble)[0]);
 	// Change tones to selected octave
 	if (event.target.id == "highOct") {
 		currTones = highTones;
		console.log("higher octave");
 	} else if (event.target.id == "midOct") {
 		currTones = midTones;
		console.log("middle octave");
 	} else {
 		currTones = lowTones;
		console.log("low octave");
 	}
};
