// import React, { Component } from 'react';
// import './assets/css/App.css';
// import Home from './components/Home';
// import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';


// import Detail from './components/Detail';
// import History from './components/History';


// class App extends Component {
//   render() {
//     return (

//       <div className="App">
//         {/* <Home /> */}
//         <Router>
//           <Routes>
//             <Route path='/' exact Component={Home}/>
//             <Route path='/Detail' Component={Detail}/>
//             <Route path='/History' Component={History}/>
//           </Routes>
//           <Link to="/">Go to Home</Link><br/>
//           <Link to="/detail">Go to detail</Link><br/>
//           <Link to="/history">Go to history</Link>
//         </Router>


//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './assets/css/App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Detail from './components/Detail';
import History from './components/History';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Detail' element={<Detail />} />
            <Route path='/History' element={<History />} />
          </Routes>
          <div className="button-container">
            <Link to="/" className="button">Home</Link>
            <Link to="/Detail" className="button">Detail</Link>
            <Link to="/History" className="button">History</Link>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


