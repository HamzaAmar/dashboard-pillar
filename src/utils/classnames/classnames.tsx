function classnames(...args: any) {
  let newString = ''

  for (let arg of args) {
    if (!arg) continue
    else if (typeof arg === 'string' || typeof arg === 'number') {
      newString += `${arg} `
    } else if (typeof arg === 'object' && arg) {
      if (Array.isArray(arg)) {
        for (let value of arg) {
          if (!value) continue
          newString += `${value} `
        }
      } else {
        for (let [key, value] of Object.entries(arg)) {
          if (!value) continue
          newString += `${key} `
        }
      }
    }
  }
  const className = newString.trimEnd()
  return className ? { className } : {}
}

export default classnames
