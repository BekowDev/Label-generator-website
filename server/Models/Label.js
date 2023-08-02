import mongoose from "mongoose"

const Label = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    addedDate: { type: Date, default: Date.now },

    barcode: { type: String, required: true },
    sku: { type: String },
    color: { type: String },
    size: { type: String },
    name: { type: String },
    seller: { type: String },
    date: { type: String },
    country: { type: String },
    brand: { type: String },
    composition: { type: String },
    freeTitle: { type: String }
})

export default mongoose.model('Label', Label)