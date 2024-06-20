import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://lalit9025:Lalit9025@cluster0.enuowoj.mongodb.net/Social", {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		console.log(process.env.MONGO_URI)
		process.exit(1);
	}
};

export default connectDB;
