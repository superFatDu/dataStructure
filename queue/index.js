// FIFO => 先进先出
// push shift模拟

const queue = []
// 入队
queue.push(1)
// 出队
queue.shift()

// 使用场景：排队；事件循环异步队列；请求最近请求次数……