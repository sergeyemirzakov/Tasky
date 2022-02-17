import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './index.scss';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      500: '#2262EA',
      600: '#0c4fd3',
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Roboto, sans-serif',
        color: 'gray.600',
        backgroundColor: 'gray.100',
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
