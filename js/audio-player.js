var AudioPlayer = function(options) {
  var playPauseButton = document.querySelector("[data-action='play-pause']");

  var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#74417C',
    progressColor: '#B094C4',
    cursorColor: '#E5E6E5',
    barWidth: 4,
    height: 58,
    // maxCanvasWidth: 284,
    normalize: true,
  });
  wavesurfer.load('/media/healthcare-confusion-audio-trailer.mp3');

  playPauseButton.addEventListener('click', function(){
    wavesurfer.playPause();
  });
}
//
// BackgroundImageFromRadioButtonUpdater.prototype = {
//   update: function() {
//     this.imageTarget.css("background-image", "url(" + this.radioGroup.filter(":checked").val() + ")");
//   }
// }




$(document).ready(function() {

  var audioPlayer = new AudioPlayer({});
});
