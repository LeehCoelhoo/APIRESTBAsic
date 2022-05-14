// index, show, store,update, destroy
module.exports = {
  async show(req,res){
    const user = [
      {name : 'Jones', email: 'jones@gmail.com'},
      {name: 'Henrique', email: 'henrique@gmail.com'}
    ]
    return res.json(users);
  }
};