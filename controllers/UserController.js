const mongoose = require ('mongoose');
const User = require ('../model/User');

//lista todos os usuários
module.exports = {
  async show(req,res){
    let users = await User.find();
    return res.json(users);
  },

  //lista com filtro "email"
  async index(req,res){
    let users = await User.find( {email :req.query.email});
  return res.json(users);
},
  
  //adicionar usuario
  async store (req,res){
    const user = await User.create(req.body);
    return res.json(user);
  }
};