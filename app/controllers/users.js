import { userSchema } from '../models/users.js';

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

export const getUsers = ( req, res) => {
  userSchema.find().then((users) => res.send(users)).catch((error) => {
    res.status(500).send("Something Went Wrong")
  })
};

export const createUser = (req, res) => {
  const userpost = new userSchema({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    nama_lengkap: req.body.nama_lengkap,
    description: req.body.description,
    contact: req.body.contact,
    user_role: req.body.user_role,
    keranjang_belanja: req.body.keranjang_belanja,
    daftar_pemesanan: req.body.daftar_pemesanan,
    daftar_pemesanan_meja: req.body.daftar_pemesanan_meja,
    user_products_rating: req.body.user_products_rating,
    status_aktif: req.body.status_aktif,
    created_at: req.body.created_at,
    last_update: req.body.last_update,
  });

  // users.push(user);

  // res.send(`user with name ${req.body.username} added to the database!`)

  userpost.save()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json({ message: err});
  })
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

