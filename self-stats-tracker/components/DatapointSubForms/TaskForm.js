import { useState } from 'react';
export default function TaskForm({}) {
	const [name, setName] = useState('');
	const [hoursDone, setHoursDone] = useState(0);
	const [completionQuality, setCompletionQuality] = useState(0);
	const [focusQuality, setFocusQuality] = useState(0);
	const [otherDetails, setOtherDetails] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		// Add code here to submit the form to your backend or wherever you want to store the data
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
			</label>
			<label>
				Hours Done:
				<input
					type="number"
					name="hoursDone"
					value={hoursDone}
					onChange={(event) => setHoursDone(event.target.value)}
				/>
			</label>
			<label>
				Completion Quality:
				<input
					type="number"
					name="completionQuality"
					value={completionQuality}
					onChange={(event) =>
						setCompletionQuality(event.target.value)
					}
				/>
			</label>
			<label>
				Focus Quality:
				<input
					type="number"
					name="focusQuality"
					value={focusQuality}
					onChange={(event) =>
						setFocusQuality(event.target.value)
					}
				/>
			</label>
			<label>
				Other Details:
				<input
					type="text"
					name="otherDetails"
					value={otherDetails}
					onChange={(event) =>
						setOtherDetails(event.target.value)
					}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}
