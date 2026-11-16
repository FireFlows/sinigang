---
title: "Posts"
layout: "main.html"
---
My posts! Listed in reverse chronological order. 

<h2 id="pinned">Pinned</h2>
Living documents. Note: the date besides each post is the date the post was last modified, not when it was created.
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

