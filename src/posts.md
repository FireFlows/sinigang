---
title: "Posts"
layout: "main.html"
---

I like to write. A lot. Here's a very small fraction of the things I have written. Listed in reverse chronological order. 

Please note that most of these are living documents (along with my website itself). I try to preserve the posts in "personal" though. The date besides each post is the "last updated" date.


<h2 id="pinned">Website</h2>

<ul>
{%- for pinned in collections.pinned | reverse -%}
  <li><a href="{{ pinned.url }}"> {{ pinned.data.title }}</a> <span style="font-size:.7rem;">({{ pinned.date.toDateString() }})</span></li>
{%- endfor -%}
</ul>

<h2 id="personal">Personal</h2>
My thoughts and such
<ul>
{%- for personal in collections.personal | reverse -%}
  <li><a href="{{ personal.url }}"> {{ personal.data.title }}</a> <span style="font-size:.7rem;">({{ personal.date.toDateString() }})</span></li>
{%- endfor -%}
</ul>


<h2 id="personal">Translation</h2>
Songs I have translated and analyzed maybe a bit too thoroughly
<ul>
{%- for translation in collections.translation | reverse -%}
  <li><a href="{{ translation.url }}"> {{ translation.data.title }}</a> <span style="font-size:.7rem;">({{ translation.date.toDateString() }})</span></li>
{%- endfor -%}
</ul>

