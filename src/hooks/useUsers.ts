import { useEffect, useState } from 'react'
import type { User } from '../types/user'
import { useUserContext } from '../contexts/UserContext'

export function useUsers() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const { setTotalUsers, setFilteredUsersCount } = useUserContext()

    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true)
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data: User[] = await res.json()
                setUsers(data)
                setTotalUsers(data.length)
                setFilteredUsersCount(data.length)
            } catch (err) {
                setError('Erro ao carregar usuários.')
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [setTotalUsers, setFilteredUsersCount])

    return { users, loading, error, searchTerm, setSearchTerm }
}
