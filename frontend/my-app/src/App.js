import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Nav } from './components/nav';
import { AppRouting } from './components/AppRouting';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <main className="App-main">
            <AppRouting />
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
