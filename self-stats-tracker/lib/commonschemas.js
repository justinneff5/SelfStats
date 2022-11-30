import mongoose from 'mongoose';
const { Schema } = mongoose;

const energySchema = new Schema({
    level: { type: Number },
    time: { type: Date, default: Date.now }
});

const happinessSchema = new Schema({
    level: { type: Number },
    time: { type: Date, default: Date.now }
});

const contentSchema = new Schema({
    level: { type: Number },
    time: { type: Date, default: Date.now }
});

const satisfiedSchema = new Schema({
    level: { type: Number },
    time: { type: Date, default: Date.now }
})

const boredSchema = new Schema({
    level: { type: Number },
    time: { type: Date, default: Date.now }
});

const stressedSchema = new Schema({
    level: { type: Number },
    time: { type: Date, default: Date.now}
})

const depressionSchema = new Schema({
    level: { type: Number },
    time: { type: Date, default: Date.now }
});

const detachedSchema = new Schema({
    level: { type: Number },
    time: { type: Date, default: Date.now }
});

const clearheadedSchema = new Schema({
    level: { type: Number },
    time: { type: Date, default: Date.now }
});

//** MOOD LEVEL REPLACES ALL ABOVE */
const moodLevelSchema = new Schema({
    level: { type: Number },
    time: { type: Date, default: Date.now }
});

const paceOfTimeSchema = new Schema({
    pace: { type: Number }, //scale 1-5
    time: { type: Date, default: Date.now }
});

const hoursOnTaskSchema = new Schema({
    hours: { type: Number },
    time: { type: Date, default: Date.now } //time endpoints since last response
});

const foodSchema = new Schema({
    foods: {
        type: [String],
        default: [],
    },
    time: {
        type: Date, default: Date.now
    },
    estimated_calories: { type: Number, default: 0 } //soon call some api? 
});

const waterSchema = new Schema({
    amount: { type: Number }, //in glasses
    time: { type: Date, default: Date.now }
});

const poopSchema = new Schema({
    time_spent: { type: Number },
    time: { type: Date, default: Date.now },
    quality: { type: Number } //10
});

const drugUseSchema = new Schema({
    type: {type: String},
    consumed: { type: Boolean },
    amount: {
        type: Number, default: function () {
            if (!this.consumed) {
                return 0;
            } else if (this.type === 'adderall') {
                return 30;
            } else if (this.type === 'lamitrogine') {
                return 200;
            } else { return null; }
        }, //contextual per use -- adderall, default 30mg xr
        time: { type: Date, default: Date.now }
    }
});

const sexSchema = new Schema({
    lasted: { type: Number, default: -1 }, // -1 = didn't happen, 0 = didn't come, in minutes
    solo: { type: Boolean },
    porn: { type: Boolean },
    details: { type: String, default: ""}
});

const exerciseSchema = new Schema({
    intensity: { type: Number }, //1-5
    amount: { type: Number }, //minutes
    quality: { type: Number }, //1-10, feeling after
    time: { type: Date, default: Date.now }, //specify for earlier
    type: { type: String, default: "walking" }
});

const timeOutsideSchema = new Schema({
    amount: { type: Number }, //minutes
    time: { type: Date, default: Date.now },
    sunny: {type: Number }, //1 full overcast, 3 medium cloudy, 5 no clouds
});

const spendingSchema = new Schema({
    amount: { type: Number }, // rounded to whole
    item: { type: String },
    time: {type: Date, default: Date.now}
})


function MakeSchemaDict() {
    const schemas = {
        moodLevelSchema: moodLevelSchema,
        energySchema: energySchema,
        happinessSchema: happinessSchema,
        contentSchema: contentSchema,
        satisfiedSchema: satisfiedSchema,
        boredSchema: boredSchema,
        stressedSchema: stressedSchema,
        depressionSchema: depressionSchema,
        detachedSchema: detachedSchema,
        clearheadedSchema: clearheadedSchema,
        paceOfTimeSchema: paceOfTimeSchema,
        hoursOnTaskSchema: hoursOnTaskSchema,
        foodSchema: foodSchema,
        waterSchema: waterSchema,
        poopSchema: poopSchema,
        drugUseSchema: drugUseSchema,
        sexSchema: sexSchema,
        exerciseSchema: exerciseSchema,
        timeOutsideSchema: timeOutsideSchema,
        spendingSchema: spendingSchema,
    }
    return schemas;
}


export default MakeSchemaDict;

// possibly necessary - e.g., const EnergySchema = mongoose.Schema({ energySchema })




