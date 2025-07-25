import type { User } from '../types/user'


export async function fetchUsers(): Promise<User[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error('Erro ao buscar usuários!')
    return res.json()
}

export async function fetchUserById(id: number): Promise<User> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) {
        throw new Error('Erro ao buscar usuário por ID!')
    }
    return res.json()
}