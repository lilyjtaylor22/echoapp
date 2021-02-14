// testing their default stuff
  window.saveDataAcrossSessions = false;

  var videoElementCanvas = ({width: 400, height: 400});

  window.onload = async function() {

    if (!window.saveDataAcrossSessions) {
        var localstorageDataLabel = 'webgazerGlobalData';
        localforage.setItem(localstorageDataLabel, null);
        var localstorageSettingsLabel = 'webgazerGlobalSettings';
        localforage.setItem(localstorageSettingsLabel, null);
    }
    const webgazerInstance = await webgazer.setRegression('ridge') /* currently must set regression and tracker */
      .setTracker('TFFacemesh')
      .begin();
    webgazerInstance.showVideoPreview(true) /* shows all video previews */
      .showPredictionPoints(true) /* shows a square every 100 milliseconds where current prediction is */
      .applyKalmanFilter(true); // Kalman Filter defaults to on.
  };

console.log("Hello world.");
// var prediction = webgazer.getCurrentPrediction();
// if (prediction) {
//     var x = prediction.x;
//     var y = prediction.y;
// }
// console.log(x,y);
var webgazerCanvas = null;
webgazerCanvas = webgazer.getVideoElementCanvas();
webgazer.getTracker().getEyePatches(webgazerCanvas, webgazerCanvas.width, webgazerCanvas.height);
var fmPositions = webgazer.getTracker().getPositions();

console.log(fmPositions);


// var prediction = webgazer.getCurrentPrediction();
// if (prediction) {
//     var x = prediction.x;
//     var y = prediction.y;
// }
// console.log(prediction);

// console.log(webgazer.getCurrentPrediction());