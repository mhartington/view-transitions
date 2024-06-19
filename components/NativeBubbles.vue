<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue';
import { onSlideEnter, onSlideLeave } from '../composables/slides';

const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const runWebAnimations = (elements) => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  return elements.map((element) => {
    const x = (random(-2, 100) / 100) * width;
    const duration = random(500, 5000);
    const animation = element.animate(
      [
        { transform: `translate(${x}px, 0)`, opacity: 1 },
        { transform: `translate(${x}px, -${height}px)`, opacity: 0 },
      ],
      { duration: duration, iterations: Infinity },
    );
    return animation;
  });
};
const runTest = async (test, count = 10, src, id) => {
  for (let i = 0; i < count; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('native-bubble');

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
  animations.value = [];
  bubbles.value = [];
};

onSlideEnter(() => runTest(runWebAnimations, 100));
onSlideLeave(() => stop());

const testArea = ref();
const bubbles = ref([]);
const animations = ref([]);
</script>

<template>
  <div ref="testArea" class="test"></div>
</template>

<style>
.native-bubble {
  width: 30px;
  height: 30px;
  background: var(--slidev-theme-accents-blue);
  border-radius: 30px;
}
</style>
