import './App.css';
import Messenger from './components/Messenger'

import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider  from './context/AccountProvider';




const clientId = '1064735704394-2o51t5qbrlkvntfkcd11he7e9pqlps1q.apps.googleusercontent.com'
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
