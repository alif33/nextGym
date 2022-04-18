import nc from 'next-connect';
import Watch from '../../../models/Watch';
import { isAuth } from '../../../utils/auth';
import db from '../../../utils/db';

const handler = nc();

// handler.use(isAuth);

handler.post(async (req, res) => {
    const { videoUri } = req.body;
    await db.connect();

    const watch = new Watch({
        videoUri
    });
    if(await watch.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Video added in watch list'
        });
    }
});


handler.delete(async (req, res) => {
    if(req.query?._id){
        Watch.find({ _id: req.query._id  }).remove(()=>{
            res.send({
                success: true,
                message: 'Video removed successfully.'
            });
        });
    }
});


export default handler;
