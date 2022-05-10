import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Customer', 
            required: true 
        },
        products: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Product', 
            required: true 
        }],
        subTotal: {
            type: Number,
            required: true 
        },
        total: {
            type: Number,
            required: true 
        }
    },
    { timestamps: true }
);

export default mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

