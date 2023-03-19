function func(digits) {
    const mapdigit = new Map();
    mapdigit.set("max", Math.max(...digits));
    mapdigit.set("min", Math.min(...digits));
  
    return mapdigit;
  }
  
  const test = func([4, 6, 7, 8, 9]);
  console.log(test);
  

