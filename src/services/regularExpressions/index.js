

export const regularExpressions = {
    username :  /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    firstName : /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    lastName : /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    ci:/^\d{6,10}[ ]?\w[A-Z0-9]?$/,
    password:/^[a-zA-Z0-9-_ @#$&]{5,15}$/, // 5 a 12 digitos con los siguientes caracteres permitidos (a-z, A-Z, 0-9, y $ @ # & - _ ).
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-._]+\.[a-zA-Z0-9-.]*[a-z]$/,
    phonoNumber: /^([+]{1}[0-9- ]{7,15}|[0-9 -]{7,15})$/, // 7 a 14 numeros.
    roleUser:/^(Administrador|Usuario)$/

}