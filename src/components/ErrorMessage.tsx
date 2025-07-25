interface ErrorMessageProps {
    message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <div className="max-w-md mx-auto p-6 bg-red-100 border border-red-400 text-red-700 rounded-md shadow-md text-center">
            <svg
                className="mx-auto mb-3 h-10 w-10 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
            </svg>
            <p className="font-semibold text-lg">{message}</p>
        </div>
    )
}
