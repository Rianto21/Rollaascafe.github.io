import { json } from 'express';
import { ObjectId } from 'mongodb';
import { productSchema } from '../models/products.js'

export const getProducts = async (req, res) => {
  const productpost = await productSchema.find()
  res.send(productpost)
};

export const createProduct = (req, res) => {
  const productpost = new productSchema({
    nama_barang: req.body.nama_barang,
    deskripsi: req.body.deskripsi,
    stok: req.body.stok,
    harga: req.body.harga,
    gambar: req.body.gambar,
    rating_product: req.body.rating_product
  });

  productpost.save()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json({ message: err});
  })

};

export const getProduct = async (req, res) => {
  try {
    const foundProduct = await productSchema.findById(req.params.id);
    res.json(foundProduct)
  } catch (error) {
    res.json(error)

  }  
};

export const getProductNama = async (req, res) => {
  try {
    const foundProduct = await productSchema.find({"nama_barang": {"$regex": req.params.nama, "$options": 'i'}})
    res.json(foundProduct)
  } catch (error) {
    res.json(error)
  }
}

export const deleteProduct = async (req, res) =>{
  try {
    const removedProduct = await productSchema.remove({_id: req.params.id});
    res.json( removedProduct)
  } catch (error) {
    res.json(error)
  }
  
};

export const updateProduct = async (req, res) => {

  try {
    const { nama_barang, deskripsi, stok, harga, gambar, } = req.body;

    const product = await productSchema.updateOne({_id: req.params.id}, {
    $set: {nama_barang: nama_barang, deskripsi: deskripsi, stok: stok, harga: harga, gambar: gambar}
  });
    res.json(product)
  } catch (error) {
    res.json(error)
  }
  // console.log(user.age);
  
  // if(nama_barang) product.nama_barang = (nama_barang);
  // if(stok) product.stok = (stok);
  // if(deskripsi) product.deskripsi = (deskripsi);
  // if(gambar) product.gambar = (gambar);
  // if(harga) product.harga = (harga);
};

export const updateallproduct = async (req, res) => {
  try {
    const product = await productSchema.update({}, {$set: {"dijual_online": true}}, {upsert:false,
      multi:true})
    res.json(product)
  } catch (error) {
    res.json(error)
  }
}