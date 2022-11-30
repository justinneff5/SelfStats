import connectDB from '../../lib/mongodb'

//API Workflow Idea
// dynamic api w/ question id, e.g. receive/<ind>
// call send/<++ind> again w/ prompt[ind]
// somehow need to receive api correctly, should work fine
// once msg body caught in receive, need to break it down into datapoint info
// how to handle updating datapoint? need id? <mmddyy> as req query?

export default async function handler(req, res) {
	try {
		console.log(req);
		res.status(201);
	} catch (err) {
		res.status(400);
	}    
}