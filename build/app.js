"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const payment_controller_1 = require("./controllers/payment-controller");
const dotenv = __importStar(require("dotenv"));
const payment_controller_2 = require("./controllers/payment-controller");
const morgan_1 = __importDefault(require("morgan"));
dotenv.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("tiny"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
const datab = mongoose_1.default
    .connect("mongodb://localhost:27017/payment")
    .then(() => console.log("connected to mongoDb"));
app.get("/", (req, res) => {
    res.send("josh");
});
// import app from "./app";
app.listen(5150, () => {
    console.log("listening on port 5150");
});
app.post("/initialize-payment", payment_controller_1.initializePayment);
app.get("/paymentsuccessful/*", payment_controller_2.validatePayment);
exports.default = app;
