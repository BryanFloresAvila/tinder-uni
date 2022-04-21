import './App.css';
import { StyledContainer } from './components/Styles';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Home></Home>
      </StyledContainer>
    </Router>
  );
}

export default App;
