import mongoose from "mongoose";

// Replace this with your MongoDB Atlas connection string
const MONGO_URI =
  "mongodb+srv://premium_capital_db_user:NfYLSeOGqbRJ5j0m@cluster0.bsl7hmb.mongodb.net/?appName=Cluster0";

// Define a minimal User schema
const userSchema = new mongoose.Schema({
  savedPassword: { type: String },
});

const User = mongoose.model("User", userSchema);

async function backfillSavedPassword() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    const result = await User.updateMany(
      { savedPassword: { $exists: false } }, // Only update users missing the field
      { $set: { savedPassword: "12345" } }
    );

    console.log(`Updated ${result.modifiedCount} users`);
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error("Error:", err);
  }
}

// Run the script
backfillSavedPassword();
