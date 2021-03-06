// 链表是一种常见的重要的数据结构。他是动态地进行存储分配的一种结构。链表和数组比较，不用事先确定存储空间，而是根据需要开辟内存空间。

// 单向链表：第0个节点成为头节点，他存放有第一个节点的首地址，他没有数据，只是一个指针变量。以下的每一个节点都分为两个域：1.数据域（存放这种实际的数据）；2.指针域（存放下一个节点的首地址）。
// 链表中的每一个节点都是同一种结构类型。

// 链表可以动态地进行存储分配，也就是说，链表是一个功能强大的数组，它可以在节点中定义多种数据类型，还可以根据需要随意增添，删除，插入节点。

// JavaScript没有链表，我们可以通过Object模拟

const a = { value: 'a' }
const b = { value: 'b' }
const c = { value: 'c' }
const d = { value: 'd' }

a.next = b
b.next = c
c.next = d

// 遍历链表
let p = a
while (p) {
  console.log(p.value)
  p = p.next
}

// 插入
const e = { value: 'e' }
// 在c与d之间插入e
c.next = e
e.next = d

// 删除
// 删除e
c.next = d