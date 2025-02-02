import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store.ts'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            closeOnClick={false}
            pauseOnHover={false}
            theme="dark"
          />
          <App />
        </Provider>
      </BrowserRouter>
  </StrictMode>,
)
