import { ref, onMounted, onUnmounted } from 'vue';

export function useViewport() {
  const viewport = ref('pc');

  const updateViewport = () => {
    const width = window.innerWidth;

    if (width < 768) {
      viewport.value = 'mobile';
    } else if (width >= 768 && width < 1024) {
      viewport.value = 'tablet';
    } else {
      viewport.value = 'pc';
    }
  };

  onMounted(() => {
    updateViewport();
    window.addEventListener('resize', updateViewport);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateViewport);
  });

  return {
    viewport,
  };
}
