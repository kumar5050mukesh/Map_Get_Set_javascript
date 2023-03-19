// using attribute method
const person={
    name:"Mithun",
    age :21,
    address :{
        street :"B8 ,Block B, Industrial Area",
        city:"sector 62, Noida",
        state:"uttar pradesh",
    },

};
function func(data){
    return data.name , data.address.street
}

res=func(person)
console.log(res)

// destructuring

const person2 = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area",
      city: "sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };
  
  function returnobj(data) {
    const { name, address: { street } } = data;
    return { name, street };
  }
  
  const result = returnobj(person2);
  console.log(result);
  