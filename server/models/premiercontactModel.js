import mongoose from 'mongoose'

const premiercontactSchema = mongoose.Schema(
  {
     
    P_A: {
      type: String,
    
    },
     P_P: {
      type: String,
     
    },
    P_N_P: {
      type: String,
     
    },
    D_Q_R: {
      type: String,
     
    },
    nouv: {
      type: String,
     
    },
    V_P_I: {
      type: String,
     
    },
    C_T_M: {
      type: String,
      },
    T_P: {
        type: String,
        },
    T_S:{
          type: String,
          },
   S_A_R:{
        type: String,
            },
    F_A:{
            type: String,
              },
    E_C:{
           type: String,
                },    
      T_P_M:{
     type: String,
     }, 
      C_C:{
      type: String,
      },
      D_M:{
        type: String,
        },
        P_S_D:{
          type: String,
               },    
     A_V_D:{
    type: String,
    }, 
     A_F:{
     type: String,
     },
     E_V_P:{
       type: String,
       }, 
       V_V:{
        type: String,
        }, 
           Sal:{
          type: String,
          },
          P_S:{
            type: String,
            }, 
            S_M:{
             type: String,
             },   
             C_S_L:{
              type: String,
              },
              D_S1:{
                type: String,
                },  
                D_S2:{
                  type: String,
                  },
                  
D_S3:{
                    type: String,
                    },  
                    D_S4:{
                      type: String,
                      }, 
                       P_N:{
                        type: String,
                        },  
                        D_E:{
                          type: String,
                          },
                          E_A:{
                            type: String,
                            }, 
                            nomp:{
                              type: String,
                              },   
                              adresse:{
                               type: String,
                               },
                               site:{
                                 type: String,
                                 },  
                                 permis:{
                                   type: String,
                                   },
                                   telf:{
                                     type: String,
                                     },  
                                     telp:{
                                       type: String,
                                       }, 
                                        email:{
                                         type: String,
                                         },
                                           
                                         value: {
                                          type: String,
                                          } ,

                                          value2: {
                                            type: String,
                                            }

                                      
   },
  {
    timestamps: true,
  }
)

const premiercontact = mongoose.model('Premiercontact', premiercontactSchema)

export default premiercontact