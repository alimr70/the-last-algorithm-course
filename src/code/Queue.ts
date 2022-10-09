type Node<T> = {
  value: T
  next?: Node<T>
}

export default class Queue<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    const node = {value: item} as Node<T>
    this.length++
    if (!this.tail){
      this.tail = this.head = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  deque(): T | undefined {
    if (!this.head){
      return undefined
    }

    this.length--

    const head = this.head
    this.head = this.head.next

    // free -we don't need to do that in JS but in other low level languages we need to clean up memory
    head.next = undefined

    if (this.length === 0){
      this.tail = undefined
    }

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}