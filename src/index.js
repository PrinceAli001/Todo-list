import './style.css';

function todoListMaker(title,description,dueDate,priority) {
    let itemTitle = title
    let itemDescription = description
    let itemDueDate = dueDate
    let itemPriority = priority

    return{itemTitle,itemDescription,itemDueDate,itemPriority}
};
