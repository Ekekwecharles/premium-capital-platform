import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI inside .env.local");
}

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = !!db.connections[0].readyState;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

// useraname: public_premium_capital_db_user
// password: nuNwvzq86HHZ5qMg
// mongodb+srv://public_premium_capital_db_user:nuNwvzq86HHZ5qMg@cluster0.3c13zv3.mongodb.net/?appName=Cluster0
