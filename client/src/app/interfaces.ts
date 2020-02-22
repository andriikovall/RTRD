export interface User {
    _id?: string
    login: string
    password: string
    email?: string
    firstName?: string
    lastName?: string
    telegram?: string
    role?: string
}

export interface Message {
    message: string
}

export interface Token {
    token: string
}

export interface Event {
    _id?: string
    title?: string
    author?: string
    vote?: number
    isActive?: boolean
    sponsors?: Sponsor[]
    region?: string
    date?: string
}

export interface Sponsor {
    user: string
    cost: number
}
