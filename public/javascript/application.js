var dhhSprite = document.getElementById('dhh-sprite');

var dhhClips = {
  whoops: {
    start: 10.45,
    length: 0.731
  },
  worked: {
    start: 8.62,
    length: 1.67
  },
  not_doing: {
    start: 2.8,
    length: 1.7
  },
  not_alot: {
    start: 4.78,
    length: 3.5
  },
  ruby_everywhere: {
    start: 0.5,
    length: 1.8
  }
};

var currentDHH = {};
var everPlayed = false;

var updateTimeTracking = function() {
  if (this.currentTime >= currentDHH.start + currentDHH.length) {
    this.pause();
  }
};

dhhSprite.addEventListener('timeupdate', updateTimeTracking, false);

var setup_audio = function(btn_id, audio_id) {
  $(btn_id).on("click", function(event) {
    event.preventDefault();
    playAudio(audio_id);
  });
};

playAudio = function(track) {
  if (dhhClips[track] && dhhClips[track].length) {
    currentDHH = dhhClips[track];
    if (!everPlayed) {
      // This is shady mobile safari business here. We can't set the current time until it's been played. Lé sigh.
      dhhSprite.addEventListener("playing", function(){
        this.currentTime = currentDHH.start;
        everPlayed = true;
      });
      dhhSprite.play();
    } else {
      dhhSprite.currentTime = currentDHH.start;
      dhhSprite.play();
    }
  }
};

setup_audio("#whoops-btn", 'whoops');
setup_audio("#it-worked-btn", "worked");
setup_audio("#not-doing-btn", "not_doing");
setup_audio("#not-a-lot-of-work-btn", "not_alot");
setup_audio("#ruby-everywhere-btn", "ruby_everywhere");
