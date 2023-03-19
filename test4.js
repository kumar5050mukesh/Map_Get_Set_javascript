function func(x) {
    return [x[0], x[1], x[x.length - 1]];
  }
  
  const test = func([1, 2, 3, 4, 5]);
  console.log(test);


  function funcu(x) {
    const [first,second, ...rest]= x;

  return [first,second,rest.pop()]
  }
  
  const test1 = funcu([1, 2, 3, 4, 5]);
  console.log(test1);
  