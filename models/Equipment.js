import mongoose from 'mongoose';

const equipmentSchema = new mongoose.Schema(
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

export default mongoose.models.Equipment || mongoose.model('Equipment', equipmentSchema);