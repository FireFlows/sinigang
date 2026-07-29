/// <!----------------
/// ## Vocaloid Song I Like
/// This ain't happening bruh it's over

/// <iframe id="yt-iframe"
///    width="640" height="360"
///    src="https://www.youtube.com/embed/PLFCCsWwB4Mxk?rel=0&enablejsapi=1&playlist=PLFCCsWwB4Mxk&enablejsapi=1"
///    frameborder="0"
///></iframe>

///Randomly chooses a song from my [Vocaloid Music Playlist](https://www.youtube.com/playlist?list=PLFCCsWwB4Mxk). Not just Vocaloid, also includes SynthV, UTAU, etc. Not just original songs, there are also covers, remixes, and mashups. Exciting. There might be one or two human-sung songs in here because I thought the cover was the Vocaloid version.
/*
 ///<script>
  var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-iframe', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
    });
  }

  function onPlayerReady(event) {
    player.playVideoAt(2); // start at 2nd video
  }
  function onPlayerStateChange(event) {
  }
  ///  </script>
  */

/*
Attempting to solve the "Random Vocaloid Song" Issue
https://stackoverflow.com/questions/65210689/start-youtube-embed-playlist-at-a-specific-video-index/79301505#79301505
https://codepen.io/gbysea/pen/BYOaJp
https://stackoverflow.com/questions/49287620/youtube-api-shuffle-playlist
https://clownfred.zone/CZtelevision
// Playlist ID
    var listID = 'PLFCCsWwB4Mxk';
// Number of videos in playlist    
    var numberOfVideos = 200;
// Random number generator 
    var randomizer = Math.floor(Math.random() * numberOfVideos + 1);
// Embed video code
    document.writeln('<iframe id="random-video" src="https://www.youtube.com/embed/videoseries?list=' + listID + '&index=' + randomizer + '&autoplay=1&controls=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');

//Fullscreen stuff (optional)

    /*
"""""""
MIGHT HAVE TO TEST THIS ON src/utau.html
"""""""
Intended usage:
1. Generate a number from 1 - (# of videos in YouTube playlist)
  1.a Use YouTube API to grab the number of videos in a playlist
2. Replace index variable with generated number
3. Repeat 1 + 2 when you click a button.
https://nomnomnami.pika.page/posts/making-random-generators-in-javascript
https://github.com/borkosavic/random-youtube-playlist-video
<!-----------
AIzaSyAXl4sJEqKYFdaItR4MxCtl6xp27pJWtws
https://www.youtube.com/playlist?list=PLFCCsWwB4Mxk

use api to grab number of videos
https://developers.google.com/youtube/iframe_api_reference

GET https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLFCCsWwB4Mxk&key=AIzaSyAXl4sJEqKYFdaItR4MxCtl6xp27pJWtws HTTP/1.1

const songNumber = await fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLFCCsWwB4Mxk&key=AIzaSyAXl4sJEqKYFdaItR4MxCtl6xp27pJWtws", {
    method: "GET",
    });
player.playVideoAt(index:Number):Void
-->
*/
