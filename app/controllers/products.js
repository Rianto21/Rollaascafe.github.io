import { productSchema } from '../models/products.js'

export const getProducts = async (req, res) => {
  const productpost = await productSchema.find()
  res.send(productpost)
};

export const createProduct = (req, res) => {
  const user = new productSchema({
    nama_barang: req.body.nama_barang,
    deskripsi: req.body.deskripsi,
    stok: req.body.stok,
    harga: req.body.harga,
    gambar: req.body.gambar,
    rating_product: req.body.rating_product
  });

  userpost.save()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json({ message: err});
  })

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