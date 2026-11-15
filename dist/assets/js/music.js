
/*
Attempting to solve the "Random Vocaloid Song" Issue
https://stackoverflow.com/questions/65210689/start-youtube-embed-playlist-at-a-specific-video-index/79301505#79301505
https://codepen.io/gbysea/pen/BYOaJp
https://stackoverflow.com/questions/49287620/youtube-api-shuffle-playlist
https://clownfred.zone/CZtelevision
https://stackoverflow.com/questions/41624880/making-a-youtube-video-player-that-plays-videos-randomly-from-a-list-server-side

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

https://www.youtube.com/watch?v=QTxvUA4l0Vs&list=PLFCCsWwB4Mxk&index=268
https://www.youtube.com/playlist?list=PLFCCsWwB4Mxk

https://youtube-playlist-randomizer.bitbucket.io/
