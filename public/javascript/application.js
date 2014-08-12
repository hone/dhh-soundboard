var setup_audio = function(btn_id, audio_id) {
  $(btn_id).on("click", function(event) {
    event.preventDefault();
    var audio = $(audio_id)[0];
    audio.currentTime = 0;
    audio.play();
  });
};

setup_audio("#whoops-btn", "#whoops-audio");
setup_audio("#it-worked-btn", "#it-worked-audio");
setup_audio("#not-doing-btn", "#not-doing-audio");
setup_audio("#not-a-lot-of-work-btn", "#not-a-lot-of-work-audio");
