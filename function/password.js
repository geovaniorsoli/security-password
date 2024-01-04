export const checkPassword = (password) => {
    const require = {
        "Comprimento  Mínimo (8 Caracteres)": password.length >= 8,
        "Letras Maiúsculas": /[A-Z]/.test(password),
        "Letras Minúsculas": /[A-Z]/.test(password),
        "Números": /[0-9]/.test(password),
        "Caracteres Especiais": /[^A-Za-z0-9]/.test(password),
    }
    return require
}