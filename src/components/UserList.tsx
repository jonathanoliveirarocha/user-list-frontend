import { useEffect, useMemo, useState } from 'react'
import { useUsers } from '../hooks/useUsers'
import { useUserContext } from '../contexts/UserContext'
import UserCard from '../components/UserCard'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import ErrorMessage from '../components/ErrorMessage'
import Skeleton from './CardSkeleton'

export default function UserList() {
    const { users, loading, error, searchTerm, setSearchTerm } = useUsers()
    const {
        currentPage,
        setCurrentPage,
        usersPerPage,
        setFilteredUsersCount
    } = useUserContext()

    const [showSkeleton, setShowSkeleton] = useState(true)

    useEffect(() => {
        let timer: NodeJS.Timeout

        if (!loading) {
            timer = setTimeout(() => {
                setShowSkeleton(false)
            }, 1000)
        } else {
            setShowSkeleton(true)
        }

        return () => clearTimeout(timer)
    }, [loading])

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [users, searchTerm])

    useEffect(() => {
        setFilteredUsersCount(filteredUsers.length)
    }, [filteredUsers.length, setFilteredUsersCount])

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage)
    const startIndex = (currentPage - 1) * usersPerPage
    const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage)

    const handleSearchChange = (value: string) => {
        setSearchTerm(value)
        setCurrentPage(1)
    }

    if (loading || showSkeleton) {
        return (
            <div className="space-y-6">
                <SearchBar value={searchTerm} onChange={handleSearchChange} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Skeleton key={i} />
                    ))}
                </div>
            </div>
        )
    }

    if (error) return <ErrorMessage message={error} />

    return (
        <div className="space-y-6">
            <SearchBar value={searchTerm} onChange={handleSearchChange} />

            {currentUsers.length === 0 ? (
                <p className="text-center text-gray-500">Nenhum usuário encontrado.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentUsers.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}

            {totalPages > 1 && (
                <Pagination />
            )}
        </div>
    )
}
