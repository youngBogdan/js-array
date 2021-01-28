import getPairs from "../functions/getPairs.js";


const resultMatched = (arr, sum, expected) => {
    let res = getPairs(arr, sum);
    res = res.sort()
    expected = expected.sort()
    if (res.length === expected.length) {
        let isSame = res.map((el, index) => expected[index].every((e, i) => e === el[i])).every(el => el)
        if (isSame)
            return true
    }
    return false
}

export default resultMatched