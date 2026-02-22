import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Nav } from './components/nav';
import { AppRouting } from './components/AppRouting';

function App() {
  const basename = process.env.PUBLIC_URL || '/';
  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
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
