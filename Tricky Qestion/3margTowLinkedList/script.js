//  Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

//   @param {ListNode} list1
//  @param {ListNode} list2
//  // @return {ListNode}

var margeTwoLists = function (l1, l2) {
	let dummyHead = new ListNode(0);
	let currentNode = dummyHead;

	while (l1 != null && l2 != null) {
		if (l1.val < l2.val) {
			currentNode.next = l1;
			l1 = l1.next;
		} else {
			currentNode.next = l2;
			l2 = l2.next;
		}
		currentNode = currentNode.next;
	}
	if (l1 != null) {
		currentNode.next = l1;
	}
	if (l2 != null) {
		currentNode.next = l2;
	}
	return dummyHead.next;
};
let l1 = [1, 2, 3];
let l2 = [1, 2, 4];

console.log(margeTwoLists(l1, l2));
