import mongoose from 'mongoose';

const bodypartSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.BodyPart || mongoose.model('BodyPart', bodypartSchema);