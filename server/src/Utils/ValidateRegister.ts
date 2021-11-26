import RegisterInput from "@Types/Input/RegisterInput";

type ValidateType = {
    success: boolean;
    field?: string;
}

export default ({username, email, password, phone}: RegisterInput): ValidateType => {
    if (!email.includes('@')) return {
        success: false,
        field: 'email'
    };

    if (username.includes('@')) return {
        success: false,
        field: 'username'
    };

    if (password.length <= 6 || password.length > 20) return {
        success: false,
        field: 'password',
    };

    if (typeof Number.parseInt(phone) !== 'number' || phone.length < 9) return {
        success: false,
        field: 'phone',
    };

    return {
        success: true,
    };
}