import './style.css';
import todolist from './todolist';

display();


function display() {
    let headerHOne = document.querySelector('#header-h1');
    let content = document.querySelector('#content');
    let newProject = document.querySelector('#new-project');
    let defaultProject = document.querySelector('#default-project');
    let defaultTitle = document.querySelector('#default-title');
    let svgDiv = document.querySelector('#svg-div');
    let defaultImgOne = document.querySelector('#default-imgOne');
    let defaultImgTwo = document.querySelector('#default-imgTwo');
    let dialog = document.createElement('dialog');
    let imgDiv = document.createElement('div');
    let imgOne = document.createElement('img');
    let imgTwo = document.createElement('img');
    let imgThree = document.createElement('img');
    let imgFour = document.createElement('img');
    let imgFive = document.createElement('img');
    let titleLabel = document.createElement('label');
    let titleInput = document.createElement('input');
    let descriptionLabel = document.createElement('label');
    let descriptionInput = document.createElement('textarea');
    let btn = document.createElement('button');
    let btnTwo = document.createElement('button');
    let btnThree = document.createElement('button');
    let btnFour = document.createElement('button');
    let paraOne = document.createElement('p');
    let paraTwo = document.createElement('p');
    let paraThree = document.createElement('p');
    let paraFour = document.createElement('p');
    let backDiv = document.createElement('div');
    let backImg = document.createElement('img')
    let backText = document.createElement('span');
    let projectFieldset = document.createElement('fieldset');
    let projectLegend = document.createElement('legend');
    let projectFieldsetText = document.createElement('p');
    let newTask = document.createElement('div');
    let notesFieldset = document.createElement('fieldset');
    let notesLegend = document.createElement('legend');
    let notesTextarea = document.createElement('textarea');
    let taskInput = document.createElement('input');
    let duedateLabel = document.createElement('label');
    let duedateInput = document.createElement('input');
    let priority = document.createElement('p');
    let prioritySelect = document.createElement('select');
    let urgentOption = document.createElement('option');
    let importantOption = document.createElement('option');
    let trivialOption = document.createElement('option');
    let taskMainContainer = document.createElement('div');
    let currentDataNumber = '';

    let todoProjects = [];
    let todoProjectItems = [];
    let todo = todolist(titleInput,descriptionInput,taskInput,duedateInput,prioritySelect);


    todoProjects.push(defaultProject);
    todoProjects.push(newProject);



    defaultProject.addEventListener('click', () => {
        svgDiv.setAttribute('style','display: flex;');
        setTimeout(() => {
            svgDiv.setAttribute('style','display: none;') 
        }, 5000);
    });
    defaultTitle.addEventListener('click', () => {
        if (defaultTitle.textContent == 'Title') {
            getDefaultTodoProjectDetails();
        }else{
            showDefaultTodoListDetails();
        };
    });
    defaultImgOne.addEventListener('click', () => {
        dialog.textContent = '';
        getDefaultTodoProjectDetails();
    });
    defaultImgTwo.addEventListener('click', expand);
    imgOne.addEventListener('click', editProject);
    imgTwo.addEventListener('click', closed);
    imgFive.addEventListener('click', editTask);
    btn.addEventListener('click', () => {
        closed();
        showDefaultTodoListDetails();
    });
    backDiv.addEventListener('click', back);
    newTask.addEventListener('click', getTaskDetails);
    btnTwo.addEventListener('click', () => {
        closed()
        createNewTask();
        showTaskDetails();
    });
    btnFour.addEventListener('click', () => {
        closed();
        projectMaker();
        showTodoListDetails();
    })
    newProject.addEventListener('click', getTodoProjectDetails);




    function getDefaultTodoProjectDetails() {
            let imgDiv = document.createElement('div');

            dialog.textContent = '';
            imgOne.src = '../Images/pencil.svg';
            imgOne.style = 'display: none; pointer-events: none;'
            imgTwo.src = '../Images/close-thick.svg';
            imgDiv.classList.add('close-and-edit');
            titleLabel.textContent = 'Title';
            titleLabel.style.cssText = 'font-family: Caveat; font-size: 3rem;';
            titleInput.setAttribute('placeholder','Title..');
            titleInput.setAttribute('type','text');
            titleInput.setAttribute('required','');
            descriptionLabel.textContent = 'Description';
            descriptionLabel.style.cssText = 'font-family: Caveat; font-size: 3rem;';
            descriptionInput.setAttribute('rows','5');
            descriptionInput.setAttribute('cols','19');
            descriptionInput.setAttribute('placeholder','Anything you want to say.....');
            descriptionInput.setAttribute('required','');
            btn.textContent = 'Done';
            btn.setAttribute('type','submit');

            imgDiv.appendChild(imgOne);
            imgDiv.appendChild(imgTwo);
            dialog.appendChild(imgDiv);
            dialog.appendChild(titleLabel);
            dialog.appendChild(titleInput);
            dialog.appendChild(descriptionLabel);
            dialog.appendChild(descriptionInput);
            dialog.appendChild(btn);
            content.appendChild(dialog);
            dialog.showModal();
    };

    function showDefaultTodoListDetails() {
        let imgDiv = document.createElement('div');

        paraOne.textContent = `${todo.projectTitle.value}`;
        paraOne.classList.add('para');
        paraTwo.textContent = `${todo.projectdescription.value}`;
        paraTwo.classList.add('para');
        imgOne.style = 'display: block; pointer-events: auto;';
        imgDiv.classList.remove('sidebar');
        imgDiv.classList.toggle('close-and-edit');
        defaultTitle.textContent = `${todo.projectTitle.value}`;

        dialog.textContent = '';
        imgDiv.appendChild(imgOne);
        imgDiv.appendChild(imgTwo);
        dialog.appendChild(imgDiv);
        dialog.appendChild(titleLabel);
        dialog.appendChild(paraOne);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(paraTwo);
        content.appendChild(dialog);
        dialog.showModal();
    };

    function closed() {
        dialog.close();
    };

    function editProject() {
        imgOne.style = 'display: none; pointer-events: none;'

        dialog.removeChild(paraOne);
        dialog.removeChild(descriptionLabel);
        dialog.removeChild(paraTwo);
        dialog.appendChild(titleInput);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(descriptionInput);
        dialog.appendChild(btn);
    };

    function expand() {
        headerHOne.textContent = 'Things to do';
        content.textContent = '';
        content.style.cssText = 'flex-direction: column; flex-wrap: no-wrap; justify-content: normal; padding-top: 5px;';
        backImg.src = '../Images/arrow-left-circle.svg';
        backText.textContent = 'Back';
        backDiv.classList.add('back-div');
        backDiv.classList.add('todo-bg');
        backDiv.style = 'background-color: #ffffff;'
        projectFieldset.style.cssText = 'width: 150px; text-align: center; border-radius: 20px;';
        projectLegend.textContent = 'Current Todo';
        projectLegend.style.cssText = 'font-family: Caveat; font-size: 1.5rem;';
        projectFieldsetText.textContent = `${todo.projectTitle.value}`;
        projectFieldsetText.style = 'color: #ffffff;'
        projectFieldsetText.classList.add('para');
        taskMainContainer.classList.add('main-container');
        newTask.classList.add('new-project');
        newTask.classList.add('todo-bg');
        newTask.textContent = '+ New Task'
        newTask.style.cssText = 'margin: 20px auto 0 auto; font-size: .9rem; height: 50px;';
        notesFieldset.style = 'width: 50%;';
        notesLegend.textContent = 'Notes';
        notesLegend.style.cssText = 'font-family: Caveat; font-size: 2.4rem;';
        notesTextarea.setAttribute('placeholder',`Make a note if you don't want to forget`);
        notesTextarea.setAttribute('cols','19');
        notesTextarea.setAttribute('rows','5');
        notesTextarea.style = 'width: 100%; min-width: 270px;';

        backDiv.appendChild(backImg);
        backDiv.appendChild(backText);
        projectFieldset.appendChild(projectLegend);
        projectFieldset.appendChild(projectFieldsetText);
        notesFieldset.appendChild(notesLegend);
        notesFieldset.appendChild(notesTextarea);
        content.appendChild(backDiv);
        content.appendChild(projectFieldset);
        content.appendChild(taskMainContainer);
        content.appendChild(newTask);
        content.appendChild(notesFieldset);
    };

    function projectMaker() {
        let imgDiv = document.createElement('div');
        let container = document.createElement('div');
        let title = document.createElement('div');
        let project = todolist(titleInput.value,descriptionInput.value,taskInput.value,duedateInput.value,prioritySelect.value);

        imgOne.src = '../Images/pencil.svg';
        imgThree.src = '../Images/arrow-expand.svg';
        title.textContent = `${todo.projectTitle.value}`;
        title.classList.add('title');
        imgDiv.classList.add('sidebar');
        container.classList.add('todo-bg')
        container.dataset.number = todoProjects.indexOf(todo)

        imgDiv.appendChild(imgOne);
        imgDiv.appendChild(imgThree);
        container.appendChild(imgDiv);
        container.appendChild(title);
        content.removeChild(newProject);
        content.appendChild(container);
        content.appendChild(newProject);
        todoProjects.pop(newProject);
        todoProjects.push(project);
        todoProjects.push(newProject);
        console.log(todoProjects);



        container.addEventListener('click', () => {
            imgDiv.setAttribute('style','display: flex;');
            setTimeout(() => {
                imgDiv.setAttribute('style','display: none;') 
            }, 5000);
        });
    };

    function getTodoProjectDetails() {
        let imgDiv = document.createElement('div');

        dialog.textContent = '';
        imgOne.src = '../Images/pencil.svg';
        imgOne.style = 'display: none; pointer-events: none;'
        imgTwo.src = '../Images/close-thick.svg';
        imgDiv.classList.add('close-and-edit');
        titleLabel.textContent = 'Title';
        titleLabel.style.cssText = 'font-family: Caveat; font-size: 3rem;';
        titleInput.setAttribute('placeholder','Title..');
        titleInput.setAttribute('type','text');
        titleInput.setAttribute('required','');
        descriptionLabel.textContent = 'Description';
        descriptionLabel.style.cssText = 'font-family: Caveat; font-size: 3rem;';
        descriptionInput.setAttribute('rows','5');
        descriptionInput.setAttribute('cols','19');
        descriptionInput.setAttribute('placeholder','Anything you want to say.....');
        descriptionInput.setAttribute('required','');
        btnFour.textContent = 'Done';
        btnFour.setAttribute('type','submit');

        imgDiv.appendChild(imgOne);
        imgDiv.appendChild(imgTwo);
        dialog.appendChild(imgDiv);
        dialog.appendChild(titleLabel);
        dialog.appendChild(titleInput);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(descriptionInput);
        dialog.appendChild(btnFour);
        content.appendChild(dialog);
        dialog.showModal();
    };

    function showTodoListDetails() {
        let imgDiv = document.createElement('div');

        paraOne.textContent = `${todo.projectTitle.value}`;
        paraOne.classList.add('para');
        paraTwo.textContent = `${todo.projectdescription.value}`;
        paraTwo.classList.add('para');
        imgOne.style = 'display: block; pointer-events: auto;';
        imgDiv.classList.add('close-and-edit');

        dialog.textContent = '';
        imgDiv.appendChild(imgOne);
        imgDiv.appendChild(imgTwo);
        dialog.appendChild(imgDiv);
        dialog.appendChild(titleLabel);
        dialog.appendChild(paraOne);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(paraTwo);
        content.appendChild(dialog);
        dialog.showModal();
    };

    
    function createNewTask() {
        let containerTaskDiv = document.createElement('div');
        let taskDivCheck = document.createElement('input')
        let taskDiv = document.createElement('div');
        let tasknameAndDuedate = document.createElement('div');
        let taskName = document.createElement('span');
        let taskduedate = document.createElement('span');
        let imgThree = document.createElement('img');
        let imgFour = document.createElement('img');
        let imgFive = document.createElement('img');
        let todolistItem = todolist(titleInput.value,descriptionInput.value,taskInput.value,duedateInput.value,prioritySelect.value);

        todoProjectItems.push(todolistItem);
        containerTaskDiv.style.cssText = 'display: flex; align-items: center; margin: 0;';
        containerTaskDiv.setAttribute('data-number',`${todoProjectItems.indexOf(todolistItem)}`);
        taskDivCheck.setAttribute('type','checkbox');
        taskDivCheck.style.cssText = 'margin-bottom: 0; width: 20px; font-size: 1rem;';
        taskDiv.classList.add('task-div');
        taskName.textContent = `${todo.taskInput.value}`;
        taskName.setAttribute('data-number',`${todoProjectItems.indexOf(todolistItem)}`);
        taskduedate.textContent = `${todo.taskDuedate.value}`;
        taskduedate.setAttribute('data-number',`${todoProjectItems.indexOf(todolistItem)}`);
        tasknameAndDuedate.style.cssText = 'flex: 2; display: flex; flex-wrap: wrap; gap: 40%; height: 40px; align-items: center;'
        imgFive.src = '../Images/pencil.svg';
        imgThree.src = '../Images/arrow-expand.svg';
        imgFour.src = '../Images/delete.svg';
        console.log(todoProjectItems);

        if (todo.projectPriority.value == 'Urgent') {
            taskDiv.style = ' border-left: 10px solid #dc2626;'
        } else if (todo.projectPriority.value == 'Important') {
            taskDiv.style = ' border-left: 10px solid #facc15;'
        } else {
            taskDiv.style = 'border-left: 10px solid #22c55e;'
        }

        function showCurrentTaskDetails() {
            containerTaskDiv.dataset.number = todoProjectItems.indexOf(todolistItem);
            paraOne.textContent = `${todoProjectItems[containerTaskDiv.dataset.number].taskInput}`;
            paraOne.classList.add('para');
            paraTwo.textContent = `${todoProjectItems[containerTaskDiv.dataset.number].projectdescription}`;
            paraTwo.classList.add('para');
            paraThree.textContent = `${todoProjectItems[containerTaskDiv.dataset.number].taskDuedate}`;
            paraThree.classList.add('para');
            paraFour.textContent = `${todoProjectItems[containerTaskDiv.dataset.number].projectPriority}`;
            paraFour.classList.add('para');
            imgDiv.classList.add('close-and-edit');

        
            dialog.textContent = '';
            imgDiv.appendChild(imgTwo);
            dialog.appendChild(imgDiv);
            dialog.appendChild(titleLabel);
            dialog.appendChild(paraOne);
            dialog.appendChild(descriptionLabel);
            dialog.appendChild(paraTwo);
            dialog.appendChild(duedateLabel);
            dialog.appendChild(paraThree);
            dialog.appendChild(priority);
            dialog.appendChild(paraFour);
            content.appendChild(dialog);
            dialog.showModal();
        }

        function getCurrentTask () {
            dialog.textContent = '';
            btnThree.textContent = 'Done';

            imgDiv.appendChild(imgTwo);
            dialog.appendChild(imgDiv);
            dialog.appendChild(titleLabel);
            dialog.appendChild(taskInput);
            dialog.appendChild(descriptionLabel);
            dialog.appendChild(descriptionInput);
            dialog.appendChild(duedateLabel);
            dialog.appendChild(duedateInput);
            dialog.appendChild(priority);
            dialog.appendChild(prioritySelect);
            dialog.appendChild(btnThree);
            dialog.showModal();
        }

        function editCurrentTask() {
            containerTaskDiv.dataset.number = todoProjectItems.indexOf(todolistItem);
            taskName.setAttribute('data-number',`${todoProjectItems.indexOf(todolistItem)}`);
            taskduedate.setAttribute('data-number',`${todoProjectItems.indexOf(todolistItem)}`);
            todoProjectItems[currentDataNumber].taskInput = `${todo.taskInput.value}`;
            todoProjectItems[currentDataNumber].taskDuedate = `${todo.taskDuedate.value}`;
            todoProjectItems[currentDataNumber].projectdescription = `${todo.projectdescription.value}`;
            todoProjectItems[currentDataNumber].projectPriority = `${todo.projectPriority.value}`;

            if (taskName.dataset.number == currentDataNumber &&
                taskduedate.dataset.number == currentDataNumber) {
                    taskName.textContent = `${todo.taskInput.value}`;
                    taskduedate.textContent = `${todo.taskDuedate.value}`;
                    
                    if (todo.projectPriority.value == 'Urgent') {
                        taskDiv.style = ' border-left: 10px solid #dc2626;'
                    } else if (todo.projectPriority.value == 'Important') {
                        taskDiv.style = ' border-left: 10px solid #facc15;'
                    } else {
                        taskDiv.style = 'border-left: 10px solid #22c55e;'
                    }
            }
            
            closed();
        }

        function complete() {
            containerTaskDiv.dataset.number = todoProjectItems.indexOf(todolistItem);
            taskDiv.style.cssText = 'border-left: none; color: #c0c0c0;';
            imgFive.style = 'pointer-events: none;';
            imgThree.style = 'pointer-events: none;';
            imgFour.style = 'pointer-events: none;';
            setTimeout(() => {
                taskMainContainer.removeChild(containerTaskDiv);
            }, 2000);
            todoProjectItems.splice(containerTaskDiv.dataset.number,1);
            console.log(todoProjectItems);
        }

        function trash() {
            containerTaskDiv.dataset.number = todoProjectItems.indexOf(todolistItem);
            taskMainContainer.removeChild(containerTaskDiv);
            todoProjectItems.splice(containerTaskDiv.dataset.number,1);
        }


        tasknameAndDuedate.appendChild(taskName);
        tasknameAndDuedate.appendChild(taskduedate);
        taskDiv.appendChild(tasknameAndDuedate);
        taskDiv.appendChild(imgFive);
        taskDiv.appendChild(imgThree);
        taskDiv.appendChild(imgFour);
        containerTaskDiv.appendChild(taskDivCheck);
        containerTaskDiv.appendChild(taskDiv);
        taskMainContainer.appendChild(containerTaskDiv);

        containerTaskDiv.addEventListener('click', () => {
            currentDataNumber = containerTaskDiv.dataset.number;
        });
        taskDivCheck.addEventListener('click', complete);
        btnThree.addEventListener('click', editCurrentTask);
        imgThree.addEventListener('click', showCurrentTaskDetails);
        imgFour.addEventListener('click', trash);
        imgFive.addEventListener('click', getCurrentTask)
    };

    function getTaskDetails() {
        imgFive.src = '../Images/pencil.svg';
        imgFive.style = 'display: none; pointer-events: none;'
        imgTwo.src = '../Images/close-thick.svg';
        imgDiv.classList.add('close-and-edit');
        titleLabel.textContent = 'TaskName';
        titleLabel.style.cssText = 'font-family: Caveat; font-size: 2.3rem;';
        taskInput.setAttribute('placeholder','Task..');
        taskInput.setAttribute('type','text');
        taskInput.setAttribute('required','');
        descriptionLabel.textContent = 'Description';
        descriptionLabel.style.cssText = 'font-family: Caveat; font-size: 2.3rem;';
        descriptionInput.setAttribute('rows','5');
        descriptionInput.setAttribute('cols','19');
        descriptionInput.setAttribute('placeholder','Anything you want to say.....');
        descriptionInput.setAttribute('required','');
        duedateLabel.textContent = 'Due-date';
        duedateLabel.style.cssText = 'font-family: Caveat; font-size: 2.3rem;';
        duedateInput.setAttribute('type','date');
        priority.textContent = 'Priority';
        priority.style.cssText = 'font-family: Caveat; font-size: 2.3rem;';
        urgentOption.textContent = 'Urgent';
        importantOption.textContent = 'Important';
        trivialOption.textContent = 'Trivial';
        trivialOption.setAttribute('selected','');
        btnTwo.textContent = 'Done';
        btnTwo.setAttribute('type','submit');

        imgDiv.textContent = '';
        imgDiv.appendChild(imgFive);
        imgDiv.appendChild(imgTwo);
        prioritySelect.appendChild(urgentOption);
        prioritySelect.appendChild(importantOption);
        prioritySelect.appendChild(trivialOption); 
        dialog.textContent = '';
        dialog.appendChild(imgDiv);
        dialog.appendChild(titleLabel);
        dialog.appendChild(taskInput);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(descriptionInput);
        dialog.appendChild(duedateLabel);
        dialog.appendChild(duedateInput);
        dialog.appendChild(priority);
        dialog.appendChild(prioritySelect);
        dialog.appendChild(btnTwo);
        content.appendChild(dialog);
        dialog.showModal();
    };

    function showTaskDetails() {
        paraOne.textContent = `${todo.taskInput.value}`;
        paraOne.classList.add('para');
        paraTwo.textContent = `${todo.projectdescription.value}`;
        paraTwo.classList.add('para');
        paraThree.textContent = `${todo.taskDuedate.value}`;
        paraThree.classList.add('para');
        paraFour.textContent = `${todo.projectPriority.value}`;
        paraFour.classList.add('para');
        imgDiv.classList.add('close-and-edit');

    
        dialog.textContent = '';
        imgDiv.appendChild(imgTwo);
        dialog.appendChild(imgDiv);
        dialog.appendChild(titleLabel);
        dialog.appendChild(paraOne);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(paraTwo);
        dialog.appendChild(duedateLabel);
        dialog.appendChild(paraThree);
        dialog.appendChild(priority);
        dialog.appendChild(paraFour);
        content.appendChild(dialog);
        dialog.showModal();
    }

    function editTask () {
        imgFive.style = 'display: none; pointer-events: none;'

        dialog.removeChild(paraOne);
        dialog.removeChild(descriptionLabel);
        dialog.removeChild(paraTwo);
        dialog.removeChild(duedateLabel);
        dialog.removeChild(paraThree);
        dialog.removeChild(priority);
        dialog.removeChild(paraFour);
        dialog.appendChild(taskInput);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(descriptionInput);
        dialog.appendChild(duedateLabel);
        dialog.appendChild(duedateInput);
        dialog.appendChild(priority);
        dialog.appendChild(prioritySelect);
        dialog.appendChild(btnTwo);
    }

    function back() {
        content.textContent = '';
        content.style.cssText = 'flex-direction: row; flex-wrap: wrap; justify-content: center;';
        headerHOne.textContent = 'Todolist';
        for (const todoProjectsItem of todoProjects) {
            content.appendChild(todoProjectsItem);
        };
    };
};