export default function todolist(title,description,task,duedate,priority) {
    let projectTitle = title
    let projectdescription = description
    let taskInput = task
    let taskDuedate = duedate
    let projectPriority = priority

    return{projectTitle,projectdescription,taskInput,taskDuedate,projectPriority};
}