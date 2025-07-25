import { Search } from "lucide-react"
import { useUserContext } from "../contexts/UserContext"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const { totalUsers, filteredUsersCount } = useUserContext()

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#fb5c47] focus:border-transparent outline-none"
          />
        </div>

        <div className="text-gray-600 text-sm font-medium min-w-[140px] text-right">
          {filteredUsersCount} de {totalUsers} usuários encontrados
        </div>
      </div>
    </div>
  )
}
