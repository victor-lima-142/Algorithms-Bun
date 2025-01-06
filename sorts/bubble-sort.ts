export const bubbleSort = (list: number[]): number[] => {
    let n = list.length;
    let swapped: boolean;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (list[i] > list[i + 1]) {
                [list[i], list[i + 1]] = [list[i + 1], list[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return list;
};
