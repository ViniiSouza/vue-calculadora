<script setup>
import useCalculadora from './useCalculadora'
import { useCalculatorStore } from '../store/calcStore';
import keys from './shared/keys'
import CalcButton from './shared/components/CalcButton.vue';
import { onMounted, ref } from '@vue/runtime-core';
const calcStore = useCalculatorStore()

const keyButtons = ref(keys)

const { setKeyboardEvents, executeButton } = useCalculadora(window, keyButtons)


defineProps({
})
onMounted(() => setKeyboardEvents())
</script>

<template>
  <div class="place">
    <div class="calc--body default-border">
      <div class="calc--input default-border">
        <p class="calc--input--value">{{ calcStore.value }}</p>
      </div>
      <div class="calc--board default-border">
        <calc-button
          v-for="key in keyButtons"
          :key="key"
          :icons="key.icons"
          :width="key.width"
          :key-detect="key.keyDetect"
          :event="key.event"
          :extra-text="key.extraText"
          :hover="key.hover"
          @button-clicked="executeButton(key.event, key.value)"
        />
      </div>
    </div>
  </div>
</template>

<style>
.default-border {
  border: 2px solid rgb(240, 240, 240);
  border-radius: 5px;
}

.place {
  background-color: rgb(228, 228, 228);
  height: 100vh;
  text-align: center;
}

.calc--body {
  margin: 0 auto;
  background-color: rgb(29, 29, 29);
  border: 8px solid rgb(238, 202, 0);
  width: 30vw;
  height: 75vh;
}

.calc--input {
  margin: 3vh auto;
  width: 85%;
  height: 8vh;
}

.calc--input--value {
  color: white;
  text-align: end;
  font-size: 36px;
  line-height: 10.5vh;
  margin-right: 0.5vw;
}

.calc--board {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 4vh auto;
  width: 85%;
  height: 54vh;
}

.calc-board--line {
  display: flex;
  height: 20%;
}
</style>
