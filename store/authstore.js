import { create } from 'zustand'

const useAuthStore = create((set) => ({
    usuarioLogado: false,
    usuario: '',
    senha: '',
    token: '',
    mensagemError: undefined, 

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

            if(loginData.message){
                set({mensagemError: `Ocorreu um erro: ${loginData.message}`})
            }
            
            if(loginData.accessToken){console.log(loginData.accessToken)}

            if(loginData.accessToken){
                const logarUsuario = await fetch('https://dummyjson.com/auth/me', {
                    method: 'GET',
                    headers: {
                    'Authorization': 'Bearer' + loginData.accessToken,
                    }, 
                    credentials: 'include' // Include cookies (e.g., accessToken) in the request
                })

                const logarUsuarioData = await logarUsuario.json()

                set({
                    usuarioLogado: true,
                    usuario: usuario,
                    senha: senha,
                    token: loginData.accessToken,
                    UserActivation: logarUsuarioData.avatar
                })
            }                

        } catch (error) {

        }
    },

    logout: () => set({
        usuarioLogado: false, 
        usuario: '', 
        senha: '', 
        token: ''
    })
}))

export default useAuthStore