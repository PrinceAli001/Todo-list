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
    const imgOne = document.createElement('img');
    const imgTwo = document.createElement('img');
    let imgFive = document.createElement('img');
    let titleLabel = document.createElement('label');
    let titleInput = document.createElement('input');
    let descriptionLabel = document.createElement('label');
    let descriptionInput = document.createElement('textarea');
    let btn = document.createElement('button');
    let btnTwo = document.createElement('button');
    let btnThree = document.createElement('button');
    let btnFour = document.createElement('button');
    let btnFive = document.createElement('button');
    let btnSix = document.createElement('button');
    let paraOne = document.createElement('p');
    let paraTwo = document.createElement('p');
    let paraThree = document.createElement('p');
    let paraFour = document.createElement('p');
    let paraFive = document.createElement('p');
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
    let saveBtn = document.createElement('button');
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
    let recreateTask = false;

    let todoProjects = [];
    let todoProjectItems = [];
    let todo = todolist(titleInput,descriptionInput,taskInput,duedateInput,prioritySelect);
    defaultProject.setAttribute('data-number','0');
    newProject.setAttribute('style','pointer-events: none;');


    defaultProject.addEventListener('click', () => {
        currentDataNumber = defaultProject.dataset.number;
        svgDiv.setAttribute('style','display: flex;');
        setTimeout(() => {
            svgDiv.setAttribute('style','display: none;');
        },5000);
    });
    defaultTitle.addEventListener('click', () => {
        if (defaultTitle.textContent == 'Title') {
            getDefaultTodoProjectDetails();
        }else {
            showDefaultTodoListDetails();
        };
    });
    defaultImgOne.addEventListener('click', () => {
        if (defaultTitle.textContent == 'Title') {
            getDefaultTodoProjectDetails();
        }else {
            getDefaultProject();
        };
    });
    defaultImgTwo.addEventListener('click', () => {
        if (defaultTitle.textContent == 'Title') {
            defaultImgTwo.setAttribute('style','pointer-events: none;');
        }else {
            expand();
        };
    });
    imgOne.addEventListener('click', getDefaultProject);
    imgTwo.addEventListener('click', closed);
    imgFive.addEventListener('click', editTask);
    btn.addEventListener('click', () => {
        defaultImgTwo.setAttribute('style','pointer-events: auto;');
        closed();
        showDefaultTodoListDetails();
    });
    btnSix.addEventListener('click', () => {
        closed();
        editDefaultProject();
    });
    backDiv.addEventListener('click', back);
    newTask.addEventListener('click', getTaskDetails);
    saveBtn.addEventListener('click', saveNotes);
    btnTwo.addEventListener('click', () => {
        closed()
        createNewTask(todo.taskInput.value,todo.taskDuedate.value,'True',todo.projectPriority.value);
        showTaskDetails();
    });
    btnFour.addEventListener('click', () => {
        closed();
        projectMaker('True');
    });
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
        if (defaultTitle.textContent == 'Title') {
            let imgDiv = document.createElement('div');
            let firstProject = todolist(titleInput.value,descriptionInput.value,taskInput.value,duedateInput.value,prioritySelect.value);

            todoProjects.unshift(firstProject);
            paraOne.textContent = `${todoProjects[0].projectTitle}`;
            paraOne.classList.add('para');
            paraTwo.textContent = `${todoProjects[0].projectdescription}`;
            paraTwo.classList.add('para');
            imgOne.style = 'display: block; pointer-events: auto;';
            imgDiv.classList.remove('sidebar');
            imgDiv.classList.toggle('close-and-edit');
            defaultTitle.textContent = `${todoProjects[0].projectTitle}`;
            newProject.setAttribute('style','pointer-events: auto;');

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

        
            projectStorage();
        }else {
            let imgDiv = document.createElement('div');

            paraOne.textContent = `${todoProjects[0].projectTitle}`;
            paraOne.classList.add('para');
            paraTwo.textContent = `${todoProjects[0].projectdescription}`;
            paraTwo.classList.add('para');
            imgOne.style = 'display: block; pointer-events: auto;';
            imgDiv.classList.remove('sidebar');
            imgDiv.classList.toggle('close-and-edit');
            defaultTitle.textContent = `${todoProjects[0].projectTitle}`;

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

        
            projectStorage();
        };
    };

    function editDefaultProject() {
        todoProjects[0].projectTitle = `${todo.projectTitle.value}`;
        todoProjects[0].projectdescription = `${todo.projectdescription.value}`;
        if (defaultProject.dataset.number == currentDataNumber) {
            defaultTitle.textContent = `${todo.projectTitle.value}`;
        };
    
        projectStorage();
        closed();
    }

    function closed() {
        dialog.close();
    };

    function getDefaultProject() {
        imgOne.style = 'display: none; pointer-events: none;'
        imgDiv.classList.add('close-and-edit');
        btnSix.textContent = 'Done';

        dialog.textContent = '';
        imgDiv.appendChild(imgOne);
        imgDiv.appendChild(imgTwo);
        dialog.appendChild(imgDiv);
        dialog.appendChild(titleLabel);
        dialog.appendChild(titleInput);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(descriptionInput);
        dialog.appendChild(btnSix);
        dialog.showModal();
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
        projectFieldsetText.textContent = `${todoProjects[currentDataNumber].projectTitle}`;
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
        saveBtn.textContent = 'Save'
        saveBtn.classList.add('save-btn');
        if (taskMainContainer.hasChildNodes()) {
            recreateTask = false;
        }

        if (localStorage.getItem('notes')) {
            notesTextarea.textContent = JSON.parse(localStorage.getItem('notes'));
        }
        
        if (recreateTask == true) {
            for (let i = 0; i < todoProjectItems.length; i++) {
                let containerTaskDiv = document.createElement('div');
                let taskDivCheck = document.createElement('input')
                let taskDiv = document.createElement('div');
                let tasknameAndDuedate = document.createElement('div');
                let taskName = document.createElement('span');
                let taskduedate = document.createElement('span');
                let imgThree = document.createElement('img');
                let imgFour = document.createElement('img');
                let imgFive = document.createElement('img');
                let duplicateItem = todolist(todoProjectItems[i].projectTitle,todoProjectItems[i].projectdescription,todoProjectItems[i].taskInput,todoProjectItems[i].taskDuedate,todoProjectItems[i].projectPriority);
        
                todoProjectItems.splice(i,1,duplicateItem);
                containerTaskDiv.style.cssText = 'display: flex; align-items: center; margin: 0;';
                containerTaskDiv.setAttribute('data-number',`${todoProjectItems.indexOf(duplicateItem)}`);
                containerTaskDiv.setAttribute('data-project',`${todoProjectItems[i].projectTitle}`);
                taskDivCheck.setAttribute('type','checkbox');
                taskDivCheck.style.cssText = 'margin-bottom: 0; width: 20px; font-size: 1rem;';
                taskDiv.classList.add('task-div');
                taskName.textContent = todoProjectItems[i].taskInput;
                taskName.setAttribute('data-number',`${todoProjectItems.indexOf(duplicateItem)}`);
                taskduedate.textContent =todoProjectItems[i].taskDuedate;
                taskduedate.setAttribute('data-number',`${todoProjectItems.indexOf(duplicateItem)}`);
                tasknameAndDuedate.style.cssText = 'flex: 2; display: flex; flex-wrap: wrap; gap: 40%; height: 40px; align-items: center;'
                imgFive.src = '../Images/pencil.svg';
                imgThree.src = '../Images/arrow-expand.svg';
                imgFour.src = '../Images/delete.svg';
        
                if (todoProjectItems[i].projectPriority == 'Urgent') {
                    taskDiv.style = ' border-left: 10px solid #dc2626;'
                } else if (todoProjectItems[i].projectPriority == 'Important') {
                    taskDiv.style = ' border-left: 10px solid #facc15;'
                } else {
                    taskDiv.style = 'border-left: 10px solid #22c55e;'
                };
        
                function showCurrentTaskDetails() {
                    containerTaskDiv.dataset.number = todoProjectItems.indexOf(duplicateItem);
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
                    content.appendChild(dialog);
                    dialog.showModal();
                }
        
                function editCurrentTask() {
                    containerTaskDiv.dataset.number = todoProjectItems.indexOf(duplicateItem);
                    taskName.setAttribute('data-number',`${todoProjectItems.indexOf(duplicateItem)}`);
                    taskduedate.setAttribute('data-number',`${todoProjectItems.indexOf(duplicateItem)}`);
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
                    };
                    closed();
                    taskStorage();
                }
        
                function complete() {
                    containerTaskDiv.dataset.number = todoProjectItems.indexOf(duplicateItem);
                    taskDiv.style.cssText = 'border-left: none; color: #c0c0c0;';
                    imgFive.style = 'pointer-events: none;';
                    imgThree.style = 'pointer-events: none;';
                    imgFour.style = 'pointer-events: none;';
                    setTimeout(() => {
                        taskMainContainer.removeChild(containerTaskDiv);
                    }, 2000);
                    todoProjectItems.splice(containerTaskDiv.dataset.number,1);
                    taskStorage();
                }
        
                function trash() {
                    containerTaskDiv.dataset.number = todoProjectItems.indexOf(duplicateItem);
                    taskMainContainer.removeChild(containerTaskDiv);
                    todoProjectItems.splice(containerTaskDiv.dataset.number,1);
                    taskStorage();
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
                    currentDataNumber = `${containerTaskDiv.dataset.number}`;
                    console.log(currentDataNumber);
                });
                taskDivCheck.addEventListener('click', complete);
                btnThree.addEventListener('click', editCurrentTask);
                imgThree.addEventListener('click', showCurrentTaskDetails);
                imgFour.addEventListener('click', trash);
                imgFive.addEventListener('click', getCurrentTask)
        
                taskStorage();
            };  
        };
           

        for (let i = 0; i < todoProjectItems.length; i++) {
            if (taskMainContainer.hasChildNodes()) {
                taskMainContainer.childNodes[i].setAttribute('style','display: flex;');
                taskMainContainer.childNodes[i].firstChild.setAttribute('style','margin-bottom: 0; width: 20px; font-size: 1rem; display: flex; align-self: center;');
            };
        };

        if (taskMainContainer.hasChildNodes()) {
            for (let i = 0; i < todoProjectItems.length; i++) {
                if (taskMainContainer.childNodes[i].dataset.project !== `${todoProjects[currentDataNumber].projectTitle}`) {
                    taskMainContainer.childNodes[i].setAttribute('style','display: none;');
                };
            };
        };

        backDiv.appendChild(backImg);
        backDiv.appendChild(backText);
        projectFieldset.appendChild(projectLegend);
        projectFieldset.appendChild(projectFieldsetText);
        notesFieldset.appendChild(notesLegend);
        notesFieldset.appendChild(notesTextarea);
        notesFieldset.appendChild(saveBtn);
        content.appendChild(backDiv);
        content.appendChild(projectFieldset);
        content.appendChild(taskMainContainer);
        content.appendChild(newTask);
        content.appendChild(notesFieldset);
        getTaskDetails();
    };

    function projectMaker(boolean) {
        let imgDiv = document.createElement('div');
        let container = document.createElement('div');
        let title = document.createElement('div');
        let project = todolist(titleInput.value,descriptionInput.value,taskInput.value,duedateInput.value,prioritySelect.value);
        let imgSix = document.createElement('img')
        let imgOne = document.createElement('img');
        let imgThree = document.createElement('img');

        if (boolean === 'True') {
            todoProjects.push(project);
        }
        imgOne.src = '../Images/pencil.svg';
        imgOne.style.cssText = 'display: block; pointer-events: auto;';
        imgThree.src = '../Images/arrow-expand.svg';
        imgThree.style.cssText = 'display: block; pointer-events: auto;';
        imgSix.src = '../Images/delete.svg';
        title.textContent = `${todo.projectTitle.value}`;
        title.setAttribute('data-number',`${todoProjects.indexOf(project)}`);
        title.classList.add('title');
        imgDiv.classList.add('sidebar');
        container.classList.add('todo-bg');
        container.setAttribute('data-number',`${todoProjects.indexOf(project)}`);


        imgDiv.appendChild(imgOne);
        imgDiv.appendChild(imgThree);
        imgDiv.appendChild(imgSix);
        container.appendChild(imgDiv);
        container.appendChild(title);
        content.removeChild(newProject);
        content.appendChild(container);
        content.appendChild(newProject);

        projectStorage();
    

         container.addEventListener('click', () => {
            container.setAttribute('data-number',`${todoProjects.indexOf(project)}`);
            currentDataNumber = container.dataset.number;
            imgDiv.setAttribute('style','display: flex;');
            setTimeout(() => {
                imgDiv.setAttribute('style','display: none;');
            },5000);
            imgOne.style.cssText = 'display: block; pointer-events: auto;';
            imgThree.style.cssText = 'display: block; pointer-events: auto;';
            
        });
        title.addEventListener('click', showTodoListDetails);
        btnFive.addEventListener('click', () => {
            closed();
            editProject();
        });
        imgOne.addEventListener('click', () => {
            closed();
            getProject();
        });
        imgThree.addEventListener('click', expand);
        imgSix.addEventListener('click', projectTrash);

        
        function showTodoListDetails() {
            container.dataset.number = todoProjects.indexOf(project);
            let imgOne = document.createElement('img');
            let imgDiv = document.createElement('div');
    
            paraOne.textContent = `${todoProjects[container.dataset.number].projectTitle}`;
            paraOne.classList.add('para');
            paraTwo.textContent = `${todoProjects[container.dataset.number].projectdescription}`;
            paraTwo.classList.add('para');
            imgOne.src = '../Images/pencil.svg';
            imgOne.style.cssText = 'display: block; pointer-events: auto;';
            imgDiv.classList.add('close-and-edit');

            imgOne.addEventListener('click', () => {
                closed();
                getProject();
            });
    
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

        function editProject() {
            todoProjects[currentDataNumber].projectTitle = `${todo.projectTitle.value}`;
            todoProjects[currentDataNumber].projectdescription = `${todo.projectdescription.value}`;
            if (title.dataset.number == currentDataNumber) {
                title.textContent = `${todo.projectTitle.value}`;
            };
            projectStorage();
        
            closed();
        };

         function projectTrash() {
            content.removeChild(container);
            todoProjects.splice(container.dataset.number,1);
            container.setAttribute('data-number',`${todoProjects.indexOf(project)}`);
            projectStorage();
        
        };
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

    function getProject() {
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('close-and-edit');
        dialog.textContent = '';
        btnFive.textContent = 'Done';

        imgDiv.appendChild(imgTwo);
        dialog.appendChild(imgDiv);
        dialog.appendChild(titleLabel);
        dialog.appendChild(titleInput);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(descriptionInput);
        dialog.appendChild(btnFive);
        content.appendChild(dialog);
        dialog.showModal();
    };

    
    function createNewTask(name,date,boolean,thePriority) {
        let containerTaskDiv = document.createElement('div');
        let taskDivCheck = document.createElement('input')
        let taskDiv = document.createElement('div');
        let tasknameAndDuedate = document.createElement('div');
        let taskName = document.createElement('span');
        let taskduedate = document.createElement('span');
        let imgThree = document.createElement('img');
        let imgFour = document.createElement('img');
        let imgFive = document.createElement('img');
        let todolistItem = todolist(todoProjects[currentDataNumber].projectTitle,descriptionInput.value,taskInput.value,duedateInput.value,prioritySelect.value);

        if (boolean == 'True') {
            todoProjectItems.push(todolistItem);
        }
        containerTaskDiv.style.cssText = 'display: flex; align-items: center; margin: 0;';
        containerTaskDiv.setAttribute('data-number',`${todoProjectItems.indexOf(todolistItem)}`);
        containerTaskDiv.setAttribute('data-project',`${todoProjects[currentDataNumber].projectTitle}`);
        taskDivCheck.setAttribute('type','checkbox');
        taskDivCheck.style.cssText = 'margin-bottom: 0; width: 20px; font-size: 1rem;';
        taskDiv.classList.add('task-div');
        taskName.textContent = name;
        taskName.setAttribute('data-number',`${todoProjectItems.indexOf(todolistItem)}`);
        taskduedate.textContent = date;
        taskduedate.setAttribute('data-number',`${todoProjectItems.indexOf(todolistItem)}`);
        tasknameAndDuedate.style.cssText = 'flex: 2; display: flex; flex-wrap: wrap; gap: 40%; height: 40px; align-items: center;'
        imgFive.src = '../Images/pencil.svg';
        imgThree.src = '../Images/arrow-expand.svg';
        imgFour.src = '../Images/delete.svg';

        if (thePriority == 'Urgent') {
            taskDiv.style = ' border-left: 10px solid #dc2626;'
        } else if (thePriority == 'Important') {
            taskDiv.style = ' border-left: 10px solid #facc15;'
        } else {
            taskDiv.style = 'border-left: 10px solid #22c55e;'
        };

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
            content.appendChild(dialog);
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
            };
            closed();
            taskStorage();
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
            taskStorage();
            preventLag();
        }

        function trash() {
            containerTaskDiv.dataset.number = todoProjectItems.indexOf(todolistItem);
            taskMainContainer.removeChild(containerTaskDiv);
            todoProjectItems.splice(containerTaskDiv.dataset.number,1);
            taskStorage();
            preventLag();
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
            currentDataNumber = `${containerTaskDiv.dataset.number}`;
            console.log(currentDataNumber);
        });
        taskDivCheck.addEventListener('click', complete);
        btnThree.addEventListener('click', editCurrentTask);
        imgThree.addEventListener('click', showCurrentTaskDetails);
        imgFour.addEventListener('click', trash);
        imgFive.addEventListener('click', getCurrentTask)

        taskStorage();
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
        taskStorage();
        for (let i = 0; i < todoProjects.length; i++) {
            let imgDiv = document.createElement('div');
            let container = document.createElement('div');
            let title = document.createElement('div');
            let duplicateProject = todolist(todoProjects[i].projectTitle,todoProjects[i].projectdescription,todoProjects[i].taskInput,todoProjects[i].taskDuedate,todoProjects[i].projectPriority) 
            let imgSix = document.createElement('img');
            let imgOne = document.createElement('img');
            let imgThree = document.createElement('img');
    
            todoProjects.splice(i,1,duplicateProject);
            imgOne.src = '../Images/pencil.svg';
            imgOne.style.cssText = 'display: block; pointer-events: auto;';
            imgThree.src = '../Images/arrow-expand.svg';
            imgThree.style.cssText = 'display: block; pointer-events: auto;';
            imgSix.src = '../Images/delete.svg';
            title.textContent = `${todoProjects[i].projectTitle}`;
            title.setAttribute('data-number',`${todoProjects.indexOf(duplicateProject)}`);
            title.classList.add('title');
            imgDiv.classList.add('sidebar');
            if (i === 0) {
                imgDiv.classList.remove('sidebar');
                imgDiv.classList.add('first-sidebar');
            };
            container.classList.add('todo-bg')
            container.setAttribute('data-number',`${todoProjects.indexOf(duplicateProject)}`);
    
    
            imgDiv.appendChild(imgOne);
            imgDiv.appendChild(imgThree);
            if (i !== 0) {
                imgDiv.appendChild(imgSix);
            }
            container.appendChild(imgDiv);
            container.appendChild(title);
            content.appendChild(container);

            container.addEventListener('click', () => {
                container.setAttribute('data-number',`${todoProjects.indexOf(duplicateProject)}`);
                currentDataNumber = container.dataset.number;
                imgDiv.setAttribute('style','display: flex;');
                setTimeout(() => {
                    imgDiv.setAttribute('style','display: none;');
                },5000);
                imgOne.style.cssText = 'display: block; pointer-events: auto;';
                imgThree.style.cssText = 'display: block; pointer-events: auto;';
                
            });
            title.addEventListener('click', showTodoListDetails);
            btnFive.addEventListener('click', () => {
                closed();
                editProject();
            });
            imgOne.addEventListener('click', () => {
                closed();
                getProject();
            });
            imgThree.addEventListener('click', expand);
            imgSix.addEventListener('click', newProjectTrash);
            
            
            function showTodoListDetails() {
                container.dataset.number = todoProjects.indexOf(duplicateProject);
                let imgOne = document.createElement('img');
                let imgDiv = document.createElement('div');
        
                titleLabel.textContent = 'Title';
                paraOne.textContent = `${todoProjects[container.dataset.number].projectTitle}`;
                paraOne.classList.add('para');
                paraTwo.textContent = `${todoProjects[container.dataset.number].projectdescription}`;
                paraTwo.classList.add('para');
                imgOne.src = '../Images/pencil.svg';
                imgOne.style.cssText = 'display: block; pointer-events: auto;';
                imgDiv.classList.add('close-and-edit');
    
                imgOne.addEventListener('click', () => {
                    closed();
                    getProject();
                });
        
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
    
            function editProject() {
                if (container.dataset.number == currentDataNumber) {
                    todoProjects[currentDataNumber].projectTitle = `${todo.projectTitle.value}`;
                    todoProjects[currentDataNumber].projectdescription = `${todo.projectdescription.value}`;
                    if (title.dataset.number == currentDataNumber) {
                        title.textContent = `${todo.projectTitle.value}`;
                    }
                }
                projectStorage();
                closed();
            };
    
             function newProjectTrash() {
                container.dataset.number = todoProjects.indexOf(duplicateProject);
                content.removeChild(container);
                todoProjects.splice(container.dataset.number,1);
                projectStorage();
            }
        };
        content.appendChild(newProject);
    };

    function projectStorage() {
        localStorage.setItem('projects',JSON.stringify(todoProjects));
    };

    function taskStorage() {
        localStorage.setItem('tasks',JSON.stringify(todoProjectItems));
    };

    function saveNotes() {
        localStorage.setItem('notes',JSON.stringify(notesTextarea.value));
        imgDiv.classList.add('close-and-edit');
        dialog.textContent = '';
        paraFive.textContent = 'Note saved';
        paraFive.style.cssText = 'font-size: 2rem; padding: 20px;'
        imgDiv.appendChild(imgTwo);
        dialog.appendChild(imgDiv);
        dialog.appendChild(paraFive);
        content.appendChild(dialog);
        dialog.showModal();
    };

    function preventLag() {
        if (todoProjectItems.length == 1 && todoProjectItems[currentDataNumber].projectTitle == projectFieldsetText.textContent && todoProjectItems[currentDataNumber].dataset.number == 0) {
            expand();
        }
    }

    function load() {
        if (localStorage.length >= 1) {
                todoProjects = JSON.parse(localStorage.getItem('projects'));
                todoProjectItems = JSON.parse(localStorage.getItem('tasks'));
                newProject.setAttribute('style','pointer-events: auto;');
                recreateTask = true;
                content.removeChild(defaultProject);
                content.removeChild(newProject);
                for (let i = 0; i < todoProjects.length; i++) {
                    let imgDiv = document.createElement('div');
                    let container = document.createElement('div');
                    let title = document.createElement('div');
                    let duplicateProject = todolist(todoProjects[i].projectTitle,todoProjects[i].projectdescription,todoProjects[i].taskInput,todoProjects[i].taskDuedate,todoProjects[i].projectPriority) 
                    let imgSix = document.createElement('img');
                    let imgOne = document.createElement('img');
                    let imgThree = document.createElement('img');
            
                    todoProjects.splice(i,1,duplicateProject);
                    imgOne.src = '../Images/pencil.svg';
                    imgOne.style.cssText = 'display: block; pointer-events: auto;';
                    imgThree.src = '../Images/arrow-expand.svg';
                    imgThree.style.cssText = 'display: block; pointer-events: auto;';
                    imgSix.src = '../Images/delete.svg';
                    title.textContent = `${todoProjects[i].projectTitle}`;
                    title.setAttribute('data-number',`${todoProjects.indexOf(duplicateProject)}`);
                    title.classList.add('title');
                    imgDiv.classList.add('sidebar');
                    if (i === 0) {
                        imgDiv.classList.remove('sidebar');
                        imgDiv.classList.add('first-sidebar');
                    };
                    container.classList.add('todo-bg')
                    container.setAttribute('data-number',`${todoProjects.indexOf(duplicateProject)}`);
            
            
                    imgDiv.appendChild(imgOne);
                    imgDiv.appendChild(imgThree);
                    if (i !== 0) {
                        imgDiv.appendChild(imgSix);
                    }
                    container.appendChild(imgDiv);
                    container.appendChild(title);
                    content.appendChild(container);
        
                    container.addEventListener('click', () => {
                        container.setAttribute('data-number',`${todoProjects.indexOf(duplicateProject)}`);
                        currentDataNumber = container.dataset.number;
                        imgDiv.setAttribute('style','display: flex;');
                        setTimeout(() => {
                            imgDiv.setAttribute('style','display: none;');
                        },5000);
                        imgOne.style.cssText = 'display: block; pointer-events: auto;';
                        imgThree.style.cssText = 'display: block; pointer-events: auto;';
                        
                    });
                    title.addEventListener('click', showTodoListDetails);
                    btnFive.addEventListener('click', () => {
                        closed();
                        editProject();
                    });
                    imgOne.addEventListener('click', () => {
                        closed();
                        getProject();
                    });
                    imgThree.addEventListener('click', expand);
                    imgSix.addEventListener('click', newProjectTrash);
                    
                    
                    function showTodoListDetails() {
                        container.dataset.number = todoProjects.indexOf(duplicateProject);
                        let imgOne = document.createElement('img');
                        let imgDiv = document.createElement('div');
                
                        paraOne.textContent = `${todoProjects[container.dataset.number].projectTitle}`;
                        paraOne.classList.add('para');
                        paraTwo.textContent = `${todoProjects[container.dataset.number].projectdescription}`;
                        paraTwo.classList.add('para');
                        imgOne.src = '../Images/pencil.svg';
                        imgOne.style.cssText = 'display: block; pointer-events: auto;';
                        imgDiv.classList.add('close-and-edit');
            
                        imgOne.addEventListener('click', () => {
                            closed();
                            getProject();
                        });
                
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
            
                    function editProject() {
                        if (container.dataset.number == currentDataNumber) {
                            todoProjects[currentDataNumber].projectTitle = `${todo.projectTitle.value}`;
                            todoProjects[currentDataNumber].projectdescription = `${todo.projectdescription.value}`;
                            if (title.dataset.number == currentDataNumber) {
                                title.textContent = `${todo.projectTitle.value}`;
                            }
                        }
                        projectStorage();
                    
                        closed();
                    };
            
                     function newProjectTrash() {
                        container.dataset.number = todoProjects.indexOf(duplicateProject);
                        content.removeChild(container);
                        todoProjects.splice(container.dataset.number,1);
                        projectStorage();
                    
                    }
        
                
                };
                content.appendChild(newProject);
                getTodoProjectDetails();
        };
    };
    load();
};