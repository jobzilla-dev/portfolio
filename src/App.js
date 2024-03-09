import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useEffect, useState } from 'react';
import './App.css';
import "./assets/fonts/Karantina-Regular.ttf";
import Lottie from './components/lottie/lottie';
import Home from './pages/home';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  return (
    <>
      {isLoading ? <Lottie /> :
        // <div className='container1'>

          <div className="App">

            <header className="App-header">

              <Home />

            </header>
          </div>
        // </div>
      }


    </>
  );
}

export default App;
