import mongoose from 'mongoose';

const osSchema = new mongoose.Schema(
    {
        
    },
    { timestamps: true }
);

export default mongoose.models.Member || mongoose.model('Member', osSchema);