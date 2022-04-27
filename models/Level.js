import mongoose from 'mongoose';

const levelSchema = new mongoose.Schema(
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

export default mongoose.models.Level || mongoose.model('Level', levelSchema);