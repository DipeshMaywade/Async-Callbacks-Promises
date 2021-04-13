function greeting(name) {
    console.log(`Hello ${name}, welcome..!`);
  }

  function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} and ${lastName}`;
    callback(fullName);
  }
  
  introduction('Rohit','Virat', greeting);