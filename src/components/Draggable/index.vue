<template>
  <div
    ref="draggable"
    class="draggable"
    :style="{ top: top + 'px', left: left + 'px' }"
    @mousedown="dragMouseDown"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const top = ref(10);
const left = ref(10);
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

const draggable = ref(null);

const dragMouseDown = (e) => {
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
};

const elementDrag = (e) => {
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  top.value = draggable.value.offsetTop - pos2;
  left.value = draggable.value.offsetLeft - pos1;
};

const closeDragElement = () => {
  document.onmouseup = null;
  document.onmousemove = null;
};
</script>

<style>
.draggable {
  z-index: 999;
  position: absolute;
  cursor: move;
}
</style>
