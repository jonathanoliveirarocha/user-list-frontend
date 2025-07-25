import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface UserContextType {
  currentPage: number
  setCurrentPage: (page: number) => void
  usersPerPage: number
  totalUsers: number
  filteredUsersCount: number
  setTotalUsers: (value: number) => void
  setFilteredUsersCount: (value: number) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalUsers, setTotalUsers] = useState(0)
  const [filteredUsersCount, setFilteredUsersCount] = useState(0)
  const usersPerPage = 6

  return (
    <UserContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        usersPerPage,
        totalUsers,
        filteredUsersCount,
        setTotalUsers,
        setFilteredUsersCount
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUserContext deve ser usado dentro de UserProvider!')
  return context
}
