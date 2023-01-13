export const getQueryStringFromObject = (options) => {
    //?status=active&search=barev
    let query = ''
    for (const key in options) {

        const value = options[key]

        if (value) {
            if (query) {
                query += `&${key}=${value}`
            } else {
                query += `?${key}=${value}`
            }
        }



    }

    return query

}