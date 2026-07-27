---
title: "Home"
layout: "main.html"
---

## Introduction

Welcome to my humble abode.

This website does not house and will never house NSFW content, but it is ran by an adult (me) so please exercise caution (especially in places where I end up talking too much).

<span class="showmobile">All times are in [Eastern](https://time.is/ET).</span>
## Now

I have been constantly working on website updates. I think it looks a lot better now, and I have a lot more on it, but still not that much.

The /posts.html page finally has some posts on it! (Ones I copied and pasted from bearblog, but still!) I'm not sure if I'll keep posting on bearblog or switch to my website completely. 

I have turned my accessibility statement and links into its own page. Currently, I'm writting an expanded version of my accessibility statement, but I wanted to get the posts page working first. Yaaay.

**Feeling**: happy!  
**Playing**: Deltarune Ch.5, Pronoun Palace    
**Reading**: various articles, people's personal blogs  
**Watching**: various YouTube videos  
**Listening**: See below!  

20260726

## status.cafe widget

<div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div>
<!----------------
## Vocaloid Song I Like
This ain't happening bruh it's over
<iframe id="yt-iframe"
    width="640" height="360"
    src="https://www.youtube.com/embed/PLFCCsWwB4Mxk?rel=0&enablejsapi=1&playlist=PLFCCsWwB4Mxk&enablejsapi=1"
    frameborder="0"
></iframe>

Randomly chooses a song from my [Vocaloid Music Playlist](https://www.youtube.com/playlist?list=PLFCCsWwB4Mxk). Not just Vocaloid, also includes SynthV, UTAU, etc. Not just original songs, there are also covers, remixes, and mashups. Exciting. There might be one or two human-sung songs in here because I thought the cover was the Vocaloid version.

 <script>
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
    </script>
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


## Comments
Questions? Thoughts? Anything you want to tell me? You can tell me here. [Manually moderated](https://frills.dev/blog/231023-add-moderation-to-comment-widget/).

<div id="c_widget"></div>
<script src="/assets/comment-widget.js"></script>
<script src="https://status.cafe/current-status.js?name=fire" defer></script>