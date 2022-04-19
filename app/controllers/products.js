import UserSchema from '../models/users'

export const getProducts = (req, res) => {
  res.send(products)
};

export const createProduct = (req, res) => {
  const user = new UserSchema({
    
  });

  users.push(user);

  res.send(`user with name ${user.name} added to the database!`)

  
};

export const getProduct = (req, res) => {
  const { id } = req.params;

  const foundProduct = products.find((product) => product.id === id);

  res.send(foundProduct)
};

export const deleteProduct = (req, res) =>{
  const { id } = req.params;
  
  products = products.filter((product) => product.id !== id);
  
  res.send(`product with id ${id} has been deleted`)
};

export const updateProduct = (req, res) => {
  const idParameter = req.params;
  const { name, role, age } = req.body;

  let product = products.find((product) => product.id === idParameter.id);
  // console.log(user.age);
  
  if(name) product.name = (name);
  if(role) product.role = (role);
  if(age) product.age = (age);

  res.send(`data with name ${product.id} has been updated`)
};