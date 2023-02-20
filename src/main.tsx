import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as Components from './components'
import { ThemeProvider } from './context/theme'

import '../global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
