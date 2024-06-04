"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db = {};
let idCounter = 1;
const port = 80;
function main() {
    const app = (0, express_1.default)();
    app.listen(port, () => {
        console.log(`starting server on port ${port}`);
    });
}
