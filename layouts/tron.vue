<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  placeContent: {
    default: 'center',
  },
});

const style = computed(() => props);
</script>

<template>
  <div class="slidev-layout default">
    <div class="wrapper" :style="style">
      <div class="top-plane"></div>
      <slot />
      <div class="bottom-plane"></div>
    </div>
  </div>
</template>

<style>
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto;
  perspective: 360px;
  perspective-origin: 50% 50%;
  position: relative;
}

.top-plane,
.bottom-plane {
  width: 200%;
  height: 130%;
  position: absolute;
  bottom: -30%;
  left: -50%;
  background-image:
    -webkit-linear-gradient(#5fb2b2 2px, transparent 2px),
    -webkit-linear-gradient(left, #5fb2b2 2px, transparent 2px);
  background-size:
    100px 100px,
    100px 100px;
  background-position:
    -1px -1px,
    -1px -1px;
  transform: rotateX(85deg);
  animation: planeMoveTop 2s infinite linear;
  opacity: 0.5;
}

.bottom-plane {
  transform: rotateX(-85deg);
  top: -30%;
  animation: planeMoveBot 2s infinite linear;
}

@keyframes planeMoveTop {
  from {
    background-position:
      0px -100px,
      0px 0px;
  }
  to {
    background-position:
      0px 0px,
      100px 0px;
  }
}
@keyframes planeMoveBot {
  from {
    background-position:
      0px 0px,
      0px 0px;
  }
  to {
    background-position:
      0px -100px,
      100px 0px;
  }
}
</style>
