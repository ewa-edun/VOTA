import { Routes, Route } from 'react-router-dom';
import Page from './page';
import Apply from './Apply';


function App(){
return (
  <>
     <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
  </>
)   
}

export default App