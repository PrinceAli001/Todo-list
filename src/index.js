import './style.css';
import content from './content';
import title from './title';

content()
display()

function display() {
    let p = document.querySelector('p')
    p.addEventListener('click', title)
}


function todoListMaker(title,description,dueDate,priority) {
    let itemTitle = title
    let itemDescription = description
    let itemDueDate = dueDate
    let itemPriority = priority

    return{itemTitle,itemDescription,itemDueDate,itemPriority}
};
