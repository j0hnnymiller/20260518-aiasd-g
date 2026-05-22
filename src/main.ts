import './style.css'
import { appendToken, evaluateExpression } from './calculator'

type CalculatorState = {
  expression: string
  display: string
}

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Missing #app container')
}

app.innerHTML = `
  <main class="calculator" aria-label="Web calculator">
    <output id="display" class="display" aria-live="polite">0</output>
    <section class="keys" aria-label="Calculator keys">
      <button type="button" data-token="7">7</button>
      <button type="button" data-token="8">8</button>
      <button type="button" data-token="9">9</button>
      <button type="button" data-token="/">/</button>
      <button type="button" data-token="4">4</button>
      <button type="button" data-token="5">5</button>
      <button type="button" data-token="6">6</button>
      <button type="button" data-token="*">*</button>
      <button type="button" data-token="1">1</button>
      <button type="button" data-token="2">2</button>
      <button type="button" data-token="3">3</button>
      <button type="button" data-token="-">-</button>
      <button type="button" data-token="0" class="span-2">0</button>
      <button type="button" data-token=".">.</button>
      <button type="button" data-token="+">+</button>
      <button type="button" data-token="=">=</button>
    </section>
  </main>
`

const display = document.querySelector<HTMLOutputElement>('#display')

if (!display) {
  throw new Error('Missing display output')
}

const displayElement = display

const state: CalculatorState = {
  expression: '0',
  display: '0',
}

render()

app.addEventListener('click', (event) => {
  const target = event.target
  if (!(target instanceof HTMLButtonElement)) {
    return
  }

  handleToken(target.dataset.token)
})

window.addEventListener('keydown', (event) => {
  const token = mapKeyboardToToken(event)
  if (!token) {
    return
  }

  event.preventDefault()
  handleToken(token)
})

function handleToken(token: string | undefined): void {
  if (!token) {
    return
  }

  if (token === '=') {
    const result = evaluateExpression(state.expression)
    if (!result.ok) {
      state.expression = 'Error'
      state.display = 'Error'
      render()
      return
    }

    state.expression = result.value
    state.display = result.value
    render()
    return
  }

  state.expression = appendToken(state.expression, token)
  state.display = state.expression
  render()
}

function render(): void {
  displayElement.textContent = state.display
}

function mapKeyboardToToken(event: KeyboardEvent): string | null {
  if (/^\d$/.test(event.key)) {
    return event.key
  }

  if (['+', '-', '*', '/', '.'].includes(event.key)) {
    return event.key
  }

  if (event.key === 'Enter' || event.key === '=') {
    return '='
  }

  return null
}
