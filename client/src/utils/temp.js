export default function (type, number) {
    /* kelvin to fahrenheit */
    if (type === 'f') {
        return (Math.floor(number * 9 / 5 - 459.67))
    }
    /* kelvin to celsius */
    if (type === 'c') {
        return (Math.floor(number - 273.15))
    }

}