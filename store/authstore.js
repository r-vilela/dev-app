import { create } from 'zustand'

const useAuthStore = create((set) => ({
    usuarioLogado: false,
    usuario: '',
    senha: '',
    token: '',

    login: async (usuario, senha) => {
        try {
            const loginResponse = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  
                  username: usuario, // emilys
                  password: senha, // emilyspass
                  expiresInMins: 30, // optional, defaults to 60
                }),
                credentials: 'include' // Include cookies (e.g., accessToken) in the request
            })
            const loginData = await loginResponse.json()
            console.log(loginData)
        } catch (error) {

        }
    }
}))