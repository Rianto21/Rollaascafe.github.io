let users = [
  {
    name: "john",
    role: "student",
    age: "21"
  },
  {
    name: "Dann",
    role: "teacher",
    age: "42"
  },
]

export const getUsers = (req, res) => {
  res.send(users)
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(`user with name ${user.name} added to the database!`)
};

export const getUser = (req, res) => {
  const { name } = req.params;

  const foundUser = users.find((user) => user.name === name);

  res.send(foundUser)
};

export const deleteUser = (req, res) =>{
  const { name } = req.params;
  
  users = users.filter((user) => user.name !== name);
  
  res.send(`data with name ${name} has been deleted`)
};

export const updateUser = (req, res) => {
  const nameParameter = req.params;
  const { name, role, age } = req.body;

  let user = users.find((user) => user.name === nameParameter.name);
  // console.log(user.age);
  
  if(name) user.name = (name);
  if(role) user.role = (role);
  if(age) user.age = (age);

  res.send(`data with name ${user.name} has been updated`)
};

