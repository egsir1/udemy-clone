import mongoose, { ConnectOptions } from 'mongoose';

export const connectToDatabase = async () => {
	mongoose.set('strictQuery', true);
	console.log('********', process.env.MONGODB_URI);

	if (!process.env.MONGODB_URI) {
		return console.log('MISSING MONGODB_URL');
	}

	try {
		const options: ConnectOptions = {
			autoCreate: true,
		};
		await mongoose.connect(process.env.MONGODB_URI, options);

		console.log('MONGODB connected!');
	} catch (error) {
		console.log('MongoDB connection failed');
	}
};
