<script setup>
import { ref, watch } from "vue"

const props = defineProps({
  icons: {
    default: [],
    type: Array
  },
  width: {
    default: 1,
    type: Number
  },
  keyDetect: {
    default: 'none',
    type: String
  },
  event: {
    default: 'none',
    type: String
  },
  extraText: {
    default: '',
    type: String
  },
  hover: {
    default: false,
    type: Boolean
  },
  disabled: {
    default: false,
    type: Boolean
  }
})

const emit = defineEmits(['button-clicked'])

const sendEvent = () => {
  emit('button-clicked')
}

const hover = ref(false)

watch(() => props.hover, value => {
  hover.value = value
})
</script>
<template>
  <div
    class="calc--button"
    :style="`width: ${width * 20}%`"
    @click="sendEvent"
  >
    <div
      class="calc--button--place"
      :title="disabled ? 'Em desenvolvimento' : ''"
      :class="`${hover ? 'calc--button_hover' : ''} ${disabled ? 'calc--button--place-disabled' : ''}`"
    >
      <fa-icon
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
      />
      <span style="margin-bottom: 10px;" v-if="extraText">{{ extraText }}</span>
    </div>
  </div>
</template>
<style>
.calc--button {
  color: rgb(240, 240, 240);
  font-size: 28px;
  display: flex;
  width: 20%;
  height: 20%;
  border: 1px solid rgb(240, 240, 240);
  justify-content: center;
  align-items: center;
}

.calc--button--place-disabled {
  cursor: not-allowed !important;
}

.calc--button--place {
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 70px;
  height: 70px;
}

.calc--button:hover .calc--button--place:not(.calc--button--place-disabled) {
  background-color: rgb(240, 240, 240);
  color: rgb(29, 29, 29);
  transition: 0.3s;
}

.calc--button_hover {
  background-color: rgb(240, 240, 240);
  color: rgb(29, 29, 29);
  transition: 0.3s;
}
</style>