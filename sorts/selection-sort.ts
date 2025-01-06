export const selectionSort = (list: number[]): number[] => {
    for (let i = 0; i < list.length; i++) {
        const minIndex = getMinIndex(list, i)
        const current = list[i]
        const minValue = list[minIndex]
        list[i] = minValue
        list[minIndex] = current
    }
    return list
}

const getMinIndex = (list: number[], startPosition: number): number => {
    let min = startPosition
    for (let i = startPosition; i < list.length; i++) {
        if (list[i] < list[min]) {
            min = i
        }
    }
    return min
}