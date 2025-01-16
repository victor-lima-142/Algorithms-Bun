// Creating a Queue Data Struct with Set to improve performance

export class Queue {
    private queue: Set<number> = new Set()
    private front: number = 0

    enqueue(item: number): void {
        this.queue.add(item)
    }

    dequeue(): number | undefined {
        if (this.front < this.queue.size) {
            const item = this.queue.values().next().value
            if (item) this.queue.delete(item)
            return item
        }
        return undefined
    }

    peek(): number | undefined {
        if (this.front < this.queue.size) {
            return this.queue.values().next().value
        }
        return undefined
    }

    size(): number {
        return this.queue.size - this.front
    }

    isEmpty(): boolean {
        return this.front === this.queue.size
    }

    clear(): void {
        this.queue = new Set([])
        this.front = 0
    }

    print(): void {
        console.log(this.queue)
    }

    toArray(): number[] {
        return Array.from(this.queue)
    }
}