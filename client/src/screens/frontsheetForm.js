import React from 'react'
import { Row, Col,ListGroup,Form,Button} from 'react-bootstrap'
import { useState ,useRef} from 'react'
import Footer from '../components/Footer'
import "react-datepicker/dist/react-datepicker.css";
import { useReactToPrint } from 'react-to-print';
import 'react-languages-select/css/react-languages-select.css';
//import { grey } from '@mui/material/colors';
import unnamed from  '../images/unnamed.png';




//import 'bootstrap/dist/css/bootstrap.min.css'




const FrontsheetForm = () => {


  const [startDate, setStartDate] = useState();
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [titredeposte, setTitredeposte] = useState('');
 // const [titredudiplome, setTitredudiplome] = useState('');
 // const [universite, setUniversite] = useState('');
  const [sals, setSals] = useState('');
  const [sala, setSala] = useState('');
  const [dis, setDis] = useState('');

  const [formFields, setFormFields] = useState([
    { titredudipmlome: '', universite:'', Date:'' },
  ])

  const i= 1;


  const handleNameChangeprenom = event => {
    setPrenom(event.target.value); }
    const handleNameChangenom = event => {
      setNom(event.target.value); }
      const handleNameChangetitredeposte = event => {
        setTitredeposte(event.target.value); }
       // const handleNameChangetitredudiplome = event => {
         // setTitredudiplome(event.target.value); }
          //const handleNameChangeuniversite = event => {
            //setUniversite(event.target.value); }
            const handleNameChangesals = event => {
              setSals(event.target.value); }
              const handleNameChangesala = event => {
                setSala(event.target.value); }
                const handleNameChangedis = event => {
                  setDis(event.target.value); }
                  const handleNameChangedate = event => {
                    setStartDate(event.target.value); }
                  /*-------------------------*/
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
                      Date : '',
                      titredudipmlome: '',
                      universite :  ''
                    }
                
                    setFormFields([...formFields, object])
                  }
                
                  const removeFields = (index) => {
                    let data = [...formFields];
                    data.splice(index, 1)
                    setFormFields(data)
                  }
            

    const componentRef = useRef();
     const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle : 'emp-data',
    onAfterPrint : ()=> alert('Print success')

     })


              

                


                




  return (
   
    <>
  
        <div  ref={componentRef } 
        style={{ paddingLeft:100, paddingRight:40, marginRight:0, marginLeft:6, width:'100%',
         height : window.innerHeight, marginTop : 90, marginRight:6
        }}  >
        
        <Row >
       
    
      <Col  >

      <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row >
                <Col>
              <img 
               alt=''
              src={unnamed}
              style={{ width:"2" , height:"100px"}}/>
              </Col>
              <Col style={{ margin:50, paddingLeft:90,marginBottom :5 }} >
              <h2><u
              >PROFIL DU CANDIDAT</u></h2>
              </Col>
             
              </Row>

              </ListGroup.Item>
         
              <ListGroup.Item>
                <Row>
                <Col>
                Candidat 
              </Col>
                <Col>
              <Form.Control type="text" placeholder="Pr??nom "  style={{backgroundColor:"#DCDCDC"}} 
              maxLength={15}
              id="first_name"
              name="first_name"
              value={prenom}
              onChange={handleNameChangeprenom}

              />
              </Col>
              <Col>
              <Form.Control type="text" placeholder="Nom " style={{backgroundColor:"#DCDCDC"}}
                 maxLength={15}
                 value={nom}
                 onChange={handleNameChangenom}
              />
              </Col>
           
              </Row>

              </ListGroup.Item>
              
              <ListGroup.Item>
                   <Row>
                   
                   <Col>Poste(s)
                    Souhait??(s)</Col>
                  <Col> <Form.Control type="email" placeholder="Titre du poste "  
                  style={{backgroundColor:"#DCDCDC", marginRight :580}}
                     maxLength={25}
                     value={titredeposte}
                     onChange={handleNameChangetitredeposte}
                     
                  /></Col>
                   </Row>
              </ListGroup.Item>
              
              
            
                <Row>
                  <Col style={{marginLeft: 25}}>Formations</Col>
                  
                  <ListGroup.Item onSubmit={submit} style={{marginLeft:300}} >

                  {console.log(i)}
                  {
                  
                  formFields.map((g, index) => {
                 return (
                  
                  <Row key={index}  >
                  <Col > 

                  <Form.Control type="text" placeholder="Ann??e" size='sm'
                   style={{backgroundColor:"#DCDCDC", width: 65, marginRight: 0, marginLeft : 0}}
          
                  name='Date'
                 
                  
                  maxLength={4}
                  onChange={event => handleFormChange(event, index)}
                  value={g.Date}
                
                  onClick={addFields} 
                 />

    
                       </Col>
                  <Col>
                 <Form.Control 
                 placeholder="Titre du dipl??me"
                  size='sm'
                  type="text"
                  style={{backgroundColor:"#DCDCDC", width : 200, marginLeft : 0}}
                  maxLength={25}
                  name='titredudipmlome'
                 
                  onChange={event => handleFormChange(event, index)}
                  value={g.titredudipmlome}
                  
                 
                 />
                  
                
                  </Col>
                  <Col> 
                  <Form.Control  placeholder="Universit??"
                   size='sm'
                   type="text" 
                   style={{backgroundColor:"#DCDCDC" , width : 200, marginLeft : 0}}
                   maxLength={25}
                   name='universite'
                 
                   onChange={event => handleFormChange(event, index)}
                   value={g.universite}
                 
                  
                  />  
                  </Col>
                 
                 
                    <Row>
                      <Col>
             <button  onClick={addFields}  style={{width :40 ,height:40, Color:"grey"}} >
           
              +</button>
             </Col>
             <Col>
             <button onClick={() => removeFields(index) } style={{width :40 ,height:40, Color: "grey"} }>-</button>
             </Col>
            </Row> 
            </Row>
          
               
               )
              })} 
              </ListGroup.Item>
                </Row>
            
              
              <ListGroup.Item>
                <Row>
                
                
                <Col style={{marginLeft :370}}> <Form.Control as="textarea" rows={3}  size='sm'  style={{backgroundColor:"#DCDCDC"}} placeholder=" Certifications "/>
                

                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item >
                <Row>
                  <Col>R??sum?? des comp??tences </Col>
                
                  <Col > 
                  
                  <Row ><Form.Control as="textarea" rows={3}  size='sm'  style={{backgroundColor:"#DCDCDC", width : 720}}/></Row>
                  <Row> <u>Comp??tences fonctionnelles :</u></Row>
                  <Row><Form.Control as="textarea" rows={3}  size='sm' style={{backgroundColor:"#DCDCDC"}}/></Row>
                  <Row> <u>Comp??tences techniques :</u></Row>
                  <Row><Form.Control as="textarea" rows={3}  size='sm' style={{backgroundColor:"#DCDCDC"}}/></Row>
                  <Row>  <u> Langues :</u>
    <Form.Control  as="textarea"  placeholder="Langue (niveau)" size='sm'  style={{backgroundColor:"#DCDCDC"}}/> </Row>
  
              
     </Col>
       
             
  

    
                </Row> 
                </ListGroup.Item>
        <ListGroup.Item>
                <Row>
             
                  <Col>Date de commencement </Col>
                  <Col>
                  <Form.Control type="text" placeholder= "" style={{backgroundColor:"#DCDCDC" , width : 700}} 
                   maxLength={15}
                   value={startDate}
                   onChange={handleNameChangedate}
                  
                  />
                   </Col>
                  
          
                </Row> 
          </ListGroup.Item>
          <ListGroup.Item>
                  <Row>
                  <Col>Salaire souhait?? </Col>
                  <Col>?? partir de </Col>
                  <Col><Form.Control type="text" placeholder= "k??? " style={{backgroundColor:"#DCDCDC"}} 
                   maxLength={15}
                   value={sals}
                   onChange={handleNameChangesals}
                  
                  />
                
                  </Col>
                  <Col>Salaire actuel </Col>
                  <Col><Form.Control type="integer" placeholder= " k???" style={{backgroundColor:"#DCDCDC"}}
                   maxLength={15}
                   value={sala}
                   onChange={handleNameChangesala}
                  
                  /></Col>
                 </Row>
              </ListGroup.Item>
              <ListGroup.Item>
              <Row>
                <Col>Disponiblit?? Entretiens</Col>
                <Col><Form.Control type="text" placeholder= "En journ?? ou le soir " style={{backgroundColor:"#DCDCDC" , width : 700}}
                 maxLength={25}
                 value={dis}
                 onChange={handleNameChangedis}
                
                /></Col>
              </Row>
              </ListGroup.Item>
              <ListGroup.Item>
              <Row>
                <Col>Remarques </Col>
                <Col>
                <Form.Control as="textarea" rows={7}  size='sm' style={{backgroundColor:"#DCDCDC" , width : 700}}/>
                </Col>
              </Row>
          
              </ListGroup.Item>
            </ListGroup>
         
        </Col>
        </Row>
   
    


        <Footer />
        <Button className='my-3' onClick={handlePrint} variant='success'>
      <i className='fas fa-plus'></i>Imprimer et/ou Enregistrer</Button>
     </div>

      
  

       </>
  )
}

export default FrontsheetForm
