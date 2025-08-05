/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const obj = {}
    for (let i = 0; i < s.length; i++) {
        if (s[i] in obj) {
            obj[s[i]].val++
            obj[s[i]].char.push(s[i])
        }
        else {
            obj[s[i]] = {
                val: 1,
                char: [s[i]]
            }

        }
    }
    const desenDingValue = Object.values(obj).sort((a, b) => b.val - a.val)
    let ans = ""

    for (let i = 0; i < desenDingValue.length; i++) {
        const jn = desenDingValue[i].char.join("")
        ans += jn
    }
    return ans

};