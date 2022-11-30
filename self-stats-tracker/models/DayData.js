import mongoose from 'mongoose';
const model_name = 'DayData';
const { Schema } = mongoose;
const Datapoint = mongoose.model('Datapoint');

const dayDataSchema = new Schema({
    datapoints: { type: [Datapoint.schema], default: [] },
    date: { type: Date, default: Date.now },
    sleep: {
        sleepTime: { type: Number},
        wakeTime: { type: Number },
        hours: { type: Number },
        quality: { type: Number },
    },
    task_satisfaction: { type: Number },
    self_satisfaction: { type: Number },
    regret: { type: Number },
    optimism: { type: Number },
});

let DayData;
if (!modelAlreadyDeclared()) {
	DayData = mongoose.model(model_name, dayDataSchema, 'DayData');
}

function modelAlreadyDeclared() {
	try {
		mongoose.model(model_name); //throws err if model not defined
		return true;
	}
	catch (err) {
		return false;
	}
}

module.exports = DayData;