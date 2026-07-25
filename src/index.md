---
title: "Home"
layout: "home.html"
---
## Introduction

Welcome to my humble abode... I've worked really hard on it, but it's still a work in progress, so please stay tuned for future updates. 

This website is SFW but ran by an adult (me). I say swear words.

## Now

Continuing work on my UTAU and website. I have a bunch of [extra phonemes](https://vocadb.net/T/9346/additional-voice-material) recorded (50 extra oto lines, for a total of around 1k lines), but I'll probably have to re-record that and some other stuff. 

I added a "page last updated" and "website last updated" thing to the footer. So it'll tell you when each page was last updated and when the site in general was updated. Isn't that exciting?

Art Fight is almost over, which makes me pretty sad. Because I lost my Apple Pencil in the middle of the event, I didn't draw as many characters as I would like to. Well, I guess there's still time, but I've been severely locked in to my website and UTAU. 

**Playing**: Deltarune Ch.5, Pronoun Palace  
**Reading**: various articles

20260724

## status.cafe widget

<div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div>
<!----------------
## Vocaloid Song I Like

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