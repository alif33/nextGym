import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        phone: {
            type: String,
            trim: true
        },
        country: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        adress: {
            type: String,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);

