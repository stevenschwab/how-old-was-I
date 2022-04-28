// Write your function here:
const howOld = (age, year) => {
    const currentYear = 2022;
    const yearBorn = currentYear - age;
  
    if (year > currentYear) {
      return `You will be ${age + (year - 2022)} in the year ${year}`;
    } else if (yearBorn > year) {
      return `The year ${year} was ${yearBorn - year} years before you were born`;
    } else if (year > yearBorn) {
      return `You were ${year - yearBorn} in the year ${year}`;
    }
  }
  
  
  
  
  // Once your function is written, write function calls to test your code!
  console.log(howOld(27, 2030));
  console.log(howOld(27, 1993));
  console.log(howOld(27, 2000));