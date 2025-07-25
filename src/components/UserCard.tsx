import { Link } from 'react-router-dom'
import type { User } from '../types/user'
import { Mail, MapPin, Phone } from "lucide-react"


interface Props {
    user: User
}

export default function UserCard({ user }: Props) {
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`

    return (
        <Link to={`/user/${user.id}`}>
            <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-400 p-6 cursor-pointer border border-gray-200 hover:border-[#fb5c47]">
                <div className="flex items-center space-x-4 mb-4">
                    <img
                        src={avatarUrl || "/placeholder.svg"}
                        alt={`Avatar de ${user.name}`}
                        className="w-16 h-16 rounded-full bg-gray-100"
                        loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{user.name}</h3>
                        <p className="text-sm text-gray-500 truncate">@{user.username}</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{user.email}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{user.phone}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{user.address.city}</span>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 truncate">{user.company.name}</p>
                </div>
            </div>
        </Link>
    )
}
