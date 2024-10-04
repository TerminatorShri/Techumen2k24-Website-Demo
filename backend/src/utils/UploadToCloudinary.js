import cloudinary from "../db/CloudinaryConfig.js";
import fs from "fs";

const uploadImageToCloudinary = async (buffer) => {
  try{
    const result = await new Promise((resolve) => {
      cloudinary.uploader
          .upload_stream({
              folder:"myimage",
              resource_type:"image"
          },(error, uploadResult) => {
              if(error){
                  console.log(error);
                  console.log("error in cloudinary upload")
              }
              return resolve(uploadResult);
          })
          .end(buffer);
  });
    return result.secure_url;
  }catch(err){
    console.error("Error uploading image:", err);
    return null;
  }
};

export { uploadImageToCloudinary };
