import { useUserContext } from "../contexts/UserContext"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Pagination() {
    const {
        currentPage,
        setCurrentPage,
        usersPerPage,
        filteredUsersCount,
    } = useUserContext()

    const totalPages = Math.ceil(filteredUsersCount / usersPerPage)

    if (totalPages <= 1) return null

    const startIndex = (currentPage - 1) * usersPerPage + 1
    const endIndex = Math.min(currentPage * usersPerPage, filteredUsersCount)

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const handlePageClick = (page: number) => {
        setCurrentPage(page)
    }

    const getPageNumbers = () => {
        const pages = []
        const maxVisiblePages = 5
        const start = Math.max(1, currentPage - 2)
        const end = Math.min(totalPages, start + maxVisiblePages - 1)

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        return pages
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-gray-600">
                    Mostrando {startIndex} a {endIndex} de {filteredUsersCount} usuários
                </div>

                <div className="flex items-center space-x-2">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Anterior
                    </button>

                    <div className="flex space-x-1">
                        {getPageNumbers().map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageClick(page)}
                                className={`px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${page === currentPage
                                    ? "bg-[#fb5c47] text-white"
                                    : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Próxima
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
            </div>
        </div>
    )
}
