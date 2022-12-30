import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import FrontsheetForm from './screens/frontsheetForm';
import QualificationForm from './screens/QualificationForm';
import Table1 from './screens/Table1';
import ListQual from './screens/ListQual';
import EditScreen from './screens/EditScreen';


function App() {

 return (
    <Router>
      <div className="App">
      <Routes>
            <Route path="/premiercontactlist" element={<ListQual/>}  />
            <Route path="/" element={<FrontsheetForm/>}  />
            <Route path="/Q" element={<QualificationForm/>}  />
            <Route path="/Table1" element={<Table1/>}  />
            <Route path="/:id/edit" element={<EditScreen/>}/>

        </Routes>
        
      </div>
    </Router>
  );
}




export default App;
