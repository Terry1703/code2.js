console.log ("event connected........................")
let WAEMA =[];
const iteminput = document.getElementById('itemlist');
const addlist = document.getElementById('listitem');
const selectorinput = document.getElementById('selectitem');
const itemlist = document.getElementById('list');

function addlist() {

    const list = document.getElementById('list');
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
    List.WAEMA = ('');
}
console.log(clearList)

function select(selector){
    return document.queryselector(selector)
}


function listen(element,event,callback){
    return element.addEventListener(event,callback)

}

function addAttribute(element,Attribute,content){
    return element.addAttribute(attribute,content)
}
const shoppinglist = ['milk','bread']

const ol = select ('ol');
listen(documen,'DOMcontentloaded',displayitems);
function displayitems(){
    console.log('welcome');
}



