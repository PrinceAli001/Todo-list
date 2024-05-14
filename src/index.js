import './style.css';
import content from './content';
import defaultTitle from './title';
import closing from './close';

content()
display()

function display() {
    let title = document.querySelector('.title');
    title.addEventListener('click', defaultTitle);
}


function todoListMaker(title,description,dueDate,priority) {
    let itemTitle = title
    let itemDescription = description
    let itemDueDate = dueDate
    let itemPriority = priority

    return{itemTitle,itemDescription,itemDueDate,itemPriority}
};
