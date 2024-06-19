
<script setup lang="ts">
import { computed } from 'vue';
import "../components/Wave.vue"
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
    </div>
    <Wave />
  </div>
</template>
