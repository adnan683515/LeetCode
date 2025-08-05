/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const obj = {}

    let ans = true
    for (let i = 0; i < s.length; i++) {



        if (s[i] in obj) {
            if (obj[s[i]] !== t[i]) {
                ans = false
            }
        }
        else {
            if (Object.values(obj).includes(t[i])) {
                ans = false
                break
            }
            obj[s[i]] = t[i]
        }
    }
    return ans
};