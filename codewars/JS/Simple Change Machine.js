function changeMe(moneyIn){
    switch(moneyIn){
        case '£5': return '20p '.repeat(25).split(' ').join(' ').trim()
        case '£2': return '20p '.repeat(10).split(' ').join(' ').trim()
        case '£1': return '20p '.repeat(5).split(' ').join(' ').trim()
        case '50p': return '20p '.repeat(2).split(' ').join(' ').trim() + ' 10p'
        case '20p': return '10p '.repeat(2).split(' ').join(' ').trim()
        default: return moneyIn

    }
  }

  console.log(changeMe('£5'));