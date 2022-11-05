enum Role {
  ADMIN,
  USER,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Wasim",
  age: 31,
  hobbies: ["Gym", "Sport", "Programming"],
  role: Role.ADMIN,
};

let TypeOfNothing: any;

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
