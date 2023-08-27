import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "proizvodi",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "korisnicis",
    },
    status: {
      type: String,
      default: "Nije u obradi",
      enum: ["Nije u obradi", "obrada", "isporuceno", "dostavljeno", "odbijeno"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);