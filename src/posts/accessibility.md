---
title: "Accessibility"
layout: "post.html"
date: 2026-08-02
tags: 
    - pinned
---
I like to browse personal websites on Neocities. But sometimes, when I click on a website, I'm shown a warning like:

_This website is not mobile-friendly and never will be._  
_This website has autoplay._  
_This website has flashing colors._  
etc.

And, I mean, it's great that they put the warning before sending me into anaphylactic shock (I'm allergic to non-accessible websites) but **there is (almost) no reason why a (personal) website shouldn't be accessible**. It is not hard to add a couple lines of code to your CSS to make your website mobile-compatible; autoplay is literally disabled by default (I wonder why); and you don't need to give people a seizure when they click on your website.

Putting a warning on your website instead of fixing it is just kind of lazy to me. Some people have intensely elaborate websites, and yet, can't figure out how to add like two lines of code in their HTML head? 

There are some websites that would never work on mobile, even if you tried your damned hardest. But if your website is just a bunch of information about yourself, I'm more than certain there's a way to make the info mobile-friendly.

BTW, accessibility isn't just about mobile-friendliness. (ChatGPT ruined that construction forever but it's really good.) It's also about choosing good color contrast, good fonts, font size, alternate text for images, and more!

Making your website accessible to as many people as possible should be one of the top priorities in a personal website. It is one of my top priorities, in a world where [most websites are not accessible to disabled users](https://webaim.org/projects/million/).

## How my website is accessible

* All images have alt text
* Colors tested for contrast 
* Language text set to "en" on all pages
* Legible text at 200% zoom (and beyond)
* Minimal distractions
    * no flashing images
    * no popups
    * no autoplaying audio, videos, GIFs, etc.
* Navigable using the tab and arrow keys
* Semantic HTML whenever possible
* Works on any resolution and mobile

I plan to add more accessibility features in the future.

<!-- 
to add
* skip to main content link
* figure out how to get external links the aria-hidden thingy
* hide features that do not work with javascript
    * current time
    * page/site last updated script
    * status.cafe widget
-->

## Okay. How do I improve accessibility for my own website?
I've included a few links below that you can check out, since they're way more helpful than I ever could be.

I would start by putting your website into the WAVE Web Accessibility Evaluation Tool, and checking the contrast of your colors with the appropriately-named Color Contrast Checker. 

<h2 id="links">Links</h2>

* [Accessible Webmastery](https://accessible-webmastery.neocities.org/)
* [beepbird's articles on accessibility](https://www.beepbird.net/articles/index.html)
* [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
* [Responsiveness resources](https://kalechips.net/responsive/resources)
* [w3school's article on responsive web design](https://www.w3schools.com/css/css_rwd_intro.asp)
* [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
