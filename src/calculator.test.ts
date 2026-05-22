import { describe, expect, it } from 'vitest'
import { evaluateExpression } from './calculator'

describe('evaluateExpression', () => {
  it('evaluates 12+7 as 19', () => {
    expect(evaluateExpression('12+7')).toEqual({ ok: true, value: '19' })
  })

  it('evaluates 9/3 as 3', () => {
    expect(evaluateExpression('9/3')).toEqual({ ok: true, value: '3' })
  })

  it('evaluates 5.5*2 as 11', () => {
    expect(evaluateExpression('5.5*2')).toEqual({ ok: true, value: '11' })
  })

  it('returns failure for invalid expressions', () => {
    expect(evaluateExpression('5++')).toEqual({ ok: false })
  })
})
