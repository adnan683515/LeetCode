/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) {
        return [1]
    }
    if (rowIndex === 1) {
        return [1, 1]
    }
    const finalans = [[1], [1, 1]]
    for (let i = 2; i <= rowIndex; i++) {
        const newArray = []
        const lastArray = finalans[finalans.length - 1]
        for (let j = 0; j < lastArray.length - 1; j++) {
            const add = lastArray[j] + lastArray[j + 1]
            newArray.push(add)
        }
        finalans.push([1, ...newArray, 1])
        if (rowIndex === i) {
            return finalans[finalans.length - 1]
        }
    }
    return finalans
};