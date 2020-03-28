import Node from "../utils.Node.js";

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    // 1. 根据新元素创建节点
    const newNode = new Node();

    // 2. 判断链表是否为空
    if (this.head === null) {
      // 2.1 链表为空
      this.head = newNode;
    } else {
      // 2.2 链表不为空
      // 2.2.1 定义变量，保存当前找到的节点
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      // 2.2.2 找到最后一项，将其next赋值为newNode
      currentNode.next = newNode;
    }

    // 3. 链表长度增加1
    this.length = this.length + 1;
  }

  insert(index, data) {
    // 1. 对index进行边界判断
    if (index < 0 || index > this.length) {
      return false;
    }

    // 2. 根据data创建newNode
    const newNode = new Node(data);

    // 3. 判断插入的位置是否为第一个，即是否为0
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let i = 0;
      let currentNode = this.head;
      var previousNode = null;
      while (i++ < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      newNode.next = currentNode;
      previousNode.next = newNode;
    }

    // 4. 链表长度增加1
    this.length = this.length + 1;
  }

  get(index) {
    // 1. 边界判断
    if (index < 0 || index >= this.length) {
      return null;
    }

    // 2. 获取对应下标的data
    let i = 0;
    let currentNode = this.head;
    while (i++ < index) {
      currentNode = currentNode.next;
    }

    return currentNode.data;
  }

  indexOf(data) {
    // 1. 定义变量，从头开始
    let currentNode = this.head;
    let index = 0;

    // 2. 开始查找
    while (currentNode) {
      if (currentNode.data === data) {
        return index;
      }
      // 2.1 更新变量
      currentNode = currentNode.next;
      index = index + 1;
    }

    // 3. 找到最后，仍未找到，返回-1
    return -1;
  }

  update(index, data) {
    // 1. 边界判断
    if (index < 0 || index >= this.length) {
      return false;
    }

    // 2. 查找正确位置的节点
    let currentNode = this.head;
    let i = 0;
    while (i++ < index) {
      currentNode = currentNode.next;
    }

    // 3. 更新index位置的节点的data
    currentNode.data = data;

    return true;
  }

  removeAt(index) {
    // 1. 边界判断
    if (index < 0 || index >= this.length) {
      return false;
    }

    // 2. 首先判断删除的节点是否是第1个节点
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let i = 0;
      let currentNode = this.head;
      let previousNode = null;
      while (i++ < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      // 前一个节点的next指向当前节点的next即可
      previousNode.next = currentNode.next;
    }

    // 3. 链表长度减1
    this.length = this.length - 1;
    return true;
  }

  remove(data) {
    // 1. 获取data在链表中的索引
    let index = this.indexOf(data);

    // 2. 根据位置信息删除元素
    return this.removeAt(index);
  }

  isEmpty() {
    return 0 === this.length;
  }

  size() {
    return this.length;
  }

  toString() {
    // 1. 定义变量
    let currentNode = this.head;
    let resultStr = "";
    let count = 0;

    // 2. 遍历每一个节点
    while (currentNode) {
      if (count++ < this.length - 1) {
        resultStr = resultStr + currentNode.data + "-";
      } else {
        resultStr = resultStr + currentNode.data;
      }
    }
  }
}
