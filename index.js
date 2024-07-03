#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let currencyValue = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1
};
let ans = await inquirer_1.default.prompt([{
        type: "list",
        name: "from",
        message: "converting from",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "list",
        name: "to",
        message: "converting to",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "number",
        name: "amount",
        message: "your amount to convert:"
    }
]);
console.log(currencyValue[ans.to] / currencyValue[ans.from] * ans.amount);
