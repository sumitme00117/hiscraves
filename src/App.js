
import './App.css';
import {lazy, Suspense} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Products = lazy(()=>import('./components/Products'))
const Trending = lazy(()=>import('./components/Trending'))
const Collections = lazy(()=>import('./components/Collections'))
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Suspense fallback={<div>Loading...</div>}>
      <Products></Products>
      <Trending></Trending>
      <Collections></Collections>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
