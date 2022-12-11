import mongoose from 'mongoose';
import MakeSchemaDict from '../lib/commonschemas';
const model_name = 'Datapoint';
const { Schema } = mongoose;

const schemas = MakeSchemaDict();

const datapointSchema = new Schema({
	//mood stuff
	energy: { type: schemas.moodLevelSchema },
	happiness: { type: schemas.moodLevelSchema },
	content: { type: schemas.moodLevelSchema },
	optimism: { type: schemas.moodLevelSchema },
	bored: { type: schemas.moodLevelSchema },
	stressed: { type: schemas.moodLevelSchema },
	depression: { type: schemas.moodLevelSchema },
	detached: { type: schemas.moodLevelSchema },
	clearheaded: { type: schemas.moodLevelSchema },
	stability: { type: schemas.moodLevelSchema },
	empathy: { type: schemas.moodLevelSchema },
	impulsivity: { type: schemas.moodLevelSchema },
	confidence: { type: schemas.moodLevelSchema },
	contemplative: { type: schemas.moodLevelSchema },

	//time sense
	pace_of_time: { type: schemas.paceOfTimeSchema },

	//hours on, quality, type, focus
	tasks: { type: [schemas.taskSchema] },

	//consumption
	food: { type: schemas.foodSchema },
	water: { type: schemas.waterSchema },
	drink: { type: [schemas.drinkSchema] },
	drug_use: { type: [schemas.drugUseSchema] },

	//other functions
	poop: { type: schemas.poopSchema },
	sex: { type: schemas.sexSchema },
	exercise: { type: schemas.exerciseSchema },

	time_outside: { type: schemas.timeOutsideSchema },
	screen_time: { type: schemas.screenTimeSchema },
	spending: { type: [schemas.spendingSchema] },
	notable_events: { type: [schemas.notableEventsSchema] },
	health: { type: schemas.healthSchema },
	media: { type: [schemas.mediaSchema] },
	//time_sent: { type: Date, default: Date.now },

	//of datapoint
	time: {
		type: Date,
		default: Date.now,
	},
});

let Datapoint;
if (!modelAlreadyDeclared()) {
	Datapoint = mongoose.model(model_name, datapointSchema, 'Datapoint');
}

function modelAlreadyDeclared() {
	try {
		mongoose.model(model_name); //throws err if model not defined
		return true;
	} catch (err) {
		return false;
	}
}

module.exports = Datapoint;
