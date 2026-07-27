---
title: "Posts"
layout: "main.html"
---
My posts! Listed in reverse chronological order. 

<h3 id ="random"> Uncategorized</h3>
I couldn't fit any of these into any category.
<ul>
{%- for random in collections.random | reverse -%}
  <li><a href="{{ random.url }}"> {{ random.data.title }}</a> <span style="font-size:.7rem;">({{ random.date.toDateString() }})</span></li>
{%- endfor -%}
</ul>

<h3 id ="weekly"> Week in Review</h3>
Every week on Sunday, I write a Week in Review: basically just recapping what I did that week and plans for next week.
<ul>
{%- for weekly in collections.weekly | reverse -%}
  <li><a href="{{ weekly.url }}"> {{ weekly.data.title }}</a> <span style="font-size:.7rem;">({{ weekly.date.toDateString() }})</span></li>
{%- endfor -%}
</ul>