function generatePassword(length, level) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let newPassword = ''
  const digits = '0123456789'
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~'
  if (level == 'easy') {
    for (let i = 0; i < length; i++) {
      const randomSymbol = alphabet[Math.floor(Math.random() * alphabet.length)]
      newPassword += randomSymbol
    }

    return newPassword
  }
  if (level == 'medium') {
    for (let j = 0; j < length; j++) {
      const randomSymbol1 =
        alphabet[Math.floor(Math.random() * alphabet.length)] +
        digits[Math.floor(Math.random() * digits.length)]
      newPassword += randomSymbol1
    }
    let arr = newPassword.split('')
    arr.length = length
    return arr.join('')
  }
  if (level == 'hard') {
    for (let k = 0; k < length; k++) {
      const randomSymbol1 =
        alphabet[Math.floor(Math.random() * alphabet.length)] +
        digits[Math.floor(Math.random() * digits.length)] +
        symbols[Math.floor(Math.random() * symbols.length)]
      newPassword += randomSymbol1
    }
    let arr1 = newPassword.split('')
    arr1.length = length
    return arr1.join('')
  }
}

console.log(generatePassword(5, 'easy'))
