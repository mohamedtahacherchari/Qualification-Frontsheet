import React, { useEffect ,useState,useMemo} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import {
  listPremiercontacts,
  deletePremiercontact,
  createPremiercontact,
} from '../actions/Premiercontact'
import { PREMIERCONTACT_CREATE_RESET } from '../constants/Premiercontact'
import Loader from '../components/Loder'
import Message from '../components/Message'
import Footer from '../components/Footer'
import countryList from 'react-select-country-list'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListQual = () => {
  
  const history = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const changeHandler = Value => {
      setValue(Value)
    }
    
    const changeHandler2 =(Value2)=> {
      setValue2(Value2)
    } 
  
  const premiercontactList = useSelector((state) => state.premiercontactList)
  const { loading ,error ,premiercontacts } = premiercontactList
  console.log(premiercontactList)
  const premiercontactDelete = useSelector((state) => state.premiercontactDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = premiercontactDelete

  const premiercontactCreate = useSelector((state) => state.premiercontactCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    premiercontact: createdPremiercontact,
  } = premiercontactCreate


  useEffect(() => {
    dispatch({ type: PREMIERCONTACT_CREATE_RESET })
   if (successCreate) {
      history(`/${createdPremiercontact._id}/edit`)
      
    } else {
      dispatch(listPremiercontacts(''))
    }
  },
   [
    dispatch,
    history,
    successDelete,
    successCreate,
    createdPremiercontact,])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deletePremiercontact(id))
    }
  }

  const createPremiercontactHandler =  () => {
    dispatch(createPremiercontact({value,value2}))
  }

  return (
    <>
       <ToastContainer />
      <Row className='align-items-center'>
        <Col>
          <h1>Liste qualification</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createPremiercontactHandler}>
            <i className='fas fa-plus'></i> Nouvelle qualification
          </Button>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>C_T_M</th>
                <th>P_A</th>
                <th>P_P</th>
                <th>nomp</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {premiercontacts.map((premiercontact) => (
                <tr key={premiercontact._id}>
                  <td>{premiercontact._id}</td>
                  <td>{premiercontact.C_T_M}</td>
                  <td>{premiercontact.P_A}</td>
                  <td>{premiercontact.P_P}</td>
                  <td>{premiercontact.nomp}</td>

                  <td>
                    <LinkContainer to={`/${premiercontact._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(premiercontact._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>

                </tr>
              ))}
            </tbody>
          </Table>
        <Footer/>
        </>
      )}
    </>
  )
}

export default ListQual