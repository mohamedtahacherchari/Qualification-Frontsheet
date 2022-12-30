import mongoose from 'mongoose'

const value2Schema = mongoose.Schema(  
 {
    value: {
        type: String,
      
      },
       label: {
        type: String,
       
      },
 }


)

const value2 = mongoose.model('Value2', value2Schema)

export default value2