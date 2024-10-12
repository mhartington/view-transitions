---
theme: default
title: Simplified Animations on the Web
class: text-center
highlighter: shiki
transition: view-transition
mdc: true
layout: default
---

<div class="blob" style="view-transition-name: focus; width: 200px; height: 200px; border-radius: 50%; background: #F141A8; "></div>

---

<div style=" opacity: 0; view-transition-name: focus; width: 100%; height: 100%; background: #F141A8; "></div>
    <img src="https://i.ytimg.com/vi/Gig__fCAIps/maxresdefault.jpg" alt="">

---
placeContent: 'center start'
---

<div style="view-transition-name: focus; width: 200px; height: 200px; border-radius: 50%; background: #F141A8; "></div>

---
placeContent: 'center end'
---

<div style="view-transition-name: focus; width: 200px; height: 200px; border-radius: 50%; background: #F141A8; "></div>

---

<div style="view-transition-name: focus; width: 200px; height: 200px; border-radius: 0; background: #F141A8; "></div>

---
layout: ocean
placeContent: "center left"
---

<h1>Simplified Animations <br/> on the Web</h1>
---


<div style="
    position:absolute;
        place-self:center;
    opacity: 0;
view-transition-name: focus; width: 200px; height: 200px; border-radius: 50%; background: #F141A8; "></div>
<h2 class="solo">?</h2>


---
layout: tron
---

## Animations on the Web

---

> What browser had animation support first?

<v-click>
 
 Wrong it's Internet Explorer

</v-click>


<v-click>
<img class="poster" style="rotate: 15deg;height: 80%; place-self: center;" src="https://www.webdesignmuseum.org/uploaded/old-software/web-browsers/internet-explorer/internet-explorer-5-5-01.png" alt="" />
</v-click>


<v-click>
<img class="poster" style="rotate: -15deg" src="https://www.webdesignmuseum.org/uploaded/web-design-history/internet-explorer-5-0.png" alt="" />
</v-click>


<v-click>
<img class="poster" style="margin: auto;background: white; height: 80%; place-self: center;" src="https://vectorseek.com/wp-content/uploads/2023/09/Microsoft-Internet-Explorer-5-Logo-Vector.svg-.png" alt="" />
</v-click>


<v-click>
<img class="poster" style="background: white; height: 80%; place-self: center;" src="https://media.tenor.com/ZNu5AVd29LEAAAAC/steve-ballmer-microsoft.gif" alt="" />
</v-click>

<v-click>
<img class="poster" style="height: 80%; place-self: center;" src="/imgs/charlie.webp" alt="" />
</v-click>


---

```html {all|2|3-6|4|5}
<meta 
    http-equiv="Page-Enter" 
    content="revealTrans(
        Duration=**,
        Transition=?
    )"
>
```

---

## 23 Build-in Animations!

| No. | Effect                                              |
|-----|-----------------------------------------------------|
| 0   | Rectangle towards center                            |
| 1   | Rectangle from center outwards                      |
| 2   | Circle towards center                               |
| 3   | Circle from center outwards                         |
| 4   | Horizontal wipe from bottom to top                  |
| 5   | Horizontal wipe from top to bottom                  |

---

## Circa 1999-2001
It's _SO_ old though, I couldn't find videos

---
layout: tron
---

## Keyframe Animations

---
layout: two-cols
---

## Keyframe Animations
- Roughly 2007-2009
- WebKit did it first!
- Code-it and run

::right::

