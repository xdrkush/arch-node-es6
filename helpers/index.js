export default {
    // On définit notre fonction
    limitArray: (arr, limit) => {
        if (!Array.isArray(arr)) {
            return [];
        }
        return arr.slice(0, limit);
    },
    // Upper Case
    upper: (str) => str.toUpperCase()

}