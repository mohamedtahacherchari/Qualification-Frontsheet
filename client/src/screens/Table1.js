import React from 'react'
import { Table  ,Form ,Col } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState} from 'react'
const Table1 = () => {

  const [startDate, setStartDate] = useState(new Date());

  const [formFields, setFormFields] = useState([
    { date: '', titredudiplome : '', université :'' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      date: '',
      titre: '',
      université:  ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }


  return (
    <div>
    <Table>
        <thead>
            <tr>
            <th>Année</th>
            <th>Titre de diplome</th>
            <th> Université</th>
            </tr>
        </thead>
        <tbody>
            <td>
            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
            </td>
            <td>  <Form.Control 
                type="text" placeholder=" "/></td>
                <td>  <Form.Control 
                type="text" placeholder=" "/></td>

        </tbody>
    </Table>
    <Col onSubmit={submit}>
        {formFields.map((g, index) => {
          return (
            <div key={index}>
              <input
                name='date'
                placeholder='date'
                onChange={event => handleFormChange(event, index)}
                value={g.date}
              />
              <input
                name='age'
                placeholder='Age'
                onChange={event => handleFormChange(event, index)}
                value={g.age}
              />

<input
                name='université'
                placeholder='université'
                onChange={event => handleFormChange(event, index)}
                value={g.université}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </Col>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
      <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}
                   showYearPicker
                   dateFormat="yyyy"
                   yearItemNumber={9}
                   required
                   style={{marge: 9}}
                
                   /> 

<Form.Group controlId="exampleForm.ControlSelect1">
    
               
                  
   {/* <DatePicker selected={startDate} onChange={(date:Date,event ) => setStartDate(date,event, index)}
                   showYearPicker
                   dateFormat="yyyy"
                   yearItemNumber={9}
                   required
                   style={{marge: 9}}
                   name= 'date'
                   value={g.date}
                   
      /> */}
                  
             
  </Form.Group>
    </div>
  )
}

export default Table1