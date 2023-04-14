function remove (string) {
    if(/!$/.test(string)){
      return string.slice(0, string.length-1)
    }
    return string;
  }