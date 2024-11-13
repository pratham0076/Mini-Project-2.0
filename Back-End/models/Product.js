const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    rentalPrice: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    category: String,
    images: [String],
    sizes: [String],
    reviews: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: Number,
      comment: String
    }]
  });