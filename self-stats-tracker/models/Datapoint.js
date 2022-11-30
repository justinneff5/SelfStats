import mongoose from 'mongoose';
import MakeSchemaDict from '../lib/commonschemas';
const model_name = 'Datapoint';
const { Schema } = mongoose;

const schemas = MakeSchemaDict();

const datapointSchema = new Schema({
    energy: { type: schemas.moodLevelSchema },
    happiness: { type: schemas.moodLevelSchema },
    content: { type: schemas.moodLevelSchema },
    satisfied: { type: schemas.moodLevelSchema },
    bored: { type: schemas.moodLevelSchema },
    stressed: { type: schemas.moodLevelSchema },
    depression: { type: schemas.moodLevelSchema },
    detached: { type: schemas.moodLevelSchema },
    clearheaded: { type: schemas.moodLevelSchema },
    pace_of_time: { type: schemas.paceOfTimeSchema },
    hours_on_task: { type: schemas.hoursOnTaskSchema },
    food: { type: schemas.foodSchema },
    water: { type: schemas.waterSchema },
    poop: { type: schemas.poopSchema },
    drug_use: { type: [schemas.drugUseSchema] },
    sex: { type: schemas.sexSchema },
    exercise: { type: schemas.exerciseSchema },
    time_outside: { type: schemas.timeOutsideSchema },
    spending: { type: schemas.spendingSchema },
	time: {
		type: Date,
		default: Date.now
	}
});

let Datapoint;
if (!modelAlreadyDeclared()) {
	Datapoint = mongoose.model(model_name, datapointSchema, 'Datapoint');
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

module.exports = Datapoint;