function getAge(this: typeof cat) {
    return this.age;
  }
  
  // 기존 데이터
  const cat = {
    age: 12 // Number
  };
  getAge.call(cat); // 12
  
  // 새로운 데이터
  const dog = {
    age: '13' // String
  };
const getAgeForDog: OmitThisParameter<typeof getAge> = getAge;
//   getAge.call(dog);  