import Picker from './picker'
import {getAssetPrice} from './utils';

export default class PickerReg {
	public pickers: Picker[];
	public cap: number;
	public lastPrice: number;
	private uri: string;

	constructor(cap: number, uri: string) {
		this.cap = cap;
		this.pickers = [new Picker(this.cap)];
		this.lastPrice = getAssetPrice(uri);
		this.pickers[0].update(0);
		this.uri = uri;
	}

	update() {
		if (this.cap > this.pickers.length) {
			this.pickers.push(new Picker(this.cap));
		}

		const price = getAssetPrice(this.uri);
		console.log(price);
		for (var i = this.pickers.length - 1; i >= 0; i--) {
			this.updateElement(i, price);
		}
		this.lastPrice = price;
	}

	updateElement(index: number, price: number) {
		const variation = price - this.lastPrice;
		if(this.pickers[index].update(variation) === 2) {
			this.pickers[index] = new Picker(this.cap);
			this.pickers[index].update(variation);
		}
	}
}