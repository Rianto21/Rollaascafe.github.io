import { productSchema } from '../models/products.js';
import { userSchema } from '../models/users.js';

export const getUsers = ( req, res) => {
  console.log("You're in get users controller")
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
    status_aktif: req.body.status_aktif
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

export const getUser = async (req, res) => {
  try {
    const foundUser = await userSchema.findById(req.params.id)
    res.json(foundUser)
  } catch (error) {
    res.json(error)
  }
  
};

export const matchUser = async (req, res) => {
  try {
    const matchUser = await userSchema.find({email: req.body.email, password: req.body.password})  
    res.json(matchUser)
  } catch (error) {
    res.json(error)
  }
}

export const getUserName = async (req, res) => {
  try {
    // await userSchema.createIndex({"nama_lengkap": "text"})
    const foundUser = await userSchema.find({ 'nama_lengkap': { '$regex': req.params.name, '$options': 'i'}})
    res.json(foundUser)
    console.log(req.params.name)
  } catch (error) {
    res.json(error)
  }
}

export const deleteUser = async (req, res) =>{
  try {
    const deleteUser = await userSchema.deleteOne({_id: req.params.id});
    res.json(deleteUser)
  } catch (error) {
    res.json(error)
  }
};

export const updateUser = async (req, res) => {
  try {
    const { username, password, email, nama_lengkap, description, contact, user_role, keranjang_belanja, 
      daftar_pemesanan, daftar_pemesanan_meja, user_products_rating, status_aktif} = req.body;
    
    const updateUser = await userSchema.updateOne({_id: req.params.id}, { 
      $set: {
        username: username,
        password: password,
        email: email,
        nama_lengkap: nama_lengkap,
        description: description,
        contact: contact,
        user_role: user_role,
        keranjang_belanja: keranjang_belanja,
        daftar_pemesanan: daftar_pemesanan,
        daftar_pemesanan_meja: daftar_pemesanan_meja,
        user_products_rating: user_products_rating,
        status_aktif: status_aktif,
        last_updates: new Date()
      }
    });
    res.json(updateUser)
  } catch (error) {
    res.json(error)
  }

 
  // console.log(user.age);
  
  // if(username) user.username = (username);
  // if(password) user.password = (password);
  // if(email) user.email = (email);
  // if(nama_lengkap) user.nama_lengkap = (nama_lengkap);
  // if(description) user.description = (description);
  // if(contact) user.contact = (contact);
  // if(user_role) user.user_role = (user_role);
  // if(keranjang_belanja) user.keranjang_belanja = (keranjang_belanja);
  // if(daftar_pemesanan) user.daftar_pemesanan = (daftar_pemesanan);
  // if(daftar_pemesanan_meja) user.daftar_pemesanan_meja = (daftar_pemesanan_meja);
  // if(user_products_rating) user.user_products_rating = (user_products_rating);
  // if(status_aktif) user.status_aktif = (status_aktif);
  // user.last_update = Date.now;

  // res.send(`data with name ${user._id} has been updated`)
};

export const getUserOrder = async (req, res) => {
  try {
    const userpost = await userSchema.findById(req.params.id);
    res.json(userpost.daftar_pemesanan)
  } catch (error) {
    res.json(error)
  }
};

export const getUserCart = async (req, res) => {
  try {
    const userpost = await userSchema.findById(req.params.id);
    res.json(userpost.keranjang_belanja)
  } catch (error) {
    res.json(error)
  }
};

export const addUserCart = async (req, res) => {
  try {
    const totalharga = await productSchema.findById(req.body.id_barang)
    const addusercart = await userSchema.updateOne({_id: req.params.id}, {
      $push: {
        keranjang_belanja: [{
          id_barang: req.body.id_barang,
          jumlah_barang: req.body.jumlah_barang,
          total_harga: totalharga.harga * req.body.jumlah_barang
        }]
      }
      
    })
    console.log(totalharga.harga * req.body.jumlah_barang)
    res.json(addusercart)
  } catch (error) {
    res.json(error)
  }
}

export const updateUserCart = async (req, res) => {
  try {
    
  } catch (error) {
    res.json(error)
  }
}

export const getUserTabOrder = async (req, res) => {
  try {
    const userpost = await userSchema.findById(req.params.id);
    res.json(userpost.daftar_pemesanan_meja)
  } catch (error) {
    res.json(error)
  }
};
