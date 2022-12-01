// add, delete, and post requests are the only difference (delete product, add more to product)
const router = require("express").Router();
const { User, Product } = require("../models");
const withAuth = require("../utils/auth");

//Render profile if logged in. 
router.get('/', withAuth, async (req, res) =>{
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes:{ exclude: [`password`] }, 
        include: [{ model: Product }]
      })
      const user = userData.get({ plain: true });
      //We need to change growerview waiting on handlebars
      //put a pin on this and we'll address it later
      console.log('AAAAAAAAAAAAA', user);
      // if (user) {
        console.log("hi there");
        res.render('growerProfile', {
          ...user,
          logged_in: true
      })  
      // } else {
      // //   res.render(`notgrowerview`, {
      // //     ...user,
      // //     logged_in: true
      // // })  
      // console.log('didnt work');
      // }
    } catch (error) {
      res.status(500).json(error)
    }
})

//Add a product
router.post(`/`, withAuth, async (req, res) =>{
  try {
    const newProduct = await Product.create({
      ...req.body,
      user_id: req.session.user_id
    })
    res.status(200).json(newProduct)
  } catch (error) {
    res.status(500).json(error)
  }
})

//Delete product
router.delete(`/:id`, withAuth, async(req, res) =>{
  try {
    const productData = await Product.destroy({
      where:{id: req.params.id}
    })
    if(!productData){
      res.status(404).json({ message: `No product by that name was found` })
      return
    }
    res.status(200).json(productData)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;