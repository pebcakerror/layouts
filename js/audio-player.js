var AudioPlayer = function(options) {
  var playPauseButton = document.querySelector("[data-action='play-pause']");
  var icon = playPauseButton.querySelector(".audio-player__icon")

  playPauseButton.classList.toggle('is-loading');

  var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#74417C',
    progressColor: '#B094C4',
    cursorColor: '#E5E6E5',
    barWidth: 4,
    height: 58,
  });
  wavesurfer.on('ready', function() {
    playPauseButton.classList.toggle('is-loading');
  });

  wavesurfer.load('/media/healthcare-confusion-audio-trailer.mp3');

  playPauseButton.addEventListener('click', function(){
    wavesurfer.playPause();
    icon.classList.toggle('audio-player__icon--play');
    icon.classList.toggle('audio-player__icon--pause');
  });
}




$(document).ready(function() {

  var audioPlayer = new AudioPlayer({});
});
