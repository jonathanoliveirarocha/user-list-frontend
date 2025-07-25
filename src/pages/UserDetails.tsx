import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import type { User } from '../types/user'
import { fetchUserById } from '../api/userApi'
import ErrorMessage from '../components/ErrorMessage'
import UserDetailsSkeleton from '../components/UserDetailsSkeleton'
import { ArrowLeft, Mail, Phone, Globe, MapPin, Building } from "lucide-react"

export default function UserDetails() {
  return (<>
    <Header />
    <UserInformation />
  </>)
}

export function UserInformation() {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    setLoading(true)
    setError(null)

    const timer = setTimeout(() => {
    }, 1000)

    fetchUserById(Number(id))
      .then(data => {
        clearTimeout(timer)
        setTimeout(() => {
          setUser(data)
          setLoading(false)
        }, 1000)
      })
      .catch(() => {
        clearTimeout(timer)
        setTimeout(() => {
          setError('Erro ao buscar usuário.')
          setLoading(false)
        }, 1000)
      })

    return () => clearTimeout(timer)
  }, [id])


  const avatarUrl = user ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}` : ""

  if (loading) return <UserDetailsSkeleton />
  if (error) return <ErrorMessage message={error} />
  if (!user) return <ErrorMessage message="Usuário não encontrado!" />

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 mt-8 mb-12">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-[#fb5c47] hover:text-red-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para lista
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#fb5c47] px-6 py-8 text-white">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={avatarUrl}
                alt={`Avatar de ${user.name}`}
                className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/30"
              />
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                <p className="text-lg">@{user.username}</p>
                <p className="mt-2">{user.company.catchPhrase}</p>
              </div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactInfo email={user.email} phone={user.phone} website={user.website} />
            <AddressInfo address={user.address} />
          </div>

          <CompanyInfo company={user.company} />
        </div>

      </div>
    </>
  )
}

function ContactInfo({ email, phone, website }: { email: string, phone: string, website: string }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Informações de Contato</h2>
      <div className="space-y-4">
        <InfoItem icon={<Mail />} label="Email" value={email} href={`mailto:${email}`} isLink />
        <InfoItem icon={<Phone />} label="Telefone" value={phone} href={`tel:${phone}`} />
        <InfoItem icon={<Globe />} label="Website" value={website} href={`https://${website}`} isLink />
      </div>
    </section>
  )
}

function AddressInfo({ address }: { address: User["address"] }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Endereço</h2>
      <div className="flex items-start">
        <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1" />
        <div>
          <p className="text-gray-900">{address.street}, {address.suite}</p>
          <p className="text-gray-900">{address.city} - {address.zipcode}</p>
          <p className="text-sm text-gray-500 mt-2">
            Coordenadas: {address.geo.lat}, {address.geo.lng}
          </p>
        </div>
      </div>
    </section>
  )
}

function CompanyInfo({ company }: { company: User["company"] }) {
  return (
    <section className="px-6 pb-6 mt-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Informações da Empresa</h2>
      <div className="flex items-start">
        <Building className="w-5 h-5 text-gray-400 mr-3 mt-1" />
        <div>
          <h3 className="font-semibold text-gray-900">{company.name}</h3>
          <p className="text-gray-600 italic">"{company.catchPhrase}"</p>
          <p className="text-sm text-gray-500 mt-1">{company.bs}</p>
        </div>
      </div>
    </section>
  )
}

function InfoItem({
  icon,
  label,
  value,
  href,
  isLink = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  isLink?: boolean
}) {
  return (
    <div className="flex items-center">
      <div className="w-5 h-5 text-gray-400 mr-3">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        {isLink ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#fb5c47] hover:text-red-700">
            {value}
          </a>
        ) : href ? (
          <a href={href} className="text-gray-900">{value}</a>
        ) : (
          <span className="text-gray-900">{value}</span>
        )}
      </div>
    </div>
  )
}
