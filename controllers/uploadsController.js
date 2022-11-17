
const path = require('path')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const cloudinary = require('cloudinary').v2

//for local uploads
const uploadProductImageLocal = async (req, res) => {
if(!req.files){
     throw new CustomError.BadRequestError('No File Upload')
}

     const productImage = req.files.image;

     if(!productImage.mimetype.startsWith('image')){
          throw new CustomError.BadRequestError('Please upload Image')
     }

     const maxSize = 1000;

     if(productImage.size > maxSize){
          throw new CustomError.BadRequestError('Please upload image smaller 1KB');
     }

     const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`);

await productImage.mv(imagePath)
     return res.status(StatusCodes.OK).json({image:{src: `/uploads/${productImage.name}`}});
};

//cloud uploads
const uploadProductImage = async (req, res) => {
const result = await cloudinary.uploader.upload(
     req.files.image.tempFilePath,
      {
          use_filename: true, 
          folder: 'file-upload',
     }
     );
     console.log(result)
}


module.exports = { uploadProductImage, };