import { Link } from 'react-router-dom'
import { ArrowLeft } from "lucide-react"


export default function UserDetailsSkeleton() {
    return (
        <div className="max-w-4xl mx-auto px-4 mt-8 mb-12">
            <div className="mb-6">
                <Link to="/" className="inline-flex items-center text-[#fb5c47] hover:text-red-700 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para lista
                </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="bg-[#fb5c47] px-6 py-8 text-white">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                        <div className="w-24 h-24 rounded-full bg-white/30" />
                        <div className="text-center md:text-left space-y-2">
                            <div className="h-6 w-40 bg-white/30 rounded" />
                            <div className="h-4 w-32 bg-white/30 rounded" />
                            <div className="h-4 w-56 bg-white/30 rounded mt-2" />
                        </div>
                    </div>
                </div>

                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="h-5 w-44 bg-gray-200 rounded" />
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-3">
                                <div className="w-5 h-5 bg-gray-300 rounded-full" />
                                <div className="space-y-2">
                                    <div className="h-3 w-20 bg-gray-200 rounded" />
                                    <div className="h-4 w-40 bg-gray-300 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <div className="h-5 w-44 bg-gray-200 rounded" />
                        <div className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-gray-300 rounded-full mt-1" />
                            <div className="space-y-2">
                                <div className="h-4 w-60 bg-gray-200 rounded" />
                                <div className="h-4 w-52 bg-gray-200 rounded" />
                                <div className="h-3 w-40 bg-gray-300 rounded mt-2" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 pb-6 mt-8 pt-8 border-t border-gray-200 space-y-4">
                    <div className="h-5 w-52 bg-gray-200 rounded" />
                    <div className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-gray-300 rounded-full mt-1" />
                        <div className="space-y-2">
                            <div className="h-4 w-40 bg-gray-300 rounded" />
                            <div className="h-3 w-64 bg-gray-200 rounded" />
                            <div className="h-3 w-48 bg-gray-200 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
