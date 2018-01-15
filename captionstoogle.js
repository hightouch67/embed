var Button = videojs.getComponent('Button');
var CaptionsToogle = videojs.extend(Button, {
  constructor: function() {
    Button.apply(this, arguments);
  },

  createEl() {
    const el = videojs.dom.createEl('div', {
        className: 'vjs-captions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button',
        role: 'button',
        'aria-live': 'polite',
        innerHTML: '<div class="vjs-captions-button vjs-menu-button vjs-menu-button-popup vjs-button"><span class="vjs-icon-placeholder"></span></div>'
    });
    
    return el;
  },
  handleClick: function() {
    toggleCaptions();
  }
});

toggleCaptions = function() {
    var tracks = videojs("player").player().textTracks(),track,i;
    for (i = 0; i < tracks.length; i++) {
      track = tracks[i];
      if (track.kind === 'captions' &&
          track.language ) {
        if (track.mode !== 'showing') {
          track.mode = 'showing';
          //CaptionsToogle.addClass('vjs-selected');
        } else {
          track.mode = 'hidden';
          //CaptionsToogle.removeClass('vjs-selected');
        }
        return;
      }
    }
    videojs.log('No captions !');
    return;
  };

videojs.registerComponent('CaptionsToogle', CaptionsToogle);