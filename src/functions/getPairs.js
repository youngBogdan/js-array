function getPairs(arr, sum) {
    const arrayCopy = [...arr];
    const res = []

    arr.map(arrEl => {
        arrayCopy.map(arrCopyEl => {
            if (arrEl !== arrCopyEl && arrEl + arrCopyEl === sum) {
                if (!res.length) {
                    res.push([arrEl, arrCopyEl])
                } else {
                    let notIncludes = !res.some(el => (el.toString() === [arrEl, arrCopyEl].toString() || el.toString() === [arrCopyEl, arrEl].toString()))
                    if (notIncludes)
                        res.push([arrEl, arrCopyEl])
                }
            }
        })
    })

    return res
}

export default getPairs