import connectDB from '../../lib/mongodb'

export default async function handler(req, res) {
	try {
		console.log(req);
		res.status(201);
	} catch (err) {
		res.status(400);
	}    
}