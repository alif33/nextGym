import mongoose from 'mongoose';

const AddPlanSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        monthlyPrice: {
            type: Number,
            required: true
        },
        annuallyPrice: {
            type: Number,
            required: true
        },
        breakfast: {
            type: Boolean,
            required: true
        },
        dinner: {
            type: Boolean,
            required: true
        },
        lunch: {
            type: Boolean,
            required: true
        },
        extra: {
            type: Boolean,
            required: true
        },
     
        image: {
            type: String
        }
        
    },
    { timestamps: true }
);

export default mongoose.models.AddPlan || mongoose.model('AddPlan', AddPlanSchema);

