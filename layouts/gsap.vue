<script setup lang="ts">
import { computed, onUnmounted } from 'vue';
import '../components/Bubbles.vue';
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
      <slot />
      <Bubbles />
    </div>
  </div>
</template>

<style>

.test {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
}
</style>
