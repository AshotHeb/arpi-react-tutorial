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

export const isValidDate = (date) => {
    const dateRegexp = /\d{4}-\d{2}-\d{2}/
    return dateRegexp.test(date)
}


export const queryToObject = (queryString) => {
    return queryString
        .replace('?', '')
        //'status=active&search=barev'
        .split('&')
        //['status=active','search=barev']
        .reduce((queryObject, item) => {
            //'search=barev'
            const [key, value] = item.split('=')
            //['search' ,'barev']
            queryObject[key] = isValidDate(value) ? new Date(value) : value
            return queryObject
        }, {})
}
