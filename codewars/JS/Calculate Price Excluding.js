//return price without vat
function excludingVatPrice(price){
    if(price===null||+(price/1.15).toFixed(2)===null) return -1
    return +(price/1.15).toFixed(2)
  }