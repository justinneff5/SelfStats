// import mongoose from 'mongoose';
// const model_name = 'FullData';
// const { Schema } = mongoose;

// const fullDataSchema = new Schema({
// 	energy: {
// 		levels: [Number],
// 		times: [Date],
// 	},
// 	anxiety: {
// 		levels: [Number],
// 		times: [Date],
// 	},
// 	impulsivity: {
// 		levels: [Number],
// 		times: [Date],
// 	},
// 	depression: {
// 		levels: [Number],
// 		times: [Date],
// 	},
// 	shower: { 
// 		times: { type: [Number] },
// 		lengths: {type: [Number]}
// 	},
// 	poop: {
// 		times: [{ 
// 			time: { type: Number },
// 			timeSpent: {type: Number}
// 		}],
// 		qualities: { type: [Number] },
// 	},
// 	water: { 
// 		amount: { type: Number }, //in glasses
// 	},
// 	weed: {
// 		quantity: { //in grams approx.
// 			type: Number,
// 		},
// 		times: { type: Number, },
// 		time: { type: Number },

// 	},
// 	drugUse: {
// 		alcohol: { 
// 			consumed: { type: Boolean },
// 		},
// 		adderall: {type: Boolean},
// 		nicotine: { type: [Boolean, Number] },
// 		shrooms: { type: [Boolean, Number], default: [false, 0] },
// 		lsd: { type: [Boolean, Number], default: [false, 0] },
// 	},
// 	date: { type: String, default: new Date().toISOString().slice(0,10)}
// });

// let FullData;
// if (!modelAlreadyDeclared()) {
// 	FullData = mongoose.model(model_name, fullDataSchema, 'FullData');
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