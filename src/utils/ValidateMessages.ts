export const requiredError = (field: string): string => {
    return `Поле ${field} является обязательным к заполнению`
}

export const passwordValid = (text: string): string => {
    return `Пароль должен содержать минимум 1 ${text}`
}