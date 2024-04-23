export const fetchAPI = async (url: string, options: any) => {
    const token = '1234578901011121314151617181920'

    const response = await fetch(url, {
        // headers: {
        //     Authorization: 'Bearer ' + token,
        // },
        method: 'POST',
        ...options,
    })

    const data = await response.json()

    return data
}