import {getDataset, setDataset} from './utils'

export default class Picker {
	private data: Number[];
	private outcome: Number;
	private cap: Number;

	constructor(cap) {
		this.cap = cap;
		this.outcome = -1;
		this.data = [];
	}

	update(variation: Number) {
		this.data.push(variation);
		if (this.cap === this.data.length) {
			this.outcome = variation >= 0? 1 : 0;
			this.save();
			return 2;
		}
		return 1;
	}

	save() {
		const dataset = getDataset();
		this.data.pop();
		dataset.data.push(this.data);
		dataset.target.push(this.outcome);
		console.log(dataset);
		setDataset(dataset);
	}
}