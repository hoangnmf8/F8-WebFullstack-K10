import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price_default: { type: Number, required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: { type: String },
    isHidden: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
    soldCount: { type: Number, default: 0 },
    stock_default: { type: Number, required: true },
    rate: { type: Number, default: 0 },
    attributes: [
      {
        attributeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Attribute",
          required: true,
        },
        valueId: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AttributeValue",
            required: true,
          },
        ],
      },
    ],
  },
  { timestamps: true, versionKey: false },
);

const Product = mongoose.model("Product", productSchema);
export default Product;
