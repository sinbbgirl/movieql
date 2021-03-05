export const people = [{
        id: 1,
        name: "GEUNTAE",
        age: 20,
        gender: "man"
    },
    {
        id: 2,
        name: "a",
        age: 25,
        gender: "female"
    },
    {
        id: 3,
        name: "b",
        age: 24,
        gender: "man"
    },
    {
        id: 4,
        name: "CE",
        age: 27,
        gender: "feman"
    },
];

export const getByID = id => {
    const filteredPeople = people.filter(person => id === person.id)
    return filteredPeople[0];
}