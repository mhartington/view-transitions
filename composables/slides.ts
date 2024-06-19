import { getCurrentInstance, watch } from 'vue';
import { useNav } from '@slidev/client';

export function onSlideEnter(cb: () => void) {
  const instance = getCurrentInstance();
  const { currentSlideNo } = useNav();

  watch(currentSlideNo, (slideNo) => {
    if (slideNo === instance!.setupState.$page) { cb(); }
}, {immediate: true})
}

export function onSlideLeave(cb: () => void) {
  const instance = getCurrentInstance();
  const { currentSlideNo } = useNav();
  watch(() => currentSlideNo.value === instance.setupState.$page, (_, wasActive) => {
      if(wasActive){
        cb();
      }
    });
}
