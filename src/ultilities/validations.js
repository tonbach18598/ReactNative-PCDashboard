export default class Validations{
    static isValidPassword(password){
        return password.length>=6?true:false
    }

    static isValidEmail(email){
        let reg='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
        return reg.test(email)
    }

    static isValidPhone(phone){
        let reg='/^\d{10}$/'
        return reg.test(phone)
    }
}