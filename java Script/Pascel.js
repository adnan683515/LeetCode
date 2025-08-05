/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) {
        return [[1]]
    }
    if (numRows === 2) {
        return [[1], [1, 1]]
    }
    const finalans = [[1], [1, 1]]

    for (let i = 3; i <= numRows; i++) {

        //   console.log(i)

        const newArray = []
        const lastArray = finalans[finalans.length - 1]



        for (let j = 0; j < lastArray.length - 1; j++) {
            const add = lastArray[j] + lastArray[j + 1]
            newArray.push(add)
        }
        finalans.push([1, ...newArray, 1])
        // console.log(newArray)
    }
    return finalans
};