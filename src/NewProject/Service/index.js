import Credintial from '../Credintials/Credintial.json'
 export const isLogin = () => {
    if (localStorage.getItem('access')) {
        return true
    }
    return false
}


export const login = (data) => {
    if (data.email === Credintial.email) {
        if (data.password === Credintial.password) {
            localStorage.setItem('access', Credintial.email)
            return 'Success'
        }
        else {
            return 'False'
        }
    }
    else {
        return 'False'
    }
}
