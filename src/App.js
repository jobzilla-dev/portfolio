import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useEffect, useState } from 'react';
import './App.css';
import "./assets/fonts/Karantina-Regular.ttf";
import Lottie from './components/lottie/lottie';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  const handleClickScroll = () => {
    const element = document.getElementById('id-ng-element-mo');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      {isLoading ? <Lottie /> :
        // <div className='container1'>

          <div className="App">

            <header className="App-header">
            {/* <button className="btn-scroll" onClick={handleClickScroll}>
              Scroll Down
            </button> */}
              <Home />

              <About />

              <Project />

            </header>
          </div>
        // </div>
      }


    </>
  );
}

export default App;