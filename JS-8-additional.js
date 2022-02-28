let arrayOfClass = [];
function getClassNames (parentElement) {
    let children = parentElement.children;
    for (const child of children) {
        if (child.className!==''){
            arrayOfClass.push(child.className);
        }
        getClassNames(child)
    }
}
getClassNames(document.body);
console.log(arrayOfClass);