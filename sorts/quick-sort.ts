export const quickSort = (list: number[]): number[] => {
    if (list.length <= 1) return list

    const pivot = list[Math.floor(list.length / 2)]
    const left = list.filter(num => num < pivot)
    const right = list.filter(num => num > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}