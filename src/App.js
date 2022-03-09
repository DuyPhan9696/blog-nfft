import './App.css';
import Header from './layouts/header';
import Footer from './layouts/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicRoute from './routes/public'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      < PublicRoute />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
