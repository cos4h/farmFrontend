import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import HomePage from './pages/HomePage';
import BillFormPage from './pages/BillFormPage';
import ProfilePage from './pages/ProfilePage';
import BillsPage from './pages/BillsPage';
import { BillProvider } from './context/BillsContext.jsx';
import Navbar from './components/Navbar.jsx';

import ProtectedRoute from './ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <BillProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path= "/" element={<HomePage />} />
            <Route path= "/login" element={<LoginPage />} />
            <Route path= "/register" element={<RegisterPage />} />
  
            <Route element={<ProtectedRoute />}>
              <Route path= "/bills" element={<BillsPage />} />
              <Route path= "/add-bill" element={<BillFormPage />} />
              <Route path= "/bill/:id" element={<BillFormPage />} />
              <Route path= "/profile" element={<ProfilePage />} />
            </Route>
          </Routes>  
        </BrowserRouter>
      </BillProvider>
    </AuthProvider>
  )
}

