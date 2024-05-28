import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import store from './stores';

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
