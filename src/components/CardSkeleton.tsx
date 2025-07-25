export default function Skeleton() {
    return (
        <div
            className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200 animate-pulse flex flex-col justify-between"
            style={{ minHeight: '220px' }}
        >
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200" />
                <div className="flex-1 space-y-2 py-1">
                    <div className="h-5 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
            </div>

            <div className="space-y-2 flex-grow py-1">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
        </div>


    )
}