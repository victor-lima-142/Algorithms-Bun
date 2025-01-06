export const insertionSort = (list: number[]): number[] => {
    for (let i = 1; i < list.length; i++) {
        let currentIndex = list[i]
        while (currentIndex > 0 && currentIndex > list[currentIndex - 1]) {
            const current = list[currentIndex]
            const previous = list[currentIndex - 1]

            list[currentIndex] = previous
            list[currentIndex - 1] = current
            currentIndex--
        }
    }
    return list
}