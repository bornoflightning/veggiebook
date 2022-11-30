// add, delete, and post requests are the only difference (delete product, add more to product)
const router = require("express").Router();
const { User, Product } = require("../models");
const withAuth = require("../utils/auth");
router.get(`/profile`, withAuth, async (req, res) =>{
    try {
      const userData = await User.findByPk(req.section.user_id, {
        attributes:{ exclude: [`password`] }, 
        include: [{ model: Product }]
      })
      const user = userData.get({ plain: true });
      //We need to change growerview waiting on handlebars
      //put a pin on this and we'll address it later
      if (user) {
        res.render(`growerview`, {
          ...user,
          logged_in: true
      })  
      } else {
        res.render(`notgrowerview`, {
          ...user,
          logged_in: true
      })  
      }
    } catch (error) {
      res.status(500).json(error)
    }
})
router.post(`/profile`, withAuth, async (req, res) =>{
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

//growerUpdate is temporary just waiting for the frontend java we're getting it from


//Add post request


//Delete post request
router.delete(`/profile/:id`, withAuth, async(req, res) =>{
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
//
module.exports = router;