import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/GlobalStyles'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'
import { createTheme, ThemeProvider } from '@mui/material/styles';


  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <GlobalStyle/>
      </PersistGate>
    </Provider>
    </ThemeProvider>

  </React.StrictMode>,
)
