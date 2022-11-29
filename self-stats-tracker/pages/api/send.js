import connectDB from '../../lib/mongodb';
const twilioSID = process.env.TWILIO_SID;
const twilioAuth = process.env.TWILIO_TOKEN;
const client = require('twilio')(twilioSID, twilioAuth);

export default async function handler(req, res) {
	try {
		await client.messages.create({
			body: 'this is a test message',
			from: process.env.TWILIO_PHONE,
			to: process.env.MY_PHONE
		}).then(msg => res.status(201).json({ success: true, body: msg.sid, message: "nice" }));
	} catch (err) {
		res.status(400).json({ success: false, body: err, message: 'bad request' });
	}
}