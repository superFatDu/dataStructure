// Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。

// add(), clear(), delete(), has(), values(), entries(), forEach()

let set = new Set()

set.add(1)
set.has(1) // true
set.values()
set.entries()
set.clear()
set.delete(1)

// 去重
const arr = [1, 6, 8, 3, 2, 2, 4, 4, 5]
let s = new Set(arr)
console.log([...s].sort((a, b) => a - b))
// 判断元素是否在集合中
console.log(s.has(2))
// 求交集
let s1 = new Set([9, 6, 22, 2, 5])
let s2 = new Set([...s].filter(item => s1.has(item)))
console.log(s2)