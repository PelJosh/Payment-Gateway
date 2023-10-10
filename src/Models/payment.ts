import mongoose, { Schema } from 'mongoose'

// import { string } from 'yargs'



const paymentSchema = new mongoose.Schema({
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
},
{
  timestamps: true
}
);

const paymentModel = mongoose.model('payment', paymentSchema)

export default paymentModel;
































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