import {v2 as cloudinaryV2} from "cloudinary";

const cloudinaryConfig=cloudinaryV2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
  })
  

  export default cloudinaryConfig
  