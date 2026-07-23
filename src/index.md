---
title: "Home"
layout: "home.html"
---
## Introduction

Welcome to my humble abode... I've worked really hard on it, but it's still a work in progress, so please stay tuned for future updates. 

This site is PG (at most PG-13; harsh language might be used or disturbing topics may be discussed), but some external links may lead to less sanitized or 18+ spaces. So don't go like clicking everywhere here in public I guess. Unless you get a kick from that sort of thing 

<h2>status.cafe widget</h2>

<div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div>

## Now

I've been working on my UTAU and website. The VCV is very close to being finished. My website is a forever work in progress, but you know. That's just kind of how it is.

I improved some of the colors for the website and renamed a few pages.

**Playing**: Deltarune Ch.5, Pronoun Palace

20260722

## Comments
Questions? Thoughts? Anything you want to tell me? You can tell me here. [Manually moderated](https://frills.dev/blog/231023-add-moderation-to-comment-widget/).

<div id="c_widget"></div>
<script src="/assets/comment-widget.js"></script>
<script src="https://status.cafe/current-status.js?name=fire" defer></script>

<!--
<h2>Vocaloid Song I Like</h2>
<div id="player"></div>

Randomly chooses a song from my [Vocaloid Music Playlist](https://www.youtube.com/playlist?list=PLFCCsWwB4Mxk). Not just Vocaloid, also includes SynthV, UTAU, etc. Not just original songs, there are also covers, remixes, and mashups. Exciting. There might be one or two human-sung songs in here because I thought the cover was the Vocaloid version.

 <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          playerVars: {
            listType:'playlist',
            list: 'PLFCCsWwB4Mxk'
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    </script>
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