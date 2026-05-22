const OPERATOR_PRECEDENCE: Record<string, number> = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
}

const NUMBER_PATTERN = /^\d+(?:\.\d+)?$/

export function appendToken(expression: string, token: string): string {
  const current = expression === 'Error' ? '0' : expression

  if (isNumberToken(token)) {
    return current === '0' ? token : `${current}${token}`
  }

  if (token === '.') {
    const segment = getLastNumberSegment(current)
    if (segment.includes('.')) {
      return current
    }

    if (current === '0' || endsWithOperator(current)) {
      return `${current === '0' ? '' : current}0.`
    }

    return `${current}.`
  }

  if (isOperator(token)) {
    if (endsWithOperator(current)) {
      return `${current.slice(0, -1)}${token}`
    }

    return `${current}${token}`
  }

  return current
}

export function evaluateExpression(expression: string): { ok: true; value: string } | { ok: false } {
  try {
    const tokens = tokenize(expression)
    const rpn = toReversePolishNotation(tokens)
    const value = evaluateReversePolishNotation(rpn)

    if (!Number.isFinite(value)) {
      return { ok: false }
    }

    return { ok: true, value: normalizeNumber(value) }
  } catch {
    return { ok: false }
  }
}

function tokenize(expression: string): string[] {
  const normalized = expression.replace(/\s+/g, '')

  if (!normalized || endsWithOperator(normalized)) {
    throw new Error('Invalid expression')
  }

  const tokens = normalized.match(/\d+(?:\.\d+)?|[+\-*/]/g)

  if (!tokens || tokens.join('') !== normalized) {
    throw new Error('Invalid token')
  }

  return tokens
}

function toReversePolishNotation(tokens: string[]): string[] {
  const output: string[] = []
  const operators: string[] = []

  for (const token of tokens) {
    if (NUMBER_PATTERN.test(token)) {
      output.push(token)
      continue
    }

    while (
      operators.length > 0 &&
      OPERATOR_PRECEDENCE[operators[operators.length - 1]] >= OPERATOR_PRECEDENCE[token]
    ) {
      output.push(operators.pop()!)
    }

    operators.push(token)
  }

  while (operators.length > 0) {
    output.push(operators.pop()!)
  }

  return output
}

function evaluateReversePolishNotation(tokens: string[]): number {
  const values: number[] = []

  for (const token of tokens) {
    if (NUMBER_PATTERN.test(token)) {
      values.push(Number(token))
      continue
    }

    const right = values.pop()
    const left = values.pop()

    if (left === undefined || right === undefined) {
      throw new Error('Invalid expression stack')
    }

    switch (token) {
      case '+':
        values.push(left + right)
        break
      case '-':
        values.push(left - right)
        break
      case '*':
        values.push(left * right)
        break
      case '/':
        if (right === 0) {
          throw new Error('Division by zero')
        }
        values.push(left / right)
        break
      default:
        throw new Error('Unknown operator')
    }
  }

  if (values.length !== 1) {
    throw new Error('Invalid result stack')
  }

  return values[0]
}

function normalizeNumber(value: number): string {
  const rounded = Number(value.toFixed(12))
  return Number.isInteger(rounded) ? String(rounded) : String(rounded)
}

function isNumberToken(token: string): boolean {
  return /^\d$/.test(token)
}

function isOperator(token: string): boolean {
  return token in OPERATOR_PRECEDENCE
}

function endsWithOperator(expression: string): boolean {
  return /[+\-*/]$/.test(expression)
}

function getLastNumberSegment(expression: string): string {
  const match = expression.match(/\d*\.?\d*$/)
  return match?.[0] ?? ''
}
