import './style.css';
import content from './content';

content()

function todoListMaker(title,description,dueDate,priority) {
    let itemTitle = title
    let itemDescription = description
    let itemDueDate = dueDate
    let itemPriority = priority

    return{itemTitle,itemDescription,itemDueDate,itemPriority}
};
