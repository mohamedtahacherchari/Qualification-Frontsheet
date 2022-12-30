import asyncHandler from 'express-async-handler'
import Premiercontact from '../models/premiercontactModel.js'

   

const getPremiercontacts = asyncHandler(async (req, res) => {
 
  const premiercontacts = await Premiercontact.find({})
   

  res.json(premiercontacts)
})

const createPremiercontact = asyncHandler(async (req, res) => {

  const premiercontact = await Premiercontact({
       
       P_A:req.body.P_A,
       P_P :req.body.P_P,
       P_N_P:req.body.P_N_P,
       D_Q_R:req.body.D_Q_R,
       nouv :req.body.nouv,
       V_P_I : req.body.V_P_I,
       C_T_M : req.body.C_T_M,
       T_P : req.body.T_P,
       T_S : req.body.T_S,
       S_A_R : req.body.S_A_R,
       F_A : req.body.F_A,
       E_C : req.body.E_C,
       T_P_M : req.body.T_P_M,
       C_C : req.body.C_C,
       D_M : req.body.D_M,
       P_S_D: req.body.P_S_D,
       A_V_D: req.body.A_V_D,
       A_F: req.body.A_F,
       E_V_P: req.body.E_V_P,
       V_V: req.body.V_V,
       Sal: req.body.Sal,
       P_S: req.body.P_S,
       S_M: req.body.S_M,
       C_S_L : req.body.C_S_L,
       D_S1 : req.body.D_S1,
       D_S2 : req.body.D_S2,
       D_S3 : req.body.D_S3,
       D_S4 : req.body.D_S4,
       P_N : req.body.P_N,
       D_E : req.body.D_E,
       E_A : req.body.E_A,
       nomp : req.body.nomp,
       adresse : req.body.adresse,
       site : req.body.site,
       permis : req.body.permis,
       telf: req.body.telf,
       telp : req.body.telp,
       email : req.body.email,
       value : req.body.value.label,
       value2 : req.body.value2.label,
    

  })

  const createdPremiercontact = await premiercontact.save()   
  res.status(201).json(createdPremiercontact)
})

   
// @desc    Fetch single premiercontact
// @route   GET /api/premiercontacts/:id
// @access  Public
const getPremiercontactById = asyncHandler(async (req, res) => {
  const premiercontact = await Premiercontact.findById(req.params.id)

  if (premiercontact) {
    res.json(premiercontact)
  } else {
    res.status(404)
    throw new Error('Premiercontact not found')
  }
})








// @desc    Delete a premiercontact
// @route   DELETE /api/premiercontacts/:id
// @access  Private/Admin
const deletePremiercontact= asyncHandler(async (req, res) => {
  const premiercontact = await Premiercontact.findById(req.params.id)

  if (premiercontact) {
    await premiercontact.remove()
    res.json({ message: 'Premiercontactremoved' })
  } else {
    res.status(404)
    throw new Error('Premiercontactnot found')
  }
})



// @desc    Update a premiercontact
// @route   PUT /api/premiercontacts/:id
// @access  Private/Admin
const updatePremiercontact = asyncHandler(async (req, res) => {
  const {   
     P_A,
     P_P,
    P_N_P,
    D_Q_R,
    nouv,
    V_P_I,
    C_T_M,
    T_P,
    T_S,
    S_A_R,
    F_A,
    E_C,
    T_P_M,
    C_C,
    D_M,
    P_S_D,
    A_V_D,
    A_F,
    E_V_P,
    V_V,
    Sal,
    P_S,
    S_M,
    C_S_L,
    D_S1,
    D_S2,
    D_S3,
    D_S4,
    P_N,
    D_E,
    E_A,
    nomp,
    adresse,
    site,
    permis,
    telf,
    value,
    value2,
    telp,
    email,
   
  } = req.body

  const premiercontact = await Premiercontact.findById(req.params.id)

  /*const premiercontact = await Premiercontact.findOneAndUpdate(
    {_id :req.body.id}, 
    req.body , 
    {new :true}) 
 */
    //res.status(200).json(premiercontact)
  if (premiercontact) {
    premiercontact.P_A = P_A
    premiercontact.P_P = P_P
    premiercontact.P_N_P = P_N_P
    premiercontact.D_Q_R = D_Q_R
    premiercontact.nouv = nouv
    premiercontact.V_P_I = V_P_I
    premiercontact.C_T_M = C_T_M
    premiercontact.T_P= T_P
    premiercontact.T_S = T_S
    premiercontact.S_A_R = S_A_R
    premiercontact.F_A = F_A
    premiercontact.E_C = E_C
    premiercontact.T_P_M = T_P_M
    premiercontact.C_C = C_C
    premiercontact.D_M = D_M
    premiercontact.P_S_D = P_S_D
    premiercontact.A_V_D = A_V_D
    premiercontact.A_F = A_F
    premiercontact.E_V_P = E_V_P
    premiercontact.V_V = V_V
    premiercontact.Sal = Sal
    premiercontact.P_S = P_S
    premiercontact.S_M = S_M
    premiercontact.C_S_L = C_S_L
    premiercontact.D_S1 = D_S1
    premiercontact.D_S2 = D_S2
    premiercontact.D_S3 = D_S3
    premiercontact.D_S4 = D_S4
    premiercontact.P_N = P_N
    premiercontact.D_E = D_E
    premiercontact.E_A = E_A
    premiercontact.nomp = nomp
    premiercontact.adresse = adresse
    premiercontact.site = site
    premiercontact.permis = permis
    premiercontact.telf = telf
    premiercontact.telp = telp
    premiercontact.email = email
    premiercontact.value = value.label
    premiercontact.value2 = value2.label

    const updatedPremiercontact = await premiercontact.save()
    res.json(updatedPremiercontact)
 }  else {
    res.status(404)
    throw new Error('Premiercontact not found')
  }
})


export {  
 
  createPremiercontact,
  getPremiercontacts,
  deletePremiercontact,
  getPremiercontactById,
  updatePremiercontact, 
 
}