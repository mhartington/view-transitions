<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue';
import { onSlideEnter, onSlideLeave } from '../composables/slides';

const load = async (src, id) => {
  return new Promise((resolve, reject) => {
    const cache = document.querySelector(`script#${id}`);
    if (cache) {
      return resolve();
    }

    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.onload = () => {
      return resolve();
    };

    script.onerror = () => {
      return reject();
    };

    document.body.appendChild(script);
  });
};
const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const runGSAPTest = (elements) => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  return elements.map((element) => {
    const x = (random(-2, 100) / 100) * width;
    const duration = random(500, 5000);

    gsap.set(element, { x: `${x}px`, y: `0`, opacity: 1 }, 0);
    return gsap.to(element, {
      x: `${x}px`,
      y: `-${height}px`,
      ease: 'linear',
      opacity: 0,
      repeat: -1,
      duration: duration / 1000,
    });
  });
};
const runTest = async (test, count = 10, src, id) => {
  if (src && id) {
    await load(src, id);
  }

  for (let i = 0; i < count; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    testArea.value.appendChild(bubble);
    bubbles.value.push(bubble);
  }

  // Give a little bit of time between rendering and starting animations to make it easier to benchmark
  setTimeout(() => {
    animations.values = test(bubbles.value);
  }, 100);
};
const stop = () => {
  animations.value.forEach((animation) => {
    if (animation.stop) {
      animation.stop();
    }
  });

  bubbles.value.forEach((el) => el.remove());
  if (typeof gsap !== 'undefined') {
    gsap.killTweensOf('.bubble');
  }

  animations.value = [];
  bubbles.value = [];
};

onSlideEnter(() => {
  runTest(
    runGSAPTest,
    100,
    'https://cdn.jsdelivr.net/npm/gsap@3.0.5/dist/gsap.min.js',
    'gsap',
  );
});
onSlideLeave(() => stop());

const testArea = ref();
const bubbles = ref([]);
const animations = ref([]);
</script>

<template>
  <div ref="testArea" class="test"></div>
</template>

<style>
.bubble {
  width: 30px;
  height: 30px;
  background: var(--slidev-theme-accents-lightblue);
  filter: blur(8px);
  border-radius: 30px;
}
</style>
