class treeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root) {
    let result = [];
    
    function traverse(node) {
        if (!node) return; // Jika node kosong, berhenti
        traverse(node.left);   // Rekursi ke subtree kiri
        result.push(node.val); // Simpan nilai node saat ini
        traverse(node.right);  // Rekursi ke subtree kanan
    }

    traverse(root);
    return result;
}

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversal(root)); // Output: [1, 3, 2]
