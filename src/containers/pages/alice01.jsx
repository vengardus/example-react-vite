import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import GastosForm from '../../components/alice01/GastosForm'
import GastosList from '../../components/alice01/GastosList'


function App() {
  return (
    <div>
      <Provider store={store}>
        <GastosForm />
        <GastosList />
      </Provider>
    </div>
  );
}

export default App;
