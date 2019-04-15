const fs = require('fs');
import {XMLHttpRequest} from "xmlhttprequest";

export const getDataset = () => {
	return JSON.parse(fs.readFileSync("./dataset.json", "utf8"));
}

export const setDataset = (newDataset: any) => {
	fs.writeFileSync('./dataset.json', JSON.stringify(newDataset));
}

export const getAssetPrice = (uri: string) => {
	var request = new XMLHttpRequest();
	request.open('GET', uri, false);  // `false` makes the request synchronous
	request.send(null);
	const [priceObject] = JSON.parse(request.responseText);
	return parseFloat(priceObject.price_usd);
	
} // https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD