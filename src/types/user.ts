export interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export interface UserPreview {
    id: number
    name: string
    username: string
    email: string
    phone: string
    address: {
        city: string
    }
    company: {
        name: string
    }
}