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

// get coordinates real time
// be careful, this is a real energy drain; turn on console print only if necessary
// to turn on live coords, flip console.log(xpred ...)
webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) {
      return;
  }

  var xprediction = data.x; //these x coordinates are relative to the viewport
  var yprediction = data.y; //these y coordinates are relative to the viewport
  // console.log(xprediction,yprediction); // this logs x/y coords instead of elapsed time
  // console.log(elapsedTime); //elapsed time is based on time since begin was called
});
