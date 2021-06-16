// Object 对象保存的键值对，但局限是键值只能是String/Symbol。

// Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。

// 一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个  for...of 循环在每次迭代后会返回一个形式为[key，value]的数组。

// set(), get(), has(), clear(), keys(), values(), entries(), delete(), forEach()

const map = new Map()
// 增
map.set('x', 'xxx')
map.set('y', 'yyy')
const obj = { a: 1 } // 引用类型得把地址保存起来，如果直接把{a: 1}作为键值，那么因为每一个{a: 1}的地址都不同，则存的值是拿不到了
map.set(obj, 'a equals 1')

// 删
map.delete('x')

// 改
map.set('x', 'xxxxx') // 覆盖


// 取交集 LC 349
// 每个元素唯一
// 可以忽略顺序

const intersection = function (nums1, nums2) {
  const map = new Map()
  nums1.forEach(item => map.set(item, true))
  const ret = []
  nums2.forEach(n => {
    if (map.get(n)) {
      ret.push(n)
      map.delete(n)
      // map.set(n, false)
    }
  })
  return ret
}

console.log(intersection([1, 9, 3, 2, 3, 4, 5, 3], [3, 5, 6, 7, 12, 34]))

// 最大不重复字串长度
const strLen = function (s) {
  let l = 0;
  let len = 0;
  const map = new Map()
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) l = map.get(s[r]) + 1
    len = Math.max(len, r - l + 1)
    map.set(s[r], r)
  }
}

