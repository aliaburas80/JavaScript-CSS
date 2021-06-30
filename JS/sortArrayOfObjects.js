//sort an array of objects by a property value in JavaScript
const arrayOfObjects = [
  {
    name: "Ali",
    age: 42,
    city: "Amman",
    country: "Jordan",
  },
  {
    name: "John",
    age: 20,
    city: "London",
    country: "British",
  },
  {
    name: "Samantha",
    age: 19,
    city: "Vienna",
    country: "Austria",
  },
  {
    name: "Michael",
    age: 55,
    city: "Bavaria",
    country: "German",
  },
  {
    name: "Rubens",
    age: 60,
    city: "Rio de Janeiro",
    country: "Brazilian",
  },
  {
    name: "Fernando",
    age: 37,
    city: "Madrid",
    country: "Spanish",
  },
  {
    name: "Ralf",
    age: 33,
    city: "Bogotá",
    country: "Colombian",
  },
  {
    name: "Jenson",
    age: 22,
    city: "Rochester",
    country: "British",
  },
  {
    name: "Takuma",
    age: 25,
    city: "Okazaki",
    country: "Japanese",
  },
];

const sortyBy = (sortCriteria) => {
    return arrayOfObjects.sort((a, b) => (a[sortCriteria] > b[sortCriteria]) ? 1 : -1)
}

console.log('sortyBy(name);', sortyBy('name'));
console.log('sortyBy(age);', sortyBy('age'));
console.log('sortyBy(city);', sortyBy('city'));
console.log('sortyBy(country);', sortyBy('country'));
