<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useCalculator } from '../calculator/useCalculator'

const { displayValue, dispatch, handleKeyDown } = useCalculator()

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <section class="calculator" aria-label="Calculator">
    <output
      class="display"
      data-testid="display"
      aria-live="polite"
      aria-atomic="true"
    >
      {{ displayValue }}
    </output>

    <div class="button-grid">
      <button
        class="btn btn-clear span-two"
        data-testid="btn-clear"
        type="button"
        aria-label="Clear"
        @click="dispatch({ type: 'clear' })"
      >
        C
      </button>
      <button
        class="btn btn-operator"
        data-testid="btn-divide"
        type="button"
        aria-label="Divide"
        @click="dispatch({ type: 'operator', value: '/' })"
      >
        /
      </button>
      <button
        class="btn btn-operator"
        data-testid="btn-multiply"
        type="button"
        aria-label="Multiply"
        @click="dispatch({ type: 'operator', value: '*' })"
      >
        ×
      </button>

      <button class="btn" data-testid="btn-7" type="button" @click="dispatch({ type: 'digit', value: '7' })">7</button>
      <button class="btn" data-testid="btn-8" type="button" @click="dispatch({ type: 'digit', value: '8' })">8</button>
      <button class="btn" data-testid="btn-9" type="button" @click="dispatch({ type: 'digit', value: '9' })">9</button>
      <button
        class="btn btn-operator"
        data-testid="btn-subtract"
        type="button"
        aria-label="Subtract"
        @click="dispatch({ type: 'operator', value: '-' })"
      >
        −
      </button>

      <button class="btn" data-testid="btn-4" type="button" @click="dispatch({ type: 'digit', value: '4' })">4</button>
      <button class="btn" data-testid="btn-5" type="button" @click="dispatch({ type: 'digit', value: '5' })">5</button>
      <button class="btn" data-testid="btn-6" type="button" @click="dispatch({ type: 'digit', value: '6' })">6</button>
      <button
        class="btn btn-operator"
        data-testid="btn-add"
        type="button"
        aria-label="Add"
        @click="dispatch({ type: 'operator', value: '+' })"
      >
        +
      </button>

      <button class="btn" data-testid="btn-1" type="button" @click="dispatch({ type: 'digit', value: '1' })">1</button>
      <button class="btn" data-testid="btn-2" type="button" @click="dispatch({ type: 'digit', value: '2' })">2</button>
      <button class="btn" data-testid="btn-3" type="button" @click="dispatch({ type: 'digit', value: '3' })">3</button>
      <button
        class="btn btn-equals span-row"
        data-testid="btn-equals"
        type="button"
        aria-label="Equals"
        @click="dispatch({ type: 'equals' })"
      >
        =
      </button>

      <button class="btn span-two" data-testid="btn-0" type="button" @click="dispatch({ type: 'digit', value: '0' })">0</button>
      <button
        class="btn"
        data-testid="btn-decimal"
        type="button"
        aria-label="Decimal point"
        @click="dispatch({ type: 'decimal' })"
      >
        .
      </button>
    </div>
  </section>
</template>

<style scoped>
:root {
  --btn-size: 4rem;
  --gap: 0.5rem;
  --radius: 0.75rem;
  --bg-calc: #16213e;
  --bg-display: rgba(0, 0, 0, 0.3);
  --bg-btn: #0f3460;
  --bg-btn-hover: #164a86;
  --bg-btn-active: #1b5ca4;
  --bg-operator: #533483;
  --bg-operator-hover: #6a43a6;
  --bg-operator-active: #7e54be;
  --bg-equals: #e94560;
  --bg-equals-hover: #f05d75;
  --bg-equals-active: #ff7f94;
  --bg-clear: #2a2a4a;
  --bg-clear-hover: #3d3d67;
  --bg-clear-active: #55558b;
  --text: #eaeaea;
  --text-display: #ffffff;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.calculator {
  width: min(20rem, 100%);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  padding: 1.25rem;
  border-radius: 1rem;
  background: var(--bg-calc);
  box-shadow: var(--shadow);
}

.display {
  display: block;
  min-height: 3.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  background: var(--bg-display);
  color: var(--text-display);
  text-align: right;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--gap);
}

.btn {
  min-width: 2.75rem;
  min-height: 2.75rem;
  height: var(--btn-size);
  border: 0;
  border-radius: var(--radius);
  background: var(--bg-btn);
  color: var(--text);
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: background-color 120ms ease, transform 80ms ease;
}

.btn:hover {
  background: var(--bg-btn-hover);
}

.btn:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 2px;
}

.btn:active {
  background: var(--bg-btn-active);
  transform: scale(0.97);
}

.btn-operator {
  background: var(--bg-operator);
}

.btn-operator:hover {
  background: var(--bg-operator-hover);
}

.btn-operator:active {
  background: var(--bg-operator-active);
}

.btn-clear {
  background: var(--bg-clear);
}

.btn-clear:hover {
  background: var(--bg-clear-hover);
}

.btn-clear:active {
  background: var(--bg-clear-active);
}

.btn-equals {
  background: var(--bg-equals);
}

.btn-equals:hover {
  background: var(--bg-equals-hover);
}

.btn-equals:active {
  background: var(--bg-equals-active);
}

.span-two {
  grid-column: span 2;
}

.span-row {
  grid-row: span 2;
}
</style>
