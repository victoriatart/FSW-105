let people = [
    {
        name: "Mike",
      age: 12,
      gender: "male"
    },
    {
        name: "Madeline",
      age: 80,
      gender: "female"
    },
    {
        name: "Cheryl",
      age: 22,
      gender: "female"
    },
    {
        name: "Sam",
      age: 30,
      gender: "male"
    },
    {
        name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
  
  for(let i = 0; i < people.length; i++) {
    if(people[i].age > 18) {
    console.log(`${people[i].name} is old enough`);
     } else {
       if(people[i].gender == "male") {
         console.log(`${people[i].name} is not old enough, he is not old enough`);
          } else {
              console.log(`${people[i].name} is not old enough, she is not old enough`);
          }
     }
  }
  
  for(let i = 0; i <= 100; i++) {
    console.log(i % 2);
    if(i % 2 == 0 || i == 0) {
      console.log("Even");
        } else {
          console.log("Odd");
    }
  }
  