import { describe, expect, it } from 'vitest'
import { evaluate } from './evaluator'

describe('evaluate', () => {
  const cases: Array<[string, number | null]> = [
    ['12+7', 19],
    ['9/3', 3],
    ['5.5*2', 11],
    ['10-4', 6],
    ['2+3*4', 14],
    ['100/10/2', 5],
    ['1.5+1.5', 3],
    ['5.+2', 7],
    ['1/0', null],
    ['', null],
    ['abc', null],
    ['5+', null],
    ['1..2', null],
  ]

  for (const [expression, expected] of cases) {
    it(`shows ${expected} for ${expression || 'an empty expression'}`, () => {
      expect(evaluate(expression)).toBe(expected)
    })
  }
})
