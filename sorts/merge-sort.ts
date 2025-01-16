export const mergeSort = (list: number[]): number[] => {
    if (list.length > 1) {
        const half = Math.floor(list.length / 2)
        const partOne = mergeSort(list.slice(0, half))
        const partTwo = mergeSort(list.slice(half, list.length))
        list = sort(partOne, partTwo)
    }

    return list
}

const sort = (partOne: number[], partTwo: number[]): number[] => {
    let currentPositionPartOne = 0
    let currentPositionPartTwo = 0
    const result: number[] = []

    while (currentPositionPartOne < partOne.length && currentPositionPartTwo < partTwo.length) {
        let currentPartOne = partOne[currentPositionPartOne]
        let currentPartTwo = partTwo[currentPositionPartTwo]

        if (currentPartOne < currentPartTwo) {
            result.push(currentPartOne)
            currentPositionPartOne++
        } else {
            result.push(currentPartTwo)
            currentPositionPartTwo++
        }
    }

    return result.concat(
        currentPositionPartOne < partOne.length ?
            partOne.slice(currentPositionPartOne) :
            partTwo.slice(currentPositionPartTwo)
    )
}