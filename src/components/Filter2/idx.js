const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  },
];

function Filter2() {
  return (
    <div>
      {people
        .filter((person) => person.age > 60)
        .map((filteredPerson) => (
          <li>{filteredPerson.name}</li>
        ))}
    </div>
  );
}

export default Filter2;
