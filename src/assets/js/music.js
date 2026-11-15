
//your playlist here
var plist = "PLFCCsWwB4Mxk";

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    playerVars: {
      autoplay: 1,
      enablejsapi: 1,
      loop: 1,
      controls: 1,
      showinfo: 1,
      modestbranding: 1,
      listType: "playlist",
      list: plist
    },

    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.

function onPlayerReady(event) {
  shuff_list(); /*disable this line if you not want it to be shuffled onload*/
  player.stopVideo(); //autoplay off doesnt work with some browsers this allows you to embed multpile players on same page not starting all at once
}

function onPlayerStateChange(event) {
  const player = event.target;
}
// 5. very simple YT shuffle command.
function shuff_list() {
  player.setShuffle(true);
  // starts at first video in the new list sequence. index 0
  player.playVideoAt(0);
}
/* 
This is not my code; I'm not good at Javascript.
 I found it after a very long time searching 
for something that would work. Here is a link to the code 
and the Stack Overflow exchange I found it from:
// https://codepen.io/jcb01/pen/ZEKpYgV 
// https://stackoverflow.com/a/66088633
*/ 