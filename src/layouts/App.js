import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation'
import Page from './Page'
import {BrowserRouter} from 'react-router-dom'
import Footer from './Footer'
function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
    
      <Navigation/>
    
      <Page/>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
