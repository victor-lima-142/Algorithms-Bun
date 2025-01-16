// Creating a Stack Data Struct with Set to improve performance

export class Stack {
    private stack: Set<number> = new Set()

    push(item: number): void {
        this.stack.add(item)
    }

    pop(): number | undefined {
        if (this.stack.size > 0) {
            const item = this.stack.values().next().value
            if (item) this.stack.delete(item)
            return item
        }
        return undefined
    }

    peek(): number | undefined {
        if (this.stack.size > 0) {
            return this.stack.values().next().value
        }
        return undefined
    }

    size(): number {
        return this.stack.size
    }

    isEmpty(): boolean {
        return this.stack.size === 0
    }

    clear(): void {
        this.stack = new Set([])
    }

    print(): void {
        console.log(this.stack)
    }

    toArray(): number[] {
        return Array.from(this.stack)
    }
}