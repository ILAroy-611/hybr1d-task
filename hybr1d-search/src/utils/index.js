export const formatDate = (date) => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const newDate = new Date(date)
    const dateString = `${newDate.getHours()}:${newDate.getMinutes()} ${
        monthNames[newDate.getMonth()]
    } ${newDate.getFullYear()}, ${newDate.getDate()}`

    return dateString
}
