function shortcut (string) {
    const arrVowels = ['a', 'e', 'i', 'o', 'u']
    const word = string.split('').filter(el => !arrVowels.includes(el))
    return word.join('');
  }

  console.log(shortcut("hello"));