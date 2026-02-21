import './App.css';
import {Provider} from "react-redux"
import {store}  from './redux/store';
import {Routing} from './components/routing' 
import {Nav} from './components/nav'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <div className="App">
        <Nav></Nav>
        <Routing></Routing>
       </div>
     </BrowserRouter>
  </Provider> 
  );
}

export default App;
