export const requiredError = (field: string): string => {
    return `Поле ${field} является обязательным к заполнению`
}
export const passwordError = (text: string): string => {
    return `Пароль должен содержать минимум 1 ${text}`
}