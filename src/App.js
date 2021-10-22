import Routes from './routes/Routes'
import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
    <GlobalStyle />
    </Router>
  );
}

export default App;
