import Logo from '../assets/logo.png'

export default function Header() {
    return (
        <header className="bg-white shadow-sm text-white border-b w-full" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <img src={Logo} alt="Logo da empresa" />
            </div>
        </header >
    )
}

