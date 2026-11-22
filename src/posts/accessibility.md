---
title: "Accessibility"
layout: "post.html"
date: 2026-11-15
tags: 
    - pinned
---
I like to browse personal websites on Neocities. But sometimes, when I click on a website, I'm shown a warning like:

_This website is not mobile-friendly and never will be._  
_This website has autoplay._  
_This website has flashing colors._  
etc.

I am glad the warning is there, but I think more websites should strive to be accessibility-friendly even if it is annoying or ruins your aesthetic; seeing these warnings makes me honestly a bit sad. 

Making your website accessible to as many people as possible should be one of the top priorities in a personal website. It is one of my top priorities, in a world where [most websites are not accessible to disabled users](https://webaim.org/projects/million/).

## How my website is accessible

* *Most* images have alt text 
    * currently the images on [Extensive DebitBit analysis](debitbit.html) do *not* have alt text but I am working on it
* Colors tested for contrast 
    * the WebAim contrast checker is a little incorrect on my site; the font size is *slightly* bigger than normal (1.15rem as opposed to 1rem), so some colors that are actually fine show up as an error.
        * just wanted to put this here if anyone tries to jebait me like "oh but *here* it says that your colors don't have good contrast, ooh you're not following your own rules. 
        * I am. OK?
    * my eyesight is also just not very good so the colors are also tested against my eyeballs
* Language text set to "en" on all pages
* Legible text at 200% zoom (and beyond)
* Minimal distractions
    * no flashing images
    * no popups
    * no autoplaying audio, videos, GIFs, etc.
* Navigable using the tab and arrow keys
* Semantic HTML whenever possible
* Works on any resolution and mobile
* Works with Javascript disabled

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

<h2 id="links">Links</h2>

* [Accessible Webmastery](https://accessible-webmastery.neocities.org/)
* [beepbird's articles on accessibility](https://www.beepbird.net/articles/index.html)
* [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
* [Responsiveness resources](https://kalechips.net/responsive/resources)
* [w3school's article on responsive web design](https://www.w3schools.com/css/css_rwd_intro.asp)
* [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
