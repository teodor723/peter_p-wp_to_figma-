import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router";
import routes from "./routes.tsx";
import './assets/app.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>,
)
