import nc from 'next-connect';
import Player from '../../../../models/Player';
import db from '../../../../utils/db';


const handler = nc();

handler.put(async (req, res) => {

    const arr = {
        name: 'ismail',
        age: 65
    }

    if(req.query?._id){
        await db.connect();
        const update = await Player.updateOne(
            { "_id": req.query._id }, // query matching , refId should be "ObjectId" type
            { $push: { "posts": arr } } //single object will be pushed to attachemnts
           )

        if(update.modifiedCount){
            await db.disconnect();
            res.send(p)
        }
    }
});

export default handler;