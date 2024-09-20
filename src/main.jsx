
import { createRoot } from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'

import App from './components/pages/App'
createRoot(document.getElementById('root')).render(  <div>
   
    <BrowserRouter>
    <App/>
    </BrowserRouter>
   
  </div>
)
