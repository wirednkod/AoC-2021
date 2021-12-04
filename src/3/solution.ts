const parser = (a: string): number => parseInt(a, 2)

const readOnesAndZeros = (lines: string[], k: number): [number, number] => {
  let z = 0
  let o = 0
  lines.forEach((l) => {
    if (l.split("")[k] === "0") {
      z++
    } else {
      o++
    }
  })
  return [o, z]
}

const findOandCO = (lines: string[], oxygen = false): number => {
  let filtered: Array<string> = lines
  for (let k = 0; k < lines[0].length; k++) {
    const [ones, zeros] = readOnesAndZeros(lines, k)
    const against = oxygen ? (ones >= zeros ? 1 : 0) : ones < zeros ? 1 : 0
    filtered = filtered
      .map((l) => (parseInt(l.split("")[k], 0) === against ? l : ""))
      .filter(Boolean)
    if (filtered.length === 1) {
      break
    }
  }
  return parser(filtered[0])
}

const solution1 = (lines: string[]) => {
  const g: Array<Number> = []
  const e: Array<Number> = []
  for (let k = 0; k < lines[0].length; k++) {
    const [ones, zeros] = readOnesAndZeros(lines, k)
    g[k] = ones > zeros ? 1 : 0
    e[k] = ones < zeros ? 1 : 0
  }

  console.log(parser(g.join("")) * parser(e.join("")))
  return parser(g.join("")) * parser(e.join(""))
}

const solution2 = (lines: string[]) => {
  let oxygen = findOandCO(lines, true)
  let co2 = findOandCO(lines)

  console.log(oxygen * co2)

  return oxygen * co2
}

export default [solution1, solution2]
