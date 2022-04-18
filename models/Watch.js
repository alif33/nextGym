import mongoose from 'mongoose';

const watchSchema = new mongoose.Schema(
    {
        videoUri: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Watch || mongoose.model('Watch', watchSchema);

