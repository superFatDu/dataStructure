// ES5
function ListNode (val, next) {
  this.val = val ? val : 0
  this.next = next ? next : null
}

// ES6

class ListNode {
  constructor(val, next) {
    this.val = val ? val : 0
    this.next = next ? next : null
  }
}

// java
class ListNode {
  int val;
  ListNode next;

  ListNode (int val) {
    this.val = val;
  }
}