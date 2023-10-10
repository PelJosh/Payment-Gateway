"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPayment = exports.initializePayment = void 0;
const axios_1 = __importDefault(require("axios"));
const initializePayment = (req, res) => {
    res.send("I want to make payment");
    async function makePaymentReq(data) {
        try {
            const response = await axios_1.default.post("https://api.flutterwave.com/v3/payments", data, {
                headers: {
                    Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    const paymentData = {
        tx_ref: "ticketNumber",
        amount: 100,
        currency: "NGN",
        redirect_url: "https://roadmoney.money",
        payment_options: "card",
        customer: {
            email: "user@email.com",
            phone_number: "08102909304",
            name: "John Doe",
        },
    };
    axios_1.default
        .post("https://api.flutterwave.com/v3/validate-charge")
        .then((response) => {
        console.log("transaction initiated;", response.data);
    })
        .catch((error) => {
        console.error("Transaction failed:", error);
    });
};
exports.initializePayment = initializePayment;
const verifyPayment = (req, res) => {
    res.send("I want to verify");
};
exports.verifyPayment = verifyPayment;
