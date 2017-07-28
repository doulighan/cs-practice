class List {

  constructor(val) {
    let node = new Node(val)
    this.head = this.tail = node
  }

  getHead() {
    return this.head
  }

  append(val) {
    let node = new Node(val)
    this.tail.next = node
    this.tail = node
    
  }

  getSize() {
    let curr = this.head
    let i = 0
    while (curr !== null) {
      curr = curr.next
      i += 1
    }
    return i
  }

  contains(val) {
    let curr = this.head
    while(curr.next !== null) {
      if(curr.val === val) 
       return curr
       curr = curr.next
    }
    return false
  }

  printList() {
    let curr = this.head
    let i = 0
    while(curr.next !== null) {
      console.log(i, curr.val)
      curr = curr.next
      i++
    }
    console.log(i, curr.val )
  }

  insertBefore(targetVal, newVal) {
    let curr = this.head
    while(curr.next !== null) {
      if(curr.next.val === targetVal) {
        let newNode = new Node(newVal)
        newNode.next = curr.next
        curr.next = newNode
        
        return newNode
      }
      curr = curr.next
    }
    return false
  }

//   insertAt(idx, newVal) {
//     let newNode = new Node(newVal)

//     if(idx === 0)  {
//       let temp = this.head
//       this.head = newNode
//       newNode.next = temp
//       return newNode
//     }

//     let prev = this.head
//     let curr = this.head.next
//     let i = 1

//     while(curr !== null) {
//       if(i === idx) {
//         prev.next = newNode
//         newNode.next = curr
//         return newNode
//       }
//       prev = curr
//       curr = curr.next
//       i += 1
//     }
//     return false
//   }
// }

 insertAt(idx, newVal) {
    let newNode = new Node(newVal)

    if(idx === 0)  {
      let temp = this.head
      this.head = newNode
      newNode.next = temp
      return newNode
    }

    let prev = this.head
    let curr = this.head.next
    let i = 1

    while(i < idx) {
      if (curr.next === null) {
        curr.next = new Node(null)
        
      }
      prev = curr
      curr = curr.next
      i += 1
    }
    prev.next = newNode
    newNode.next = curr
  
    return newNode
  }

  deleteFirstFound(val){
    let prev = this.head
    let curr = this.head.next

    if (prev.val === val) {
      this.head = this.head.next
      
      return prev
    }

    while(curr.next !== null) {
      if( curr.val === val ) {
        console.log('delete', curr.val)
        prev.next = curr.next
       
        return curr
      }
      let temp = curr
      curr = curr.next
      prev = temp
      prev.next = curr
    }
    return false
  }

  deleteAt(idx) {
    let prev = this.head
    let curr = this.head.next

    if (idx === 0 ) {
      this.head = this.head.next
      return prev
    }

    let i = 1
    while (curr.next !== null) {
      if (i === idx){
        prev.next = curr.next
        return curr
      } 
      prev = curr
      curr = curr.next
      i += 1
    }
    return false
  }

  hasCircularReference() {
    let a = this.head
    let b = this.head.next
    while(a.next !== null) {
      console.log(a.val)
      if(a === b)
        return true
      a = a.next
      b = b.next.next
    }
  }


  hasCircularReferenceSimeple() {
    let curr = this.head.next
    while(curr.next !== null) {
      if(curr === this.head)
        return true
    }
    return false
  }

  appendNode(node) {
    this.tail.next = node
    this.tail = node
    console.log(this.tail)
    console.log(this.head)
  }
}



class Node {
  constructor(val, next=null) {
    this.val = val,
    this.next = next
  }
}


var list = new List('a')
list.append('b')
list.append('c')
list.append('d')
list.append('e')
list.append('f')

var head = list.getHead()
var node = new Node('z', head)
list.appendNode(node)

// console.log('size:', list.getSize())
// console.log('contains e?:', list.contains('e'))
// console.log('insert before d:', list.insertBefore('d', 1))
// console.log('hello', list.insertAt(3, 'Hi'))
// console.log('insert at: 0', list.insertAt(5, '3'))
// console.log('insert at: 0', list.insertAt(3, '2'))
// console.log('insert at: 0', list.insertAt(10, '1'))
// console.log(list.deleteAt(2))
console.log(list.hasCircularReference())
// list.printList()
// console.log(list.getSize())
