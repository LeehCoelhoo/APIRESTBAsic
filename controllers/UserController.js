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
  },

  //deleta usuário
  async destroy(req,res){
    let user = await User.findByIdAndRemove(req.params.id);
    return res.json(user);
  },

  //atualizar usuario
  async update(req,res){
        let user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        return res.json(user);
    }
 
};