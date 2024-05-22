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
    let titleLabel = document.createElement('label');
    let titleInput = document.createElement('input');
    let descriptionLabel = document.createElement('label');
    let descriptionInput = document.createElement('textarea');
    let btn = document.createElement('button');
    let container = document.createElement('div');
    let title = document.createElement('div');
    let paraOne = document.createElement('p');
    let paraTwo = document.createElement('p');
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
    let duedateLabel = document.createElement('label');
    let duedateInput = document.createElement('input');
    let priority = document.createElement('p');
    let prioritySelect = document.createElement('select');
    let urgentOption = document.createElement('option');
    let importantOption = document.createElement('option');
    let trivialOption = document.createElement('option');
    let todoProjects = [];
    let todo = todolist(titleInput,descriptionInput);


    todoProjects.push(defaultProject);
    todoProjects.push(newProject);



    defaultProject.addEventListener('click', () => {
        svgDiv.setAttribute('style','display: flex;');
        setTimeout(() => {
            svgDiv.setAttribute('style','display: none;') 
        }, 5000);
    });
    container.addEventListener('click', () => {
        imgDiv.setAttribute('style','display: flex;');
        setTimeout(() => {
            imgDiv.setAttribute('style','display: none;') 
        }, 5000);
    });
    defaultTitle.addEventListener('click', () => {
        if (defaultTitle.textContent == 'Title') {
            getTodoProjectDetails();
        }else{
            showTodoListDetails();
        };
    });
    defaultImgOne.addEventListener('click', () => {
        dialog.textContent = '';
        getTodoProjectDetails();
    });
    defaultImgTwo.addEventListener('click', expand);
    imgOne.addEventListener('click', editProject);
    imgTwo.addEventListener('click', closed);
    btn.addEventListener('click', showTodoListDetails);
    backDiv.addEventListener('click', back);
    newTask.addEventListener('click', createNewTask);



    function projectMaker() {
        getTodoProjectDetails()


        imgOne.src = '../Images/pencil.svg';
        imgThree.src = '../Images/arrow-expand.svg';
        title.textContent = 'Title';
        imgDiv.classList.add('sidebar');
        container.classList.add('todo-bg')

        imgDiv.appendChild(imgOne);
        imgDiv.appendChild(imgThree);
        container.appendChild(imgDiv);
        container.appendChild(title);
        content.removeChild(newProject);
        content.appendChild(container);
        content.appendChild(newProject);
    };


    function getTodoProjectDetails() {
            let imgDiv = document.createElement('div');

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

    function showTodoListDetails() {
        paraOne.textContent = `${todo.projectTitle.value}`;
        paraOne.classList.add('para');
        paraTwo.textContent = `${todo.projectdescription.value}`;
        paraTwo.classList.add('para');
        defaultTitle.textContent = `${todo.projectTitle.value}`;
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
        content.appendChild(newTask);
        content.appendChild(notesFieldset);
    };
    
    function createNewTask() {
        let containerTaskDiv = document.createElement('div');
        let taskDivCheck = document.createElement('input')
        let taskDiv = document.createElement('div');
        let tasknameAndPriority = document.createElement('div');
        let taskName = document.createElement('span');
        let taskPriority = document.createElement('span');
        let imgOne = document.createElement('img');
        let imgThree = document.createElement('img');
        let imgFour = document.createElement('img');

        containerTaskDiv.style.cssText = 'display: flex; align-items: center; margin: 0;';
        taskDivCheck.setAttribute('type','checkbox');
        taskDivCheck.style.cssText = 'margin-bottom: 0; width: 20px; font-size: 1rem;';
        taskDiv.classList.add('task-div');
        taskName.textContent = 'TaskName';
        taskPriority.textContent = 'Due-date';
        tasknameAndPriority.style.cssText = 'flex: 2; display: flex; flex-wrap: wrap; gap: 40%; height: 40px; align-items: center;'
        imgOne.src = '../Images/pencil.svg';
        imgThree.src = '../Images/arrow-expand.svg';
        imgFour.src = '../Images/delete.svg';

        getTaskDetails()

        tasknameAndPriority.appendChild(taskName);
        tasknameAndPriority.appendChild(taskPriority);
        taskDiv.appendChild(tasknameAndPriority);
        taskDiv.appendChild(imgOne);
        taskDiv.appendChild(imgThree);
        taskDiv.appendChild(imgFour);
        containerTaskDiv.appendChild(taskDivCheck);
        containerTaskDiv.appendChild(taskDiv);
        content.removeChild(newTask);
        content.removeChild(notesFieldset);
        content.appendChild(containerTaskDiv);
        content.appendChild(newTask);
        content.appendChild(notesFieldset);
    };

    function getTaskDetails() {
        imgOne.src = '../Images/pencil.svg';
        imgOne.style = 'display: none; pointer-events: none;'
        imgTwo.src = '../Images/close-thick.svg';
        imgDiv.classList.add('close-and-edit');
        titleLabel.textContent = 'TaskName';
        titleLabel.style.cssText = 'font-family: Caveat; font-size: 2.3rem;';
        titleInput.setAttribute('placeholder','Title..');
        titleInput.setAttribute('type','text');
        titleInput.setAttribute('required','');
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
        trivialOption.setAttribute('checked','');
        btn.textContent = 'Done';
        btn.setAttribute('type','submit');

        imgDiv.appendChild(imgOne);
        imgDiv.appendChild(imgTwo);
        prioritySelect.appendChild(urgentOption);
        prioritySelect.appendChild(importantOption);
        prioritySelect.appendChild(trivialOption); 
        dialog.textContent = '';
        dialog.appendChild(imgDiv);
        dialog.appendChild(titleLabel);
        dialog.appendChild(titleInput);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(descriptionInput);
        dialog.appendChild(duedateLabel);
        dialog.appendChild(duedateInput);
        dialog.appendChild(priority);
        dialog.appendChild(prioritySelect);
        dialog.appendChild(btn);
        content.appendChild(dialog);
        dialog.showModal();
    };

    function back() {
        content.textContent = '';
        content.style.cssText = 'flex-direction: row; flex-wrap: wrap; justify-content: center;';
        headerHOne.textContent = 'Todolist';
        for (const todoProjectsItem of todoProjects) {
            content.appendChild(todoProjectsItem);
        };
    };
};