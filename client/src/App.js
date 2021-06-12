
import { BrowserRouter as Router}from 'react-router-dom'
import Navbar from './components/layout/Navbar'
function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />

        <div className="grid wide">
          <div className="row">
            <div className="col l-6 l-o-3 ">
              <h1>hello</h1>
            </div>
            
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
