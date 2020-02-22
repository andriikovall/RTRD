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
