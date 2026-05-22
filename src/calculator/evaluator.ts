export type OperatorToken = '+' | '-' | '*' | '/'

type Token =
  | { kind: 'number'; value: number }
  | { kind: 'op'; value: OperatorToken }

function isDigit(char: string): boolean {
  return char >= '0' && char <= '9'
}

function tokenize(expression: string): Token[] | null {
  const tokens: Token[] = []
  const source = expression.trim()
  let index = 0

  while (index < source.length) {
    const char = source[index]

    if (char === ' ') {
      index += 1
      continue
    }

    if (char === '+' || char === '-' || char === '*' || char === '/') {
      tokens.push({ kind: 'op', value: char })
      index += 1
      continue
    }

    if (isDigit(char) || char === '.') {
      let value = ''
      let dotCount = 0

      while (index < source.length) {
        const nextChar = source[index]
        if (nextChar === '.') {
          dotCount += 1
          if (dotCount > 1) {
            return null
          }
          value += nextChar
          index += 1
          continue
        }

        if (!isDigit(nextChar)) {
          break
        }

        value += nextChar
        index += 1
      }

      const numberValue = Number.parseFloat(value)
      if (Number.isNaN(numberValue)) {
        return null
      }

      tokens.push({ kind: 'number', value: numberValue })
      continue
    }

    return null
  }

  return tokens
}

function normalizeExpression(expression: string): string {
  return expression.replace(/(\d+)\.(?=\s*[+\-*/]|\s*$)/g, '$1')
}

export function evaluate(expression: string): number | null {
  const normalized = normalizeExpression(expression)
  const parsedTokens = tokenize(normalized)

  if (parsedTokens === null || parsedTokens.length === 0) {
    return null
  }

  const tokens = parsedTokens
  let position = 0

  function peek(): Token | undefined {
    return tokens[position]
  }

  function consume(): Token {
    const token = tokens[position]
    position += 1
    return token
  }

  function parseFactor(): number | null {
    const token = peek()
    if (token === undefined || token.kind !== 'number') {
      return null
    }

    consume()
    return token.value
  }

  function parseTerm(): number | null {
    let left = parseFactor()
    if (left === null) {
      return null
    }

    while (true) {
      const token = peek()
      if (
        token === undefined ||
        token.kind !== 'op' ||
        (token.value !== '*' && token.value !== '/')
      ) {
        return left
      }

      consume()
      const right = parseFactor()
      if (right === null) {
        return null
      }

      if (token.value === '*') {
        left *= right
        continue
      }

      if (right === 0) {
        return null
      }

      left /= right
    }
  }

  function parseExpression(): number | null {
    let left = parseTerm()
    if (left === null) {
      return null
    }

    while (true) {
      const token = peek()
      if (
        token === undefined ||
        token.kind !== 'op' ||
        (token.value !== '+' && token.value !== '-')
      ) {
        return left
      }

      consume()
      const right = parseTerm()
      if (right === null) {
        return null
      }

      if (token.value === '+') {
        left += right
      } else {
        left -= right
      }
    }
  }

  const result = parseExpression()
  if (result === null || position !== tokens.length) {
    return null
  }

  return result
}
