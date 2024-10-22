import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'


import RootLayout from './routes/layouts/root-layout'
import DashboardLayout from './routes/layouts/dashboard-layout'


import IndexPage from './routes/index'
import ContactPage from './routes/contacts'
import SignInPage from './routes/sign-in'
import SignUpPage from './routes/sign-up'
import DashboardPage from './routes/dashboard'
import InvoicesPage from './routes/dashboard.invoices'

const router = createBrowserRouter([
  {
    element: <RootLayout children={undefined} />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/sign-in/*', element: <SignInPage /> },
      { path: '/sign-up/*', element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: 'dashboard',
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/dashboard/invoices', element: <InvoicesPage /> },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
