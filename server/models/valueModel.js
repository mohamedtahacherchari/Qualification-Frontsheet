import mongoose from 'mongoose'

const valueSchema = mongoose.Schema(  
 {
    value: {
        type: String,
      
      },
       label: {
        type: String,
       
      },
 }


)

const value = mongoose.model('Value', valueSchema)

export default value