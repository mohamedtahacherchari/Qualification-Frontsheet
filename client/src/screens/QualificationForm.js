import {Table, Row, Col,ListGroup,Form ,Button,Input} from 'react-bootstrap';
import React, { useState, useMemo ,useRef , useEffect} from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import DatePicker from "react-datepicker";
import unnamed from  '../images/unnamed.png';
import { useReactToPrint } from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { PREMIERCONTACT_CREATE_REQUEST, PREMIERCONTACT_CREATE_RESET, PREMIERCONTACT_CREATE_SUCCESS } from '../constants/Premiercontact';
import {createPremiercontact, listPremiercontacts,} from '../actions/Premiercontact'



const QualificationForm = () => {
  const notify = () => toast("Wow so easy!");
  const dispatch = useDispatch()

  const premiercontactList = useSelector((state) => state.premiercontactList)
  const {premiercontacts } = premiercontactList
const premiercontactCreate = useSelector((state) => state.premiercontactCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
   premiercontact: createdPremiercontact,
  } = premiercontactCreate
    
  useEffect(() => {
    dispatch({ type: PREMIERCONTACT_CREATE_RESET })

 

  
  }, [
    dispatch,
   
    successCreate,
   
  ])

  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);
  const [checked10, setChecked10] = useState(false);
  const [checked11, setChecked11] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = Value => {
        setValue(Value)
      }
      
      const changeHandler2 =(Value2)=> {
        setValue2(Value2)
      } 
       
      const [nomp, setNomp] = useState('');
      const [adresse, setAdresse] = useState('');
      const [site, setSite] = useState('');
      const [permis, setPermis] = useState('');
      const [telf, setTelf] = useState('');
      const [email, setEmail] = useState('');
      const [telp, setTelp] = useState('');
      const [P_A, setP_A]=useState('');
      const [P_P, setP_P]=useState('');
      const [P_N_P, setP_N_P]=useState('');
      const [D_Q_R, setD_Q_R]=useState('');
     
      const [V_P_I, setV_P_I]=useState('');
      const [C_T_M ,setC_T_M]=useState('');
      const [T_P ,setT_P]=useState('');
      const [T_S ,setT_S]=useState('');
      const[S_A_R, setS_A_R]=useState('');
      const[F_A, setF_A]=useState('');
      const[E_C, setE_C]=useState('');
      const[T_P_M, setT_P_M]=useState('');
      const[C_C, setC_C]=useState('');
      const[D_M,setD_M]=useState('');
      const[P_S_D,setP_S_D]=useState('');
      const[A_V_D,setA_V_D]=useState('');
      const[A_F,setA_F]=useState('');
      const[E_V_P,setE_V_P]=useState('');
      const[V_V,setV_V]=useState('');
      const[P_S,setP_S]=useState('');
      const[S_M,setS_M]=useState('');
      const[Sal,setSal]=useState('');
      const[C_S_L,setC_S_L]=useState('');
      const[D_S1,setD_S1]=useState('');
      const[D_S2,setD_S2]=useState('');
      const[D_S3,setD_S3]=useState('');
      const[D_S4,setD_S4]=useState('');
      const[P_N,setP_N]=useState('');
      const[D_E,setD_E]=useState('');
      const[E_A,setE_A]=useState('');
      const[nouv, setNouv]=useState('');
      
      const handlenouv=(e)=>{setNouv(e.target.value)}
      const handleP_N=(e)=>{setP_N(e.target.value)}
      const handleD_E=(e)=>{setD_E(e.target.value)}
      const handleE_A=(e)=>{setE_A(e.target.value)}
      const handleD_S3=(e)=>{setD_S3(e.target.value)}
      const handleD_S4=(e)=>{setD_S4(e.target.value)}
      const handleD_S2=(e)=>{setD_S2(e.target.value)}
      const handleD_S1=(e)=>{setD_S1(e.target.value)}
      const handleC_S_L=(e)=>{setC_S_L(e.target.value)}
      const handleS_M=(e)=>{setS_M(e.target.value)}
      const handleP_S=(e)=>{setP_S(e.target.value)}
      const handleSal=(e)=>{setSal(e.target.value)}
      const handleV_V=(e)=>{setV_V(e.target.value)}
      const handleE_V_P=(e)=>{setE_V_P(e.target.value)}
      const handleA_F=(e)=>{setA_F(e.target.value)}
      const handleA_V_D=(e)=>{setA_V_D(e.target.value)}
      const handleP_S_D=(e)=>{setP_S_D(e.target.value)}
      const handleD_M=(e)=>{setD_M(e.target.value)}
      const handleC_C=(e)=>{setC_C(e.target.value)}
      const handleT_P_M=(e)=>{setT_P_M(e.target.value)}
      const handleE_C=(e)=>{setE_C(e.target.value)}
      const handleF_A=(e)=>{setF_A(e.target.value)}
      const handleS_A_R=(e)=>{setS_A_R(e.target.value)}
      const handleT_S=(e)=>{setT_S(e.target.value)}
      const handleT_P=(e)=>{setT_P(e.target.value)}
      const handleC_T_M=(e)=>{setC_T_M(e.target.value)}
      const handleV_P_I=(e)=>{setV_P_I(e.target.value)}
   
      const handleD_Q_R =(e)=>{setD_Q_R(e.target.value)}
      const handleP_N_P =(e)=>{ setP_N_P(e.target.value)}
      const handleP_A = (e)=>{ setP_A(e.target.value)}
      const handleP_P = (e)=>{ setP_P(e.target.value)}
      const handleNameChangenomp = event => {
        setNomp(event.target.value); }
        const handleNameChangeadresse = event => {
          setAdresse(event.target.value); }
          const handleNameChangesite = event => {
            setSite(event.target.value); }
            const handleNameChangepermis = event => {
              setPermis(event.target.value); }
              const handleNameChangetelf = event => {
                setTelf(event.target.value); }
                const handleNameChangeemail = event => {
                  setEmail(event.target.value); }
                    const handleNameChangetelp = event => {
                      setTelp(event.target.value); }
       
                      const LanguageCheckBox = () => {
                        setChecked(!checked);
                      }
                      const LanguageCheckBox2 = () => {
                        setChecked2(!checked2);
                      }
                      const LanguageCheckBox3 = () => {
                        setChecked3(!checked3);
                      }

                      const LanguageCheckBox4 = () => {
                        setChecked4(!checked4);
                      }
                      const LanguageCheckBox5 = () => {
                        setChecked5(!checked5);
                      }
                      const LanguageCheckBox6 = () => {
                        setChecked6(!checked6);
                      }
                      const LanguageCheckBox7 = () => {
                        setChecked7(!checked7);
                      }

                      const LanguageCheckBox8 = () => {
                        setChecked8(!checked8);
                      }
                      const LanguageCheckBox9 = () => {
                        setChecked9(!checked9);
                      }
                      const LanguageCheckBox10 = () => {
                        setChecked10(!checked10);
                      }
                      const LanguageCheckBox11 = () => {
                        setChecked11(!checked11);
                      }

                      const componentRef = useRef();
                      const handlePrint = useReactToPrint({
                       content: () => componentRef.current,
                       documentTitle : 'emp-data',
                     onAfterPrint : ()=> alert('Print success')
                 
                      })
                     
                    
  return (
  <div style={{margin : 100}}  ref={componentRef } >
     
        <ToastContainer />
     <Row>
      <Col > Date :</Col>
     <Col style={{marginRight :800}}> 
     <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
   
     </Col>
     </Row>
       
     
  
     <Row style={{marginBottom: 60 }} >
      <Col>
      <img 
         alt=''
          src={unnamed}
          style={{ width:"" , height:"90px"}}/>
      </Col>
      <Col >
    <h4 style={{ marginLeft :0,marginTop: 20,  marginBottom: 20}}>CANDIDATURE QUALIFICATION FORM</h4>
    <h5 style={{ marginLeft : 140 ,marginTop: 2}}> Recrutement CDI </h5>
   </Col>
   </Row>
 
    
    <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2}} onClick={LanguageCheckBox2}> 
        <Row
         style={{marginTop: 7,marginBottom: 5 ,marginRight: 50,marginLeft: 370, color:'white'}}
         
         >
          VERFIER LES COORDONNEES CANDIDAT
         
          </Row>
          <button onClick={LanguageCheckBox2}
          
          ><img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/></button>
      </ListGroup.Item>
      
       
      {checked2 && ( 
     <Row>
      <Table >
   
          <tbody>
           
              <tr >
                <td>Nom/ Prénom :</td>
                <td> <Form.Control  as="textarea" rows={2} 
                    maxLength={25}
                    value={nomp}
                    onChange={handleNameChangenomp}
                    size='sm'
                />
              
                </td>
                <td> Adresse:</td>
                <td>  <Form.Control  as="textarea" rows={2}
                maxLength={30}
                value={adresse}
                onChange={handleNameChangeadresse}
                size='sm'  
                
                />
                </td>
                <td>Site internet</td>
                <td> 
                <Form.Control 
                as="textarea" rows={2}
                maxLength={30}
                value={site}
                onChange={handleNameChangesite}
                size='sm'  
                
                />
                </td>
                </tr>
                </tbody>
  </Table>
  </Row>
      ) } 
       {checked2 && ( 
    <Row>
            <Table >
                <tbody>
                    <tr>
                <td>
                  Permis de travail en France :
                </td>
                <td>  
                <Form.Control 
                as="textarea" rows={2}
                maxLength={25}
                value={permis}
                onChange={handleNameChangepermis}
                size='sm'  
                
                />
                </td>
                 <td>
                 Tel Fix:
                </td>
                <td>  
                <Form.Control 
                as="textarea" rows={2}
                maxLength={25}
                value={telf}
                onChange={handleNameChangetelf}
                size='sm'  
                
                />
                
                </td>
                <td>
                 Tel portable:
                </td>
                <td> 
                <Form.Control 
                as="textarea" rows={2}
                maxLength={35}
                value={telp}
                onChange={handleNameChangetelp}
                size='sm'  
                
                />
                
                
                </td>
              </tr>
          </tbody>
  </Table>
           </Row>
       )}
        {checked2 && ( 
           <Row>
            <Table >
                <tbody>
                    <tr>
                <td>
                 Nationalité:
                </td>
                <td><Select options={options}  onChange={changeHandler} value={value} id="a"
                
                /></td>
                <td>
                 Autre nationalité:
                </td>
                <td><Select  options={options} onChange={changeHandler2} value={value2} id="b"
                
                /></td>
                 <td>
                 Email:
                </td>
                <td>
                <Form.Control 
                as="textarea" rows={2}
                maxLength={35}
                value={email}
                onChange={handleNameChangeemail}
                size='sm'  
                
                />
                </td>
              </tr>
          </tbody>
  </Table>
           </Row>
           )}
           
         
           <br/>
           
           <ListGroup.Item style={{ 
            backgroundColor:'grey',
            marginTop: 2}}
            onClick={LanguageCheckBox}
            > 
           <Row style={{
          marginTop: 7,
          marginBottom: 5 ,
          marginRight: 50,
          marginLeft: 400, 
          color:'white',}}
          
          >
            CREER LE PREMIER CONTACT</Row>
             <button onClick={LanguageCheckBox}>
              <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/></button>
      </ListGroup.Item>
        
      <> 
        {checked && (  
        <ListGroup.Item>
          
        <Row >
        

          <Col style={{margin:9}}>
        <Row>Poste actuel :</Row>
        <Row>Employeur</Row>
        <Row>Type de société</Row>
        <Row>Ancienneté </Row>
        <Row>Tâches quotidiennes</Row>
        <Row>Taille de l'équipe</Row>
        <Row>Environnement technique </Row>
        <Row>Responsabilités</Row>
        </Col>
       
        <Col >
     
     <Form.Control 
     as="textarea"
      rows={8}  
      size='bm'
      value={P_A}
      onChange={handleP_A}
      />
      
          </Col>
      
        </Row>
          
      
        </ListGroup.Item>
          )} 
           {checked && ( 
          <ListGroup.Item>
        
          <Row>
          <Col style={{margin:9}}>
        <Row>Poste précédents</Row>
  
        <Row>Employeur</Row>
        <Row>Type de société</Row>
        <Row>Ancienneté </Row>
        <Row>Tâche quotidiennes</Row>
        <Row>Taille de l'équipe</Row>
        <Row>Environnement technique </Row>
        <Row>Responsabilités</Row>
          </Col>
          <Col style={{margin :'45'}}>
          
          <Form.Control 
     as="textarea"
      rows={8}  
      size='bm'
      value={P_P}
      onChange={handleP_P}
      />
        
          </Col> 
      
      </Row>
          
          </ListGroup.Item>
      )} 
      </>


       <br/>



       <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2}}  onClick={LanguageCheckBox3}> 
        <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 50,marginLeft: 400, color:'white'}}>
            MOTIVATION DU CANDIDAT</Row>
            <button onClick={LanguageCheckBox3}> 
             <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/></button>
      </ListGroup.Item> 
      {checked3 && (
      <ListGroup.Item> 
      <Row>
        <Col style={{margin:9}}>
      <Row>
        <Col>
        Pourqoui un nouveau poste ?
        </Col>
        
        <Col>
        <Form.Control type="text" 
        placeholder=" " 
         value={P_N_P}
         onChange={handleP_N_P}
        />
        </Col>
        
        </Row>
        <Row>
          
        <Col>
        Depuis quand recherchez-vous?
        </Col>
        <Col>
        <Form.Control type="text" 
        placeholder=" " 
        value={D_Q_R}
        onChange={handleD_Q_R}
        />
        </Col>
        
        </Row>
        
        <Row>
      
       
        Si le candidat n'est pas en poste :
        <br/>
        Pouqoui a-t-il qitté son précédent employeur ? <br/>
       
        Demander des références :
       
        A qui puis-je parler pour<br/> avoir une référence sur vos postes précédents ?
        
        Nom <br/>Prénom Poste Email Tel Société 
      
        <Col style={{marginLeft :135}}>
        
        <Form.Control 
        placeholder=" "
        as="textarea" rows={2}
        value={nouv}
        onChange={handlenouv}
       
        />
        </Col>
        </Row>
       </Col>
      
     
     
       </Row>
       </ListGroup.Item> 
      )}
       <br/>


       <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2}} onClick={LanguageCheckBox4}> 
        <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 30,marginLeft: 370, color:'white'}}>
               CONNAITRE LES BESOINS DU CANDIDAT
        </Row>
          <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 30,marginLeft: 299, color:'white'}}> 
          (trouver le meilleur poste pour ListGroup
            et mieux vendre le poste)
            
            </Row>
            <button onClick={LanguageCheckBox4}>
            <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/>
            </button>
      </ListGroup.Item> 
      {checked4 && (
      <ListGroup.Item> 
      <Row>
        <Col style={{margin:9}}>
      <Row>
        <Col>
        Votre poste idéal : <br/>
        Titre et rôle
        </Col>
        
        <Col>
        <Form.Control type="text"
         placeholder=" "
         value={V_P_I}
         onChange={handleV_P_I}
         />
        </Col>
        
        </Row>
        <Row>
          
        <Col>
        Compétences et technologies recherchées :
        </Col>
        <Col>
        <Form.Control 
        type="text"
         placeholder=" "
         value={C_T_M}
         onChange={handleC_T_M}
         />
        </Col>
        
        </Row>
        
        <Row>
        <Col>
       
        Type de projet (implication recherchée)
        <br/>
        Responsabilités :
        </Col>
        <Col>
        <Form.Control 
        type="text" 
        placeholder=" "
        value={T_P}
        onChange={handleT_P}
        />
        </Col>
        </Row>
        <Row>
        <Col>
        Type de société :
        <br/>
        Culture, taille
        </Col>
        <Col>
        <Form.Control
         type="text"
         placeholder=" "
         value={T_S}
         onChange={handleT_S}
         />
        </Col>
        </Row>
        <Row>
        <Col>
        Secteurs d'activité recherchés :
        
        </Col>
        <Col>
        <Form.Control
         type="text"
         placeholder=" "
         value={S_A_R}
         onChange={handleS_A_R}
         />
        </Col>
        </Row>
        <Row>
        <Col>
        Formations souhaitées :
        </Col>
        <Col>
        <Form.Control
         type="text"
         placeholder=" "
         value={F_A}
         onChange={handleF_A}
         />
        </Col>
        </Row>
        <Row>
        <Col>
         Evolution de carrière:
        </Col>
        <Col>
        <Form.Control
         type="text"
         placeholder=" "
         value={E_C}
         onChange={handleE_C}
         />
        </Col>
        </Row>

       </Col>
    
       </Row>
       
       </ListGroup.Item> 
      )}
       <br/>
       <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2}} onClick={LanguageCheckBox5} > 
        <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 50,marginLeft: 200, color:'white'}}>
            TROUVER LES USP'S du Candidat(pour mieux vendre le candidat et rédiger sa frontsheet)</Row>
            <button onClick={LanguageCheckBox5}>
            <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/>
            </button>
      </ListGroup.Item> 
      {checked5 && (
      <ListGroup.Item> 
      <Row>
        <Col style={{margin:9}}>
      <Row>Techologies les plus maîtrisées</Row>
      <Row>Avec nombre d'années d'expérience</Row>
      <Row>Dans quel cadre ?  (projets, rôle dans le projet, etc.)</Row>
      <Row>Qu'est-ce qui le distingue d'un autre candidat ? <br/>
         Pourqoui devrait-on l'embaucher lui et pas un autre ?
      </Row>
      <Row>Diplômes obtenus :</Row>
      
       </Col>
      
       <Col >
       
       <Form.Control 
       as="textarea"
       rows={8}  
       size='bm'
       value={T_P_M}
       onChange={handleT_P_M}
       />
     
       </Col>
     
       </Row>
       </ListGroup.Item> 
      )}
        {checked5 && (
       <ListGroup.Item> 
      <Row>
        <Col style={{margin:9}}>
      <Row>Compétences commerciales
      </Row>
      <Row>Langues maitrisées :</Row>
      <Row>Niveau écrit et oral (souvent différent)</Row>
      <Row>Conversation téléphonique :
      </Row>
      <Row>Pratique dans une expérience précédente :</Row>
      <Row>Longs séjours ou expatriation :</Row>
       </Col>
      
       <Col >
       
       <Form.Control
       as="textarea"
       rows={8}  
       size='bm'
       value={C_C}
       onChange={handleC_C}
       />
     
       </Col>
     
       </Row>
       </ListGroup.Item> 
        )}
       <br/>
       <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2}} onClick={LanguageCheckBox6}> 
        <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 40,marginLeft: 400, color:'white'}}>
            Discuter de sa mobilité </Row>
            <button onClick={LanguageCheckBox6}>
            <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/>
            </button>
      </ListGroup.Item> 
      {checked6 && (
       <ListGroup.Item> 
      <Row>
        <Col style={{margin:20}}>
      <Row>Où vivez-vous ?
      </Row>
      <Row>Souhait de trajets quotidiens (en temps ou distance) ?</Row>
      <Row>Permis de conduire ? Moyens de déplacement ?</Row>
       </Col>
      
       <Col >
       
       <Form.Control
        as="textarea" 
        rows={3}  
        size='bm'
        value={D_M}
        onChange={handleD_M}
        />
     
       </Col>
     
       </Row>
       </ListGroup.Item> 
      )}
       <br/>

       
       <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2}} onClick={LanguageCheckBox7}> 
        <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 50,marginLeft: 280, color:'white'}}>
            Si déménagement prévu, creuser sur le sérieux de son projet :</Row>
            <button onClick={LanguageCheckBox7}>
            <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/>
            </button>
      </ListGroup.Item> 
      {checked7 && (
      <ListGroup.Item> 

      <Row>
        <Col style={{margin:9}}>
      <Row>
        <Col>
        Pourqoui souhaitez-vous déménager ici ?
        </Col>
        
        <Col>
        <Form.Control 
        type="text"
        placeholder=" "
        value={P_S_D}
        onChange={handleP_S_D}
        />
        </Col>
        
        </Row>
        <Row>
          
        <Col>
        Avez-vous déjà vécu ici (nouvelle destination)?
        </Col>
        <Col>
        <Form.Control
         type="text" 
         placeholder=" "
         value={A_V_D}
         onChange={handleA_V_D}
         />
        </Col>
        
        </Row>
        
        <Row>
        <Col>
       
        Amis / Famille ici ?
        </Col>
        <Col>
        <Form.Control 
        type="text" 
        placeholder=" " 
        value={A_F}
        onChange={handleA_F}
        />
        </Col>
        </Row>

        <Row>
        <Col>
       
        Etes-vous propriétaire ? Vente prévue ?
        </Col>
        <Col>
        <Form.Control
         type="text"
         placeholder=" "
         value={E_V_P}
         onChange={handleE_V_P}
         />
        </Col>
        </Row>


        <Row>
          
        <Col>
        Vous êtes vous renseigné sur les coûts de location/vie <br/> quotidienne ?
        <br/>
        Famille ? Conjoint travaille ? prêt à quitter son poste ?
        <br/>
        Enfants ? école ? avez-vous trouvé des écoles ?
        <br/>
        Où vivent les parents ?
        </Col>
        <Col>
        <br/>
        <Form.Control 
         as="textarea" 
        rows={3}  
        size='bm'
        value={V_V}
        onChange={handleV_V}
        />
        </Col>
        </Row>
       </Col>
      
     
     
       </Row>
       </ListGroup.Item> 
      )}
       <br/>
       <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2}} onClick={LanguageCheckBox8}> 
        <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 40,marginLeft: 250, color:'white'}}>
        CLOSER SUR LE SALAIRE (bien closer sur le minimum avant le continuer)</Row>
        <button onClick={LanguageCheckBox8}>
        <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/>
        </button>

      </ListGroup.Item> 
      {checked8 && (
       <ListGroup.Item> 
       <Row>
          
          <Col>
          Salaire actuel / Dernier salaire
          </Col>
          <Col>
          <Form.Control 
          type="text"
          placeholder=" "
          value={Sal}
          onChange={handleSal}
          />
          </Col>
          
          </Row>
          
          <Row>
          <Col>
         
          Prétentions salariales
          </Col>
          <Col>
          <Form.Control 
          type="text" 
          placeholder=" "
          value={P_S}
          onChange={handleP_S}
          />
          </Col>
          </Row>
  
          <Row>
          <Col>
         Salaire minimum (en dessous duquel il est inutile de vous appeler pour présenter l'offre)
          </Col>
          <Col>
          <Form.Control
           type="text"
           placeholder=" "
           value={S_M}
           onChange={handleS_M}
           />
          </Col>
          </Row>
      </ListGroup.Item> 
      )}
      <br/>

      <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2}}  onClick={LanguageCheckBox9}> 
        <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 50,marginLeft: 330, color:'white'}}>
            CLOSER SUR LES AVANTAGES hors salaire</Row>
            <button onClick={LanguageCheckBox9}>
            <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/>
            </button>

      </ListGroup.Item> 
      {checked9 && (
      <ListGroup.Item> 

      <Row>
        <Col style={{margin:9}}>
      <Row>Nombre d'heures travaillées/ Nombre Congés / RTT</Row>
      <Row>Bonus(quand, combien, garanti ) / Mutuelle</Row>
      <Row>Remboursement voyages / Tickets Restaurant</Row>
      <Row>Voiture de fonction(+péage, +essence)</Row>
      <Row>Téléphone portable / Ordinateur portable </Row>
      <Row>Formation (budget annuel)</Row>
      <br/>
      <Row>Quels avantages sont les plus importants (non négociables) ?</Row>
       </Col>
      
       <Col >
       
       <Form.Control
        as="textarea" 
        rows={8} 
        size='bm'
        value={C_S_L}
        onChange={handleC_S_L}
        />
     
       </Col>
     
       </Row>

       </ListGroup.Item>
      )} 
       <br/>

       <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2}} onClick={LanguageCheckBox10}> 
        <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 50,marginLeft: 360, color:'white'}}>
          DISCUTER DE SA RECHERCHE </Row>
          <button onClick={LanguageCheckBox10}>
          <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/>
          </button>
      </ListGroup.Item> 
      {checked10&& (
      <ListGroup.Item> 
      <Row>
        <Col style={{margin:9}}>
      <Row>Où avez-vous envoyé votre CV ?</Row>
      <br/>
      <Row>Essayer d'obtenir des leads (postes, société, nom du/des<br/> managers rencontrés)</Row>
      <br/>
      <Row>
        Bien discuter des différentes opportunités, ce que le <br/>
         candidat a aimé et moins aimé, comment place t'il notre <br/>
         opportunité, etc. Maximum d'informations.
      </Row>
     
       </Col>
      
       <Col >
       
       <Form.Control
        as="textarea" 
        rows={8} 
         size='bm'
         value={D_S1}
         onChange={handleD_S1}
         />
     
       </Col>
     
       </Row>
       </ListGroup.Item> 
      )}
       {checked10 && (
       <ListGroup.Item> 
       <Row>
          
          <Col>
           Entretiens passés
          </Col>
          <Col>
          <Form.Control 
          type="text"
          placeholder=" "
          value={D_S2}
          onChange={handleD_S2}
          />
          </Col>
          
          </Row>
          
          <Row>
          <Col>
         Entretiens planifiés
          </Col>
          <Col>
          <Form.Control
           type="text" 
           placeholder=" "
           value={D_S3}
           onChange={handleD_S3}
           />
          </Col>
          </Row>
  
          <Row>
          <Col>
       Cabinets de recrutement contactés
       <br/>
       Jobboards avec le CV en ligne 
          </Col>
          <Col>
          <Form.Control 
          as="textarea" 
          rows={5} 
          size='bm'
          value={D_S4}
          onChange={handleD_S4}
          />
          </Col>
          </Row>
      </ListGroup.Item>
       )} 

      <br/>
       <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2}} onClick={LanguageCheckBox11}> 
        <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 40,marginLeft: 360, color:'white'}}>
       DISCUTER DE SA DISPONIBILITE</Row>
       <button onClick={LanguageCheckBox11}>
       <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png"/>
       </button>
      </ListGroup.Item> 
      {checked11 && (
       <ListGroup.Item> 
       <Row>
          
          <Col>
          Période de péavis ? Négociable ?
          </Col>
          <Col>
          <Form.Control 
          type="text" 
          placeholder=" "
          value={P_N}
          onChange={handleP_N}
          
          />
          </Col>
          
          </Row>
          
          <Row>
          <Col>
         
         Disponibilité entretiens ? avec nous, avec le client ?
         Possibilité en journée, pause déjeuner, le matin ?
          </Col>
          <Col>
          <Form.Control 
          type="text"
          placeholder=" "
          value={D_E}
          onChange={handleD_E}
          />
          </Col>
          </Row>
  
          <Row>
          <Col>
          Entreprises à ne pas approcher, où ne pas présenter son profil
          </Col>
          <Col>
          <Form.Control
           type="text" 
           placeholder=" "
           value={E_A}
           onChange={handleE_A}
           />
          </Col>
          </Row>
      </ListGroup.Item>
      )}
      <br/>
      <ListGroup.Item style={{ backgroundColor:'grey',marginTop: 2 }}> 
        <Row style={{marginTop: 7,marginBottom: 5 ,marginRight: 40,marginLeft: 170, color:'white', textDecorationStyle:'solid'}}>
                    <Row>
       VENDRE VOTRE SERCIVE AU CANDIDAT : préciser tout ce que vous allez faire pour lui, essayer
                     <Row style={{marginLeft: 250}}>de pitcher à nouveau l'exclusivité 
                     </Row>
                     </Row>
                     <br/>
                    <Row>
       Egalement pensez à lui demander d'enregister votre numéro pour identifier vos appels (trés 
       <Row style={{marginLeft: 150}}> important si son CV est en ligne, il recevra beaucoup d'appels)</Row>
                    </Row> 
                    <br/>
                     <Row>

       VENDRE LES JOBS AU CANDIDAT, utilisez les points clés dont vous avez discuté, importants 
       <Row style={{marginLeft: 150}}>  pour Lui et qu'il retrouvera dans ces jobs.</Row> 
                       </Row>
                       <br/>
                       <Row>

       CONSTRUISEZ VOTRE RESEAU : entourage dans l'IT en rechreche, collègues, anciens collègues,
       <Row style={{marginLeft: 250}}> le motiver pour des cooptations .</Row>
                        </Row>             
       
       
       </Row>
      </ListGroup.Item> 
     
      <Button className='my-3' onClick={handlePrint} variant='success'>
      <i className='fas fa-plus'></i>Imprimer et/ou Enregistrer</Button>
      <Col className='text-right'>
          <Button className='my-3' onClick={()=>dispatch(createPremiercontact( {P_A , P_P , P_N_P, D_Q_R,
            V_P_I,C_T_M,T_P,T_S,S_A_R,F_A,E_C,T_P_M,C_C,D_M,P_S_D,A_V_D,A_F
            ,E_V_P,V_V,Sal,P_S,S_M,C_S_L,D_S1,D_S2,D_S3,D_S4,P_N,D_E,E_A,value,value2
            ,nomp,adresse,site,permis,telf,telp,email,nouv,value,value2
            }))}>
            <i className='fas fa-plus'></i>
           submit

          </Button>
        </Col>
     
 
    </div>
  )
}

export default QualificationForm