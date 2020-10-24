function sum(num1, num2) {
    let numSum = 0;
    
    //Function
    numSum = num1 + num2;
    
    return numSum;
  }
  
  let number = sum(3, 8);
  console.log(number);
  
  function sum1(num1, num2, num3) {
    let numSum = 0;
    
    numSum = Math.max(num1, num2, num3);
    
    return numSum;
  }
  for(let i = 0; i <= 100; i++) {
    console.log(i % 2);
    if(i % 2 == 0 || i == 0) {
      console.log("Even");
        } else {
          console.log("Odd");
    }
  }