<script setup>
defineProps({
})
</script>

<template>
  <div class="place">
    <div class="calc--body default-border">
      <div class="calc--input default-border"></div>
      <div class="calc--board default-border">

        <!-- Linha -->
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-c" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-a" />
            <fa-icon icon="fa-c" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-arrow-left-long" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-clock-rotate-left" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-divide" />
          </div>
        </div>

        <!-- Linha -->
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-7" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-8" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-9" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-square-root-variable" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-xmark" />
          </div>
        </div>

        <!-- Linha -->
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-4" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-5" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-6" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-xmark" />²
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-minus" />
          </div>
        </div>

        <!-- Linha -->
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-1" />

          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-2" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-3" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-percent" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-plus" />
          </div>
        </div>

        <!-- Linha -->
        <div class="calc--button">
          <div class="calc--button--place">
            <fa-icon icon="fa-0" />
          </div>
        </div>
        <div class="calc--button">
          <div class="calc--button--place">
            <span class="m-1">
              <fa-icon icon="fa-0" />
            </span>
            <fa-icon icon="fa-0" />
          </div>
        </div>
        <div
          style="font-weight: 900;"
          class="calc--button"
        >
          <div class="calc--button--place">
            ,
          </div>
        </div>
        <div
          class="calc--button"
          style="width: 40%;"
        >
          <div class="calc--button--place">
            <fa-icon icon="fa-equals" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
