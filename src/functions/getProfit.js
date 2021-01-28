const getProfit = arr => {
    let res = []
    let middle = 0
    arr.map((el, index) => {
        for (let num = index; num < arr.length; num++) {
            if (arr[num] - el > middle) {
                middle = arr[num] - el
                res = [index, num]
            }
        }
    })

    return res
}

export default getProfit