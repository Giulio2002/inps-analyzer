const express = require('express');
const process = require('process');
import * as path from 'path';
import {minute, second} from './lib/constant';
import PickerReg from './lib/pickerReg';

const port = process.env.PORT || 4200;

const app = express();
const cap = 7;
const eth_reg = new PickerReg(cap, 'https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD');
// viewed at http://localhost:4200
app.get('/', function(req: any, res: any) {
    res.sendFile(path.join(__dirname + '/dataset.json'));
});

setInterval(() => {
    eth_reg.update();
}, 5 * minute);

app.listen(4200);