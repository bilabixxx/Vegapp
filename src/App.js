import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home'
import { Detail } from './pages/Detail/Detail';
import { Error } from './pages/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
