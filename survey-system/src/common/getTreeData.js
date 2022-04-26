
const getTreeData = (data) => {
    const tree= [];
    const childOf = {};
    data.forEach((item) => {
        const { id, parentId } = item;
        childOf[id] = childOf[id] || [];
        item.children = childOf[id];
        parentId ? (childOf[parentId] = childOf[parentId] || []).push(item) : tree.push(item);
    });
    return tree;
};
export default getTreeData;