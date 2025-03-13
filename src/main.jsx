import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/routes.jsx';
import { ConfigProvider } from 'antd';
import { mainTheme } from './theme/index.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={mainTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
)
