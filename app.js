const { faker } = require('@faker-js/faker');

const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
			id:number,
      name: faker.name.firstName(),
      email: faker.internet.email(),
    });
    number--;
  }
  return persons;
};

console.log(generatePersonsData(20));