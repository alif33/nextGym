import multer from 'multer';
import nc from 'next-connect';
import Player from '../../../../models/Player';
import Post from '../../../../models/Post';
import { isAdmin } from '../../../../utils/auth';
import db from '../../../../utils/db';
import { onError } from '../../../../utils/error';

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });
  
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };
  
const handler = nc({ onError });
const upload = multer();
handler.use(isAdmin);

handler.post(async (req, res) => {

    const { title, league, playersName } = req.body;

    // return res.send(req.body);

    // const streamUpload = (req) => {
    //   return new Promise((resolve, reject) => {
    //     const stream = cloudinary.uploader.upload_stream((error, result) => {
    //       if (result) {
    //         resolve(result);
    //       } else {
    //         reject(error);
    //       }
    //     });
    //     streamifier.createReadStream(req.file.buffer).pipe(stream);
    //   });
    // };
    // const { url } = await streamUpload(req);




    await db.connect();
    const player = new Post({
      title, league, playersName
    });


    if(await player.save()){
      await db.disconnect();
      res.send({
          success: true,
          message: 'Post added successfully'
      })
    }
    

    // if(url){
        
        
    // }
});

handler.delete(async (req, res) => {
  if(req.query?._id){
      Player.find({ _id: req.query._id  }).deleteOne(()=>{
          res.send({
              success: true,
              message: 'Post deleted successfully'
          });
      });
  }
});

export default handler;
