"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// import { string } from 'yargs'
const paymentSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true,
        // unique: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const paymentModel = mongoose_1.default.model('payment', paymentSchema);
exports.default = paymentModel;
// export default callback => {
//     const { MONGO_URL, MONGO_PORT, MONGO_DB } = process.env
//     mongoose.connect(`mongodb://${localhost:27017/payment}:${MONGO_PORT}/${MONGO_DB}`, error => {
//       if (error) {
//         console.error('Please make sure your MongoDB configuration is correct and that service is running')
//         throw error
//       }
//     })
//     callback()
//   }
