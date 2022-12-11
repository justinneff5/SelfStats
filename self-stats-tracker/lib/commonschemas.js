import mongoose from 'mongoose';
const { Schema } = mongoose;

// const energySchema = new Schema({
//     level: { type: Number },
//     time: { type: Date, default: Date.now }
// });

// const happinessSchema = new Schema({
//     level: { type: Number },
//     time: { type: Date, default: Date.now }
// });

// const contentSchema = new Schema({
//     level: { type: Number },
//     time: { type: Date, default: Date.now }
// });

// const satisfiedSchema = new Schema({
//     level: { type: Number },
//     time: { type: Date, default: Date.now }
// })

// const boredSchema = new Schema({
//     level: { type: Number },
//     time: { type: Date, default: Date.now }
// });

// const stressedSchema = new Schema({
//     level: { type: Number },
//     time: { type: Date, default: Date.now}
// })

// const depressionSchema = new Schema({
//     level: { type: Number },
//     time: { type: Date, default: Date.now }
// });

// const detachedSchema = new Schema({
//     level: { type: Number },
//     time: { type: Date, default: Date.now }
// });

// const clearheadedSchema = new Schema({
//     level: { type: Number },
//     time: { type: Date, default: Date.now }
// });

//** MOOD LEVEL REPLACES ALL ABOVE */
const moodLevelSchema = new Schema({
	level: { type: Number },
});

const paceOfTimeSchema = new Schema({
	pace: { type: Number }, //scale 1-10
});

const taskSchema = new Schema({
	name: { type: String },
	hours: { type: Number },
	completion_quality: { type: Number },
	focus_quality: { type: Number },
	details: { type: String, default: '' }, //for any more details
});

const foodSchema = new Schema({
	foods: {
		type: [String],
		default: [],
	},
	time: {
		type: Number,
	},
	estimated_calories: { type: Number, default: 0 }, //soon call some api?
});

const waterSchema = new Schema({
	amount: { type: Number }, //in glasses
});

//e.g. coffee, soda
const drinkSchema = new Schema({
	type: { type: String },
	amount: { type: Number },
});

const poopSchema = new Schema({
	time_spent: { type: Number },
	time: { type: Number },
	quality: { type: Number }, //10
});

const showerSchema = new Schema({
	time: { type: Number },
	length: { type: Number },
	quality: { type: Number },
	washed_hair: { type: Boolean },
});

const drugUseSchema = new Schema({
	type: { type: String },
	amount: {
		type: Number, //contextual per use -- adderall, default 30mg xr
	},
	time: { type: Number },
});

const sexSchema = new Schema({
	lasted: { type: Number, default: -1 }, // -1 = didn't happen, 0 = didn't come, in minutes
	solo: { type: Boolean },
	porn_used: { type: Boolean },
	details: { type: String, default: '' },
	time: { type: Number },
});

const exerciseSchema = new Schema({
	intensity: { type: Number }, //1-5
	minutes: { type: Number }, //minutes
	quality: { type: Number }, //1-10, feeling after
	time: { type: Number }, //specify for earlier
	type: { type: String },
});

const timeOutsideSchema = new Schema({
	amount: { type: Number }, //minutes
	time: { type: Number },
});

const spendingSchema = new Schema({
	amount: { type: Number }, // rounded to whole
	item: { type: String },
	time: { type: Number },
});

const screenTimeSchema = new Schema({
	hours: { type: Number },
	quality: { type: Number },
});

const notableEventSchema = new Schema({
	event: { type: String },
	quality: { type: Number }, //1-5
	details: { type: String, default: '' },
	time: { type: Number },
});

const healthSchema = new Schema({
	illness_level: { type: Number }, //0 is fully healthy
	illness_class: { type: String, default: '' },
	symptoms: { type: [String], default: [] },
});

const medicationSchema = new Schema({
	medication: { type: String },
	taken: { type: Boolean },
	time_taken: { type: Number },
});

const mediaSchema = new Schema({
	type: { type: String },
	name: { type: String },
	thoughts: { type: String, default: '' },
});

function MakeSchemaDict() {
	const schemas = {
		moodLevelSchema: moodLevelSchema,
		// energySchema: energySchema,
		// happinessSchema: happinessSchema,
		// contentSchema: contentSchema,
		// optimismSchema: satisfiedSchema,
		// boredSchema: boredSchema,
		// stressedSchema: stressedSchema,
		// depressionSchema: depressionSchema,
		// detachedSchema: detachedSchema,
		// clearheadedSchema: clearheadedSchema,
		paceOfTimeSchema: paceOfTimeSchema,
		taskSchema: taskSchema,
		foodSchema: foodSchema,
		waterSchema: waterSchema,
		drinkSchema: drinkSchema,
		poopSchema: poopSchema,
		showerSchema: showerSchema,
		drugUseSchema: drugUseSchema,
		sexSchema: sexSchema,
		exerciseSchema: exerciseSchema,
		timeOutsideSchema: timeOutsideSchema,
		spendingSchema: spendingSchema,
		screenTimeSchema: screenTimeSchema,
		notableEventSchema: notableEventSchema,
		healthSchema: healthSchema,
		medicationSchema: medicationSchema,
		mediaSchema: mediaSchema,
	};
	return schemas;
}

export default MakeSchemaDict;

// possibly necessary - e.g., const EnergySchema = mongoose.Schema({ energySchema })
