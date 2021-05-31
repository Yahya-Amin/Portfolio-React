
import "./app.scss";
import Main from './Compenents/main/Main';
import Blog from './Pages/Blog';
import {BrowserRouter as Router, Route} from 'react-router-dom';






function App() {
    
  return (
   
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/blog" component={Blog} />
  </Router>

  
  );
}

export default App;
