import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './RegistrationForm.css';
//import App from './App.jsx'
import RegistrationForm from './RegistrationForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationForm />
  </StrictMode>,
)
