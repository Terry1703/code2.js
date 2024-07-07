console.log ("event connected........................")



function addlist() {

    const list = document.addEventListener('list');
    list.textContent = newlistText;
    addlist.addEventListener('click', addlist);

    
    listInput.value = ('');
}
console.log (addlist)

function markPurchased() {
    let list = list.getElementsByTagName('list');
        if (list.classlist.contains('purchased') && confirm(`Mark "${list.textContent}" as purchased`)) {
            list.classlist.add('purchased');
        }
    }
    console.log(markPurchased)


function clearList() {
    List.innerhtml = ('');
}
console.log(clearList)


