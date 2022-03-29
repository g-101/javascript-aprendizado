// Objects são uteis para armazenar dados de maneira estruturada e podendo representar 
// objetos do mundo real, como um gato:
// em objetos seus dados são acessados atraves de suas PROPRIED



const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

// Há duas maneiras de acessar propriedades:
// com ponto(dot) e chaves(brackets)
// com o ponto é mais utilizado quando você ja conhece o nome da propriedade
const catName = cat.name;
// console.log(`Nome do gato: ${catName}`);

const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const drinkValue = testObj["the drink"];    
// console.log(drinkValue);

//adicionando novas propriedades ao objeto
// pode ser feito com ponto ou chaves
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
};
myDog.bark = "woof";
// console.log(myDog);

//deletando propriedades do objeto
// pode ser feito com ponto ou chaves
delete myDog.tails;
// console.log(myDog);

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
};

for(key in users) {
    // console.log(key);
  for(key2 in users[key]) {
        // console.log(key2);
    console.log(users[key][key2]);
        // console.log( users[key][key2]);
  }

}