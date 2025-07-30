import { useEffect, useState } from 'react'
import type { User } from '../types/user'
import { useUserContext } from '../contexts/UserContext'
import { fetchUsers } from '../api/userApi'

export function useUsers() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const { setTotalUsers, setFilteredUsersCount } = useUserContext()

    useEffect(() => {
        async function loadUsers() {
            try {
                setLoading(true)
                const data = await fetchUsers() 
                setUsers(data)
                setTotalUsers(data.length)
                setFilteredUsersCount(data.length)
            } catch (err) {
                setError('Erro ao carregar usuários.')
            } finally {
                setLoading(false)
            }
        }

        loadUsers()
    }, [setTotalUsers, setFilteredUsersCount])

    return { users, loading, error, searchTerm, setSearchTerm }
}
