import { Box } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import axios from "axios"
import { dataUrl } from './Utils/AllUrls';

function App() {
  axios.get(`${dataUrl}`).then((res)=>console.log(res)).catch((err)=>console.log(err.message))
  return (
    <Box className="App">
          <AllRoutes/>
    </Box>
  );
}

export default App;
