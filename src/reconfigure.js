export const reconfigure = (from , to) => {

    if(typeof from !== "string") throw new Error ("Debe ser un string")
    if(typeof to !== "string") throw new Error ("Debe ser un string")

    const sameLength = from.length === to.length
    if(!sameLength) return false

    const sameLetter = new Set(from).size === new Set(to).size
    if(!sameLetter) return false

    const transformaciones = {} 
    for (let i = 0; i < from.length; i++) {

        const fromLetter = [from[i]]
        const toLetter = [to[i]]

        const storedLetter = transformaciones[fromLetter]
        if (storedLetter && storedLetter !== toLetter) return false

        transformaciones[fromLetter] = toLetter
    }

    return true

}