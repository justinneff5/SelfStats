import axios from 'axios';
import React, { useState } from 'react';

export default function DatapointForm() {
	const [energy, setEnergy] = useState('');
	const [happy, setHappy] = useState('');
	const [content, setContent] = useState('');
	const [optimism, setOptimism] = useState('');
	const [bored, setBored] = useState('');
	const [stressed, setStressed] = useState('');
	const [depressed, setDepressed] = useState('');
	const [detatched, setDetatched] = useState('');
	const [clearheaded, setClearheaded] = useState('');
	const [stability, setStability] = useState('');
	const [empathy, setEmpathy] = useState('');
	const [impulsivity, setImpulsivity] = useState('');
	const [confidence, setConfidence] = useState('');
	const [contemplative, setContemplative] = useState('');

	const [healthy, setHealthy] = useState('');

	const [paceOfTime, setPaceOfTime] = useState('');

	const [tasks, setTasks] = useState('');

	const [food, setFood] = useState('');
	const [water, setWater] = useState('');
	const [drink, setDrink] = useState('');
	const [poop, setPoop] = useState('');
	const [sex, setSex] = useState('');
	const [drugs, setDrugs] = useState('');

	const [exercise, setExercise] = useState('');

	const [timeOutside, setTimeOutside] = useState(null);
	const [screenTime, setScreenTime] = useState(null);
	const [spending, setSpending] = useState(null);
	const [notableEvents, setNotableEvents] = useState(null);
	const [media, setMedia] = useState('');

	const inputCss =
		'w-1/3 h-auto bg-gray-200 border border-black rounded-md flex-auto pl-1 focus:bg-gray-100 text-black';
	const wrapperCss = 'w-auto h-auto flex px-2';
	const labelCss = 'w-2/3 flex-auto text-black';
	const buttonCss =
		'w-1/2 h-8 bg-gray-100 mr-4 rounded-md transform hover:scale-102 text-green-100';

	function makeDatapoint() {
		return {
			energy: energy,
			happiness: happy,
			content: content,
			optimism: optimism,
			bored: bored,
			stressed: stressed,
			depression: depressed,
			detached: detatched,
			clearheaded: clearheaded,
			stability: stability,
			empathy: empathy,
			impulsivity: impulsivity,
			confidence: confidence,
			contemplative: contemplative,
			health: healthy,
			pace_of_time: paceOfTime,
			tasks: tasks,
			food: food,
			water: water,
			drink: drink,
			poop: poop,
			sex: sex,
			drug_use: drugs,
			exercise: exercise,
			time_outside: timeOutside,
			screen_time: screenTime,
			spending: spending,
			notable_events: notableEvents,
			media: media,
		};
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className="h-full w-full bg-green-400 pt-6">
			<form>
				//* grid for 1-10s*/
				<div className="grid grid-cols-4 grid-rows-4 gap-4 p-2">
					<div className={wrapperCss}>
						<div className={labelCss}>Energy:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={energy}
							onChange={(e) => setEnergy(e.target.value)}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Happy:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={happy}
							onChange={(e) => setHappy(e.target.value)}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Content:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Energy:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={energy}
							onChange={(e) => setEnergy(e.target.value)}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Optimism:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={optimism}
							onChange={(e) => setOptimism(e.target.value)}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Bored:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={bored}
							onChange={(e) => setBored(e.target.value)}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Stressed:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={stressed}
							onChange={(e) => setStressed(e.target.value)}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Depressed:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={depressed}
							onChange={(e) =>
								setDepressed(e.target.value)
							}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Detatched:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={detatched}
							onChange={(e) =>
								setDetatched(e.target.value)
							}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Clearheaded:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={clearheaded}
							onChange={(e) =>
								setClearheaded(e.target.value)
							}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Stability:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={stability}
							onChange={(e) =>
								setStability(e.target.value)
							}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Empathy:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={empathy}
							onChange={(e) => setEmpathy(e.target.value)}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Impulsivity:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={impulsivity}
							onChange={(e) =>
								setImpulsivity(e.target.value)
							}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Confidence:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={confidence}
							onChange={(e) =>
								setConfidence(e.target.value)
							}
						/>
					</div>
					<div className={wrapperCss}>
						<div className={labelCss}>Contemplation:</div>
						<input
							type="text"
							className={inputCss}
							placeholder="1-10"
							value={contemplative}
							onChange={(e) =>
								setContemplative(e.target.value)
							}
						/>
					</div>
					<div className={wrapperCss}>
						<button className={`${buttonCss} bg-red-500`}>
							Clear
						</button>
						<button
							className={`${buttonCss} bg-green-700`}
							type="submit">
							Submit
						</button>
					</div>
				</div>
				//* end grid div */
			</form>
		</div>
	);
}
