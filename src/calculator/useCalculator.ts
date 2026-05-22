import { computed, ref } from 'vue'
import { evaluate, type OperatorToken } from './evaluator'

type DigitChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type CalcAction =
  | { type: 'digit'; value: DigitChar }
  | { type: 'operator'; value: OperatorToken }
  | { type: 'decimal' }
  | { type: 'equals' }
  | { type: 'clear' }
  | { type: 'backspace' }

const OPERATOR_CHARS = new Set<OperatorToken>(['+', '-', '*', '/'])
const KEY_MAP: Readonly<Record<string, CalcAction>> = {
  '0': { type: 'digit', value: '0' },
  '1': { type: 'digit', value: '1' },
  '2': { type: 'digit', value: '2' },
  '3': { type: 'digit', value: '3' },
  '4': { type: 'digit', value: '4' },
  '5': { type: 'digit', value: '5' },
  '6': { type: 'digit', value: '6' },
  '7': { type: 'digit', value: '7' },
  '8': { type: 'digit', value: '8' },
  '9': { type: 'digit', value: '9' },
  '+': { type: 'operator', value: '+' },
  '-': { type: 'operator', value: '-' },
  '*': { type: 'operator', value: '*' },
  '/': { type: 'operator', value: '/' },
  '.': { type: 'decimal' },
  Enter: { type: 'equals' },
  '=': { type: 'equals' },
  Backspace: { type: 'backspace' },
  Escape: { type: 'clear' },
  Delete: { type: 'clear' },
}

function formatResult(value: number): string {
  return Number.isInteger(value)
    ? String(value)
    : String(Number.parseFloat(value.toPrecision(12)))
}

function getLastNumericToken(expression: string): string {
  const parts = expression.split(/[+\-*/]/)
  return parts[parts.length - 1] ?? ''
}

export type CalculatorAction = CalcAction

export function useCalculator() {
  const expression = ref('')
  const result = ref<string | null>(null)
  const error = ref(false)

  const displayValue = computed(() => {
    if (error.value) {
      return 'Error'
    }

    if (result.value !== null) {
      return result.value
    }

    return expression.value || '0'
  })

  function dispatch(action: CalcAction): void {
    switch (action.type) {
      case 'digit': {
        if (error.value || result.value !== null) {
          expression.value = action.value
          result.value = null
          error.value = false
          return
        }

        expression.value += action.value
        return
      }
      case 'operator': {
        error.value = false

        if (result.value !== null) {
          expression.value = `${result.value}${action.value}`
          result.value = null
          return
        }

        if (expression.value.length === 0) {
          return
        }

        const lastChar = expression.value[expression.value.length - 1]
        if (OPERATOR_CHARS.has(lastChar as OperatorToken)) {
          expression.value = `${expression.value.slice(0, -1)}${action.value}`
          return
        }

        expression.value += action.value
        return
      }
      case 'decimal': {
        if (error.value) {
          expression.value = '0.'
          result.value = null
          error.value = false
          return
        }

        if (result.value !== null) {
          expression.value = '0.'
          result.value = null
          return
        }

        const lastNumericToken = getLastNumericToken(expression.value)
        if (lastNumericToken.includes('.')) {
          return
        }

        expression.value += lastNumericToken === '' ? '0.' : '.'
        return
      }
      case 'equals': {
        if (expression.value === '') {
          return
        }

        const nextResult = evaluate(expression.value)
        if (nextResult === null) {
          error.value = true
          result.value = null
          return
        }

        result.value = formatResult(nextResult)
        error.value = false
        return
      }
      case 'clear': {
        expression.value = ''
        result.value = null
        error.value = false
        return
      }
      case 'backspace': {
        if (error.value) {
          expression.value = ''
          result.value = null
          error.value = false
          return
        }

        if (result.value !== null) {
          expression.value = result.value.slice(0, -1)
          result.value = null
          return
        }

        if (expression.value.length === 0) {
          return
        }

        expression.value = expression.value.slice(0, -1)
      }
    }
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (event.ctrlKey || event.metaKey || event.altKey) {
      return
    }

    const action = KEY_MAP[event.key]
    if (action === undefined) {
      return
    }

    event.preventDefault()
    dispatch(action)
  }

  return {
    displayValue,
    dispatch,
    handleKeyDown,
  }
}
