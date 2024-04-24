// controllers/wishlistController.js

const { Wishlist, sequelize } = require('../models');

const WishlistController = {
  async getWishlist(req, res) {
    try {
      const wishlist = await Wishlist.findAll();
      res.json(wishlist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async addToWishlist(req,res){
    console.log(req.body)
    const{userId , productId}=req.body;
    try{
      const transaction=await sequelize.transaction();

      try{
        const existingItem= await Wishlist.findOne({
          where :{user_id:userId,product_id:productId},
          transaction
      });

        if(existingItem){
          await transaction.rollback();
          return res.json({message:'product already in the wishlist'});

        }
        //if not then add to wishlist
        await Wishlist.create({ user_id: userId, product_id: productId }, { transaction });
        //commit if all goes well above   
        await transaction.commit();

        res.json({message:'order created successfully'});
      }catch(error){
        await transaction.rollback();
        throw error;
      }
    }catch(error){
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });

    }
  },
  async removeFromWishlist(req, res) {
    const wishlistId = req.params.wishlistId;
    try {
      const wishlistItem = await Wishlist.findByPk(wishlistId);
      if (!wishlistItem) {
        return res.status(404).json({ error: 'Wishlist item not found' });
      }
      await wishlistItem.destroy();
      res.json({ message: 'Wishlist item removed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Add other wishlist-related controller functions as needed
};

module.exports = WishlistController;
