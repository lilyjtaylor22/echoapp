// this is the same code used for test.js, just pared down for the demo 
// this code is mostly from the quickstart guide webgazer provides, here: https://webgazer.cs.brown.edu/

// testing
// alert("Machine is starting up. Please wait a few seconds.");

window.saveDataAcrossSessions = false;
var videoElementCanvas = ({width: 400, height: 400}); // dummy variables so won't throw errors

// initialize webgazer, and flip on prepackaged settings
window.onload = async function() {

	// handle data
	if (!window.saveDataAcrossSessions) {
	    var localstorageDataLabel = 'webgazerGlobalData';
	    localforage.setItem(localstorageDataLabel, null);
	    var localstorageSettingsLabel = 'webgazerGlobalSettings';
	    localforage.setItem(localstorageSettingsLabel, null);
	}

	// setup webgazer!
	const webgazerInstance = await webgazer.setRegression('ridge') // tensor flow based regression alg
	  .setTracker('TFFacemesh')
	  .begin();
	webgazerInstance.showVideoPreview(true) // show webcam preview
	  .showPredictionPoints(true) // 100 ms. update on prediction square
	  .applyKalmanFilter(true); // Kalman Filter defaults to on.

};

// get coordinates real time
// be careful, this is a real energy drain; turn on console print only if necessary
webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }

    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
    // console.log(xprediction,yprediction); // this logs x/y coords instead of elapsed time
    // console.log(elapsedTime); //elapsed time is based on time since begin was called
	});

// demo animations
const dialogueSVG = "dialogueSVG";
function appendDialogue() {
	var svg = d3.select("body").append("circle")
	    .attr("id", dialogueSVG)
	    .attr('cx', 100)
	  	.attr('cy', 100)
	  	.attr('r', 50)
	  	.attr('stroke', 'black')
	  	.attr('fill', '#69a3b2')
	    .style("top", "500px")
	    .style("left","500px")
	    .style("margin","0px")
	    .style("position","absolute");
}

setTimeout(() => { 
	alert("Voice command: Click now!");
}, 5000); // 5 seconds