<iframe style="width: 95%; height: 100%" scrolling="no" title="Simple Animation" src="https://codepen.io/mhartington/embed/ExzbBdK?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mhartington/pen/ExzbBdK">
  Simple Animation</a> by Mike Hartington (<a href="https://codepen.io/mhartington">@mhartington</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## Some downsides
- Lack of catches/control
- Lots of footguns

---
layout: gsap
---
# JavaScript Animations

---
layout: two-cols
---

## JS Timelines
- Bringing some Flash to JS
- GSAP is the most common
- Older browser support

::right::

<iframe style="width: 95%; height: 100%" scrolling="no" title="Flipping Flexbox" src="https://codepen.io/GreenSock/embed/zYqLjre?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/zYqLjre">
  Flipping Flexbox</a> by GSAP (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## Some down sides
- It's a lot of JS
- Not all libraries are created equal 
- Performance

---

> **A note on GSAP**

It's more than just animations

---
layout: webani
---

# Web Animations

---
layout: two-cols
---

## Web Animations
- Builds on CSS Animations
- Brings some concepts from GSAP
- Part of the platform

::right::

<iframe height="400" style="width: 100%;" scrolling="no" title="Simple Web Animation" src="https://codepen.io/mhartington/embed/mdYpyEG?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mhartington/pen/mdYpyEG">
  Simple Web Animation</a> by Mike Hartington (<a href="https://codepen.io/mhartington">@mhartington</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## Some down sides
- Web Animations can get gnarly
- If you animate the wrong thing, performance isues
- Coordination can be a pain

---

<h2>
    <em>There's got to be a better way</em>
</h2>

---
layout: grid
---

# View Transitions

---

### _What are they?_

---

>The View Transitions API provides a mechanism for easily creating animated transitions between different DOM states while also updating the DOM contents in a single step.

[MDM Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)


---

## Simpler

- Update the DOM
- Animate between Old and New DOM State

---
layout: two-cols
---

````md magic-move
```html
<ul>
  <li>
    <p>Item Title</p>
    <i>Item Icon</i>
  </li>
  <li>
    <p>Item Title</p>
    <i>Item Icon</i>
  </li>
  <li>
    <p>Item Title</p>
    <i>Item Icon</i>
  </li>
  <li>
    <p>Item Title</p>
    <i>Item Icon</i>
  </li>
</ul>
```
```html
<ul>
  <li>
    <p>Item Title</p>
    <i>Item Icon</i>
  </li>

  <li>
    <p>Item Title</p>
    <i>Item Icon</i>
  </li>

  <li>
    <p>Item Title</p>
    <i>Item Icon</i>
  </li>
</ul>
```
````

::right::

<li class="list-item-1"> Item Title ⭐️</li>
<li class="list-item-2"> Item Title ⭐️</li>
<li class="list-item-3" v-click.hide="1">Item Title ⭐️</li>
<li class="list-item-4"> Item Title ⭐️</li>


---

````md magic-move

```html
<script>
    document.startViewTransition(() => {
      // Start changing the DOM
    });
</script>
```


```html
<script>
    document.startViewTransition(() => {
      // Start changing the DOM
    });
</script>

<style>

    .box {
        view-transition-name: box;
    }

</style>
```

````

<p  v-click.hide="1" >
<a href="https://codepen.io/mhartington/pen/PogWPWg?editors=0110"> Basic Animation </a>
</p>

<p v-click.at="1">
<a  href="https://codepen.io/mhartington/pen/JjVEYNp?editors=0110">Making Moves </a>
</p>


---

## Cool, what about more <br/> advanced use cases?

---

### Animating Display None

```css
::view-transition-old(box-0):only-child {
  animation: scale-out 0.25s ease-out forwards;
}

::view-transition-new(box-0):only-child {
  opacity: 0;
  animation:
    fade-in 0.01s ease-in forwards,
    scale-out 0.4s ease-in reverse;
}
```

[Display None](https://codepen.io/argyleink/pen/VwBKjwj)

---
layout: image
image: /imgs/view-elms.png
backgroundSize: contain
---
---
layout: image
image: /imgs/old-new-snapshots.png
backgroundSize: contain
---

---

## Real Life Examples?


---

<video src="/videos/apple-music.mov" loop controls style="aspect-ratio: 23/16; width: 80%; align-self: center; margin: auto"></video>

---

<iframe style="width: 100%; height: 100%; position: absolute" scrolling="no" title="FLIP" src="https://codepen.io/mhartington/embed/QWRaYMp?default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>


---
layout: grid
---
# Working with Frameworks 

---

<svg width="460" height="160" viewBox="0 0 460 160" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.7846 121.175C61.2669 117.045 59.9481 108.368 61.8303 102.082C65.0939 106.045 69.6158 107.301 74.2997 108.009C81.5305 109.103 88.6318 108.694 95.349 105.389C96.1174 105.011 96.8275 104.507 97.6672 103.998C98.2974 105.826 98.4615 107.672 98.2413 109.551C97.706 114.127 95.4288 117.662 91.8069 120.341C90.3586 121.413 88.8261 122.371 87.3303 123.382C82.7349 126.487 81.4917 130.129 83.2184 135.427C83.2594 135.556 83.2961 135.685 83.389 136C81.0427 134.95 79.3289 133.421 78.023 131.411C76.6438 129.289 75.9876 126.942 75.9531 124.403C75.9358 123.167 75.9358 121.92 75.7696 120.702C75.3638 117.732 73.9694 116.402 71.3426 116.325C68.6467 116.247 66.5141 117.913 65.9486 120.538C65.9054 120.739 65.8428 120.938 65.7803 121.172L65.7846 121.175Z" fill="white"/>
<path d="M65.7846 121.175C61.2669 117.045 59.9481 108.368 61.8303 102.082C65.0939 106.045 69.6158 107.301 74.2997 108.009C81.5305 109.103 88.6318 108.694 95.349 105.389C96.1174 105.011 96.8275 104.507 97.6672 103.998C98.2974 105.826 98.4615 107.672 98.2413 109.551C97.706 114.127 95.4288 117.662 91.8069 120.341C90.3586 121.413 88.8261 122.371 87.3303 123.382C82.7349 126.487 81.4917 130.129 83.2184 135.427C83.2594 135.556 83.2961 135.685 83.389 136C81.0427 134.95 79.3289 133.421 78.023 131.411C76.6438 129.289 75.9876 126.942 75.9531 124.403C75.9358 123.167 75.9358 121.92 75.7696 120.702C75.3638 117.732 73.9694 116.402 71.3426 116.325C68.6467 116.247 66.5141 117.913 65.9486 120.538C65.9054 120.739 65.8428 120.938 65.7803 121.172L65.7846 121.175Z" fill="url(#paint0_linear_1_33)"/>
<path d="M40 101.034C40 101.034 53.3775 94.5177 66.7924 94.5177L76.9068 63.2155C77.2855 61.7017 78.3911 60.6729 79.6393 60.6729C80.8875 60.6729 81.9932 61.7017 82.3719 63.2155L92.4862 94.5177C108.374 94.5177 119.279 101.034 119.279 101.034C119.279 101.034 96.5558 39.133 96.5114 39.0088C95.8592 37.1787 94.7583 36 93.274 36H66.007C64.5227 36 63.4662 37.1787 62.7696 39.0088C62.7205 39.1307 40 101.034 40 101.034Z" fill="white"/>
<path d="M181.043 81.1227C181.043 86.6079 174.22 89.8838 164.773 89.8838C158.624 89.8838 156.45 88.3601 156.45 85.1604C156.45 81.8083 159.149 80.2085 165.297 80.2085C170.846 80.2085 175.569 80.2846 181.043 80.9703V81.1227ZM181.118 74.3423C177.744 73.5805 172.645 73.1234 166.572 73.1234C148.877 73.1234 140.555 77.3135 140.555 87.065C140.555 97.1975 146.253 101.083 159.449 101.083C170.621 101.083 178.193 98.2641 180.968 91.3313H181.417C181.342 93.0074 181.268 94.6834 181.268 95.9785C181.268 99.5592 181.867 99.8639 184.791 99.8639H198.587C197.837 97.7308 197.388 91.7122 197.388 86.5317C197.388 80.9703 197.612 76.7802 197.612 71.1426C197.612 59.6388 190.715 52.3251 169.121 52.3251C159.824 52.3251 149.477 53.925 141.605 56.2867C142.354 59.4102 143.404 65.7335 143.929 69.8474C150.752 66.6477 160.424 65.2764 167.922 65.2764C178.268 65.2764 181.118 67.6381 181.118 72.4377V74.3423Z" fill="white"/>
<path d="M218.971 84.3224C217.097 84.5509 214.547 84.5509 211.923 84.5509C209.149 84.5509 206.6 84.4748 204.875 84.2462C204.875 84.8557 204.8 85.5413 204.8 86.1508C204.8 95.6738 211.024 101.235 232.917 101.235C253.535 101.235 260.208 95.75 260.208 86.0746C260.208 76.9325 255.785 72.4377 236.216 71.4473C220.995 70.7616 219.646 69.0856 219.646 67.181C219.646 64.9717 221.595 63.8289 231.792 63.8289C242.364 63.8289 245.213 65.2764 245.213 68.3238V69.0094C246.713 68.9332 249.412 68.8571 252.186 68.8571C254.81 68.8571 257.659 68.9332 259.309 69.0856C259.309 68.3999 259.384 67.7905 259.384 67.2572C259.384 56.0581 250.086 52.4013 232.092 52.4013C211.848 52.4013 205.025 57.3533 205.025 67.0286C205.025 75.7136 210.499 81.1227 229.918 81.9607C244.238 82.4178 245.813 84.0177 245.813 86.227C245.813 88.5887 243.489 89.6553 233.442 89.6553C221.895 89.6553 218.971 88.0554 218.971 84.7795V84.3224Z" fill="white"/>
<path d="M284.955 44.1734C279.482 49.2778 269.66 54.3821 264.187 55.7534C264.262 58.5722 264.262 63.7527 264.262 66.5715L269.285 66.6477C269.21 72.0568 269.135 78.6086 269.135 82.9511C269.135 93.0835 274.458 100.702 291.028 100.702C298.001 100.702 302.65 99.9401 308.423 98.7212C307.823 94.9881 307.148 89.2743 306.923 84.9319C303.475 86.0746 299.126 86.6841 294.327 86.6841C287.654 86.6841 284.955 84.8557 284.955 79.599C284.955 75.028 284.955 70.7616 285.03 66.8001C293.578 66.8763 302.125 67.0286 307.148 67.181C307.073 63.2194 307.223 57.5056 307.448 53.6964C300.176 53.8488 292.003 53.925 285.255 53.925C285.33 50.5729 285.405 47.3732 285.48 44.1734H284.955Z" fill="white"/>
<path d="M329.736 64.286C329.811 60.3244 329.886 56.9724 329.961 53.6964H314.89C315.115 60.2483 315.115 66.9525 315.115 76.7802C315.115 86.6079 315.04 93.3883 314.89 99.8639H332.135C331.835 95.2929 331.76 87.5983 331.76 81.0465C331.76 70.6855 335.959 67.7143 345.481 67.7143C349.905 67.7143 353.054 68.2476 355.828 69.238C355.903 65.3526 356.653 57.8104 357.102 54.4583C354.253 53.6203 351.104 53.087 347.28 53.087C339.108 53.0108 333.11 56.3629 330.336 64.3622L329.736 64.286Z" fill="white"/>
<path d="M404.808 76.4754C404.808 84.7795 398.81 88.6649 389.363 88.6649C379.991 88.6649 373.993 85.008 373.993 76.4754C373.993 67.9428 380.066 64.7431 389.363 64.7431C398.735 64.7431 404.808 68.1714 404.808 76.4754ZM420.478 76.0945C420.478 59.5626 407.582 52.1728 389.363 52.1728C371.069 52.1728 358.623 59.5626 358.623 76.0945C358.623 92.5503 370.244 101.388 389.288 101.388C408.482 101.388 420.478 92.5503 420.478 76.0945Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1_33" x1="61.0003" y1="136" x2="104.622" y2="115.39" gradientUnits="userSpaceOnUse">
<stop stop-color="#D83333"/>
<stop offset="1" stop-color="#F041FF"/>
</linearGradient>
</defs>
</svg>


---
layout: image
image: /imgs/astro-docs.png
backgroundSize: contain
---

---


<video src="/videos/astro-demo-2.mov" loop controls style="aspect-ratio: 23/16; width: 80%; align-self: center; margin: auto"></video>

[github.com/Charca/view-transitions-live](https://github.com/Charca/view-transitions-live)

---

<img src="/imgs/angular_wordmark_gradient.png" width="500" alt="">

---

# Demo Time!

<img src="/imgs/ng-morph.png" width="150" style="place-self: center" alt="" />

[github.com/mhartington/ng-morph](https://github.com/mhartington/ng-morph)

---

# Another one

<img src="/imgs/ng-spotify.png" width="150" style="place-self: center" alt="" />


[github.com/mhartington/ng-spotify](https://github.com/mhartington/ng-spotify)
---

## Wrapping up

---

## View Transitions are Awesome

<v-click>Part of a whole suite of animations improvments</v-click>

---

### Scroll Progress Timelines

### View Progress Timelines

### Transition Behavior

---

> Animation on the Web have never been easier

---


<div class="blob" style="view-transition-name: focus; width: 200px; height: 200px; border-radius: 50%; background: #F141A8; position: absolute; place-self:center"></div>

<h1 class="solo" style="text-align: center; width: center">fin</h1>

<div style="position: absolute; place-self: end;">
    <p>Slides</p>
    <img width="100"  src="/imgs/slides.png" alt="">
</div>
