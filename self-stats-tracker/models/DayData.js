import mongoose from 'mongoose';
const model_name = 'DayData';
const { Schema } = mongoose;
const Datapoint = mongoose.model('Datapoint');
import MakeSchemaDict from '../lib/commonschemas';

const schemas = MakeSchemaDict();

const dayDataSchema = new Schema({
    datapoints: { type: [Datapoint.schema], default: [] },
    date: {
        type: Date,
        default: function () {
            return new Date().toISOString().slice(0, 10)
        }
    },
    sleep: {
        sleepTime: { type: Number},
        wakeTime: { type: Number },
        quality: { type: Number },
    },
    out_of_bed: { 
        time: { type: Number },
    },
    task_satisfaction: { type: Number },
    self_satisfaction: { type: Number },
    regret: { 
        level: { type: Number }, //1-10
        details: { type: String }
    },
    weather: {
        sunny: { type: Number }, // 1 - 5
        temp: { type: Number },
        rain: { type: Number, default: 0 },
        snow: { type: Number, default: 0 },
    },
    shower: {
        type: [schemas.showerSchema]
    },
    reflection: { type: String, default: "" }
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