 /*let firstName = 'Loco';
let age = '21';

console.log(firstName);
console.log(age);

// déclaration d'une fonction avant ES6
function color() {
    return 'green';
  }
  
  // déclaration d'une fonction avec l’arrow function
  const color = () => {
    return 'green';
  }
  
  // ou même encore plus rapide
  const color = () => 'green';
  
  
  let myColor = color();
  // myColor vaut 'green'

  const hello = (name) => {
    return `Hello ${name} ✌️`;
  }
  // ou plus court
  const hello = (name) => `Hello ${name} ✌️`;
  
  
   let x = hello('Manu'); */

const person1 = { firstName: "Manu", job: "Developer" };
const person2 = { firstName: "Eric", job: "Developer" };
const person3 = { firstName: "Auriane", job: "Producer" };

haveSameJob(person1, person2); 
// doit retourner "Manu et Eric sont tous les deux Developers."

haveSameJob(person1, person3);
// doit retourner "Manu et Auriane ne font pas le même métier."