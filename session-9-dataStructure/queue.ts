/*
Queue

FIFO = First In - First Out
*/

interface IQueue {
    enqueue(element: number): void // tidak ada return
    dequeue(): number | undefined // return number
    getElements(): number[] // return number[]
}

class Queue implements IQueue {
    #container: number[] = []

    enqueue(element: number) {
        this.#container.push(element)
    }

    dequeue(): number | undefined{
        return this.#container.shift()
    }

    getElements(): number[] {
        return this.#container
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.getElements())

queue.dequeue()
console.log(queue.getElements())