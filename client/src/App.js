import './App.css';
import Messenger from './components/Messenger'

import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider  from './context/AccountProvider';




const clientId = ''
function App() {
  return (
   
<GoogleOAuthProvider clientId = {clientId}>
 <AccountProvider>
  <Messenger/>
  </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
