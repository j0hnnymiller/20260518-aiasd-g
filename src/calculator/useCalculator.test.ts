import { describe, expect, it, vi } from 'vitest'
import { useCalculator } from './useCalculator'

function createKeyboardEvent(
  key: string,
  options: Partial<Pick<KeyboardEvent, 'ctrlKey' | 'metaKey' | 'altKey'>> = {},
): KeyboardEvent & { preventDefault: ReturnType<typeof vi.fn> } {
  const preventDefault = vi.fn()

  return {
    key,
    ctrlKey: options.ctrlKey ?? false,
    metaKey: options.metaKey ?? false,
    altKey: options.altKey ?? false,
    preventDefault,
  } as unknown as KeyboardEvent & { preventDefault: ReturnType<typeof vi.fn> }
}

describe('useCalculator slice 2 behavior', () => {
  it('backspace removes one character at a time', () => {
    const calculator = useCalculator()

    calculator.dispatch({ type: 'digit', value: '1' })
    calculator.dispatch({ type: 'digit', value: '2' })
    calculator.dispatch({ type: 'digit', value: '3' })
    calculator.dispatch({ type: 'backspace' })

    expect(calculator.displayValue.value).toBe('12')
  })

  it('clear resets display to 0', () => {
    const calculator = useCalculator()

    calculator.dispatch({ type: 'digit', value: '9' })
    calculator.dispatch({ type: 'operator', value: '+' })
    calculator.dispatch({ type: 'digit', value: '1' })
    calculator.dispatch({ type: 'clear' })

    expect(calculator.displayValue.value).toBe('0')
  })

  it('Escape key resets display to 0', () => {
    const calculator = useCalculator()

    calculator.dispatch({ type: 'digit', value: '9' })
    calculator.dispatch({ type: 'operator', value: '+' })
    calculator.dispatch({ type: 'digit', value: '1' })

    const escapeEvent = createKeyboardEvent('Escape')
    calculator.handleKeyDown(escapeEvent)

    expect(escapeEvent.preventDefault).toHaveBeenCalledOnce()
    expect(calculator.displayValue.value).toBe('0')
  })

  it('Backspace key changes 123 to 12', () => {
    const calculator = useCalculator()

    calculator.dispatch({ type: 'digit', value: '1' })
    calculator.dispatch({ type: 'digit', value: '2' })
    calculator.dispatch({ type: 'digit', value: '3' })

    const backspaceEvent = createKeyboardEvent('Backspace')
    calculator.handleKeyDown(backspaceEvent)

    expect(backspaceEvent.preventDefault).toHaveBeenCalledOnce()
    expect(calculator.displayValue.value).toBe('12')
  })

  it('keyboard and click actions produce identical results', () => {
    const mouseCalculator = useCalculator()
    mouseCalculator.dispatch({ type: 'digit', value: '1' })
    mouseCalculator.dispatch({ type: 'digit', value: '2' })
    mouseCalculator.dispatch({ type: 'operator', value: '+' })
    mouseCalculator.dispatch({ type: 'digit', value: '7' })
    mouseCalculator.dispatch({ type: 'equals' })

    const keyboardCalculator = useCalculator()
    for (const key of ['1', '2', '+', '7', 'Enter']) {
      keyboardCalculator.handleKeyDown(createKeyboardEvent(key))
    }

    expect(keyboardCalculator.displayValue.value).toBe('19')
    expect(keyboardCalculator.displayValue.value).toBe(
      mouseCalculator.displayValue.value,
    )
  })

  it('modified key chords do not dispatch calculator actions', () => {
    const calculator = useCalculator()
    calculator.dispatch({ type: 'digit', value: '1' })

    const ctrlEvent = createKeyboardEvent('2', { ctrlKey: true })
    calculator.handleKeyDown(ctrlEvent)

    expect(ctrlEvent.preventDefault).not.toHaveBeenCalled()
    expect(calculator.displayValue.value).toBe('1')
  })
})
