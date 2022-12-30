import axios from 'axios'


import
 { PREMIERCONTACT_CREATE_FAIL, 
  PREMIERCONTACT_CREATE_REQUEST, 
  PREMIERCONTACT_CREATE_SUCCESS, 
  PREMIERCONTACT_DELETE_FAIL, 
  PREMIERCONTACT_DELETE_REQUEST, 
  PREMIERCONTACT_DELETE_SUCCESS, 
  PREMIERCONTACT_DETAILS_FAIL, 
  PREMIERCONTACT_DETAILS_REQUEST, 
  PREMIERCONTACT_DETAILS_SUCCESS, 
  PREMIERCONTACT_LIST_FAIL, 
  PREMIERCONTACT_LIST_REQUEST,
  PREMIERCONTACT_LIST_SUCCESS,
  PREMIERCONTACT_UPDATE_FAIL,
  PREMIERCONTACT_UPDATE_REQUEST,
  PREMIERCONTACT_UPDATE_SUCCESS} 
  from '../constants/Premiercontact'
  import { toast } from 'react-toastify';
 
  export const listPremiercontacts = () => async (
    dispatch
  ) => {
    try {
      dispatch({ type: PREMIERCONTACT_LIST_REQUEST })
  
      const { data } = await axios.get(
        `/api/premiercontacts`
      )
  
      dispatch({
        type: PREMIERCONTACT_LIST_SUCCESS,
        payload: data,
      })
   
      

    } catch (error) {
      dispatch({
        type: PREMIERCONTACT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })


   
    }
  }





export const createPremiercontact = (premiercontact) => async (dispatch) => {
    try {
      dispatch({
        type: PREMIERCONTACT_CREATE_REQUEST,
      })
  
      const { data } = await axios.post('/api/premiercontacts',premiercontact)
          /*console.log('data : ', data)*/
      dispatch({
        type: PREMIERCONTACT_CREATE_SUCCESS,
        payload: data,
      })
      toast.success('Qualification ajoutée avec succé' , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
   
      dispatch({
        type: PREMIERCONTACT_CREATE_FAIL,
        payload: message,
      })
      toast.error("Error ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
  }

  export const deletePremiercontact = (id) => async (dispatch) => {
    
    try {
      dispatch({
        type: PREMIERCONTACT_DELETE_REQUEST,
      })
   await axios.delete(`/api/premiercontacts/${id}`)
     
      dispatch({
        type: PREMIERCONTACT_DELETE_SUCCESS,
      })

      toast.success('Supprimé avec succé' , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({
        type: PREMIERCONTACT_DELETE_FAIL,
        payload: message,
      })
    }
  }

  export const listPremiercontactDetails = (id) => async (dispatch) => {
    try {
      
      
      dispatch({type:PREMIERCONTACT_DETAILS_REQUEST })
       
      const {data} = await axios.get(`/api/premiercontacts/${id}`)
          

      dispatch({
        type: PREMIERCONTACT_DETAILS_SUCCESS,
        payload: data ,
      })
    } catch (error) {
      dispatch({
        type: PREMIERCONTACT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


  export const updatePremiercontact = (premiercontact) => async (dispatch) => {
    try {
      dispatch({
        type: PREMIERCONTACT_UPDATE_REQUEST,
      })
        const { data } = await axios.put(
        `/api/premiercontacts/${premiercontact._id}`,
        premiercontact,
      )
      dispatch({
        type: PREMIERCONTACT_UPDATE_SUCCESS,
        payload: data,
      })

      toast.success('updated avec succé' , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({ type: PREMIERCONTACT_DETAILS_SUCCESS, payload: data })
      
   

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     
      dispatch({
        type: PREMIERCONTACT_UPDATE_FAIL,
        payload: message,
      })
    }
  }
  