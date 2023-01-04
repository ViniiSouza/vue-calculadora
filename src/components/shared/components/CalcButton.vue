<script setup>
defineProps({
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
  }
})
</script>
<template>
  <div class="calc--button" :style="`width: ${width * 20}%`">
    <div class="calc--button--place">
      <fa-icon v-for="icon in icons" :key="icon" :icon="icon" />
      <span v-if="extraText">{{ extraText }}</span>
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

.calc--button:hover .calc--button--place {
  transition: 0.3s;
  background-color: rgb(240, 240, 240);
  color: rgb(29, 29, 29);
}
</style>