
const User = require("../models/userSchema")

const userController =  (req,res)=>{
const newUser = new User({
    name:req.body.name,
    email:req.body.email,
    number:req.body.number,
    file:req.body.file,
})
newUser.save()
.then(() => res.json({ success: true }))
        .catch(err => res.json({ success: false, error: err.message }));
}



// display api 

const userDisplay = async (req, res) => {
    try {
        const items = await User.find();
        res.json(items);
      } catch (err) {
        res.status(500).send(err);
      }
}

// delete api 

const userDelete = async (req, res) => {
  try {
    const item = await User.findById(req.params.id);
   
    if (!item) {
      return res.status(404).send('Item not found');
    }

    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(item.file);

    // Delete item from MongoDB
    await item.remove();
    res.send('Item and associated image deleted successfully');
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {userController,userDisplay,userDelete};