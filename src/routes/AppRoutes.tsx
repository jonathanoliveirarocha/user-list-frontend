import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UserDetails from '../pages/UserDetails'
import { UserProvider } from '../contexts/UserContext'

export default function AppRoutes() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
        </UserProvider>
    )
}
