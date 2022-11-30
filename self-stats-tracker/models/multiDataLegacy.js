// import mongoose from 'mongoose';
// import MakeSchemaDict from '../lib/commonschemas';
// const model_name = 'Datapoint';
// const { Schema } = mongoose;

// const schemas = MakeSchemaDict();

// const DatapointSchema = new Schema({
// 	energy: {
// 		type: Number,
// 	},
// 	anxiety: {
// 		type: Number,
// 	},
// 	impulsivity: {
// 		type: Number,
// 	},
// 	depression: {
// 		type: Number,
// 	},
// 	hoursOnTask: { 

// 	},
// 	shower: { type: Boolean },
// 	food: { type: [String]},
// 	time: {
// 		type: Date,
// 		default: new Date()
// 	}
// });

// let Datapoint;
// if (!modelAlreadyDeclared()) {
// 	Datapoint = mongoose.model(model_name, DatapointSchema, 'Datapoint');
// }

// function modelAlreadyDeclared() {
// 	try {
// 		mongoose.model(model_name); //throws err if model not defined
// 		return true;
// 	}
// 	catch (err) {
// 		return false;
// 	}
// }

// module.exports = Datapoint;