import './style.css';

display();


function display() {
    let content = document.querySelector('#content');
    let newProject = document.querySelector('#new-project');


    
   

    function getTodoProjectDetails() {
        let dialog = document.createElement('dialog');
        let imgDiv = document.createElement('div')
        let imgOne = document.createElement('img');
        let imgTwo = document.createElement('img');
        let titleLabel = document.createElement('label');
        let titleInput = document.createElement('input');
        let descriptionLabel = document.createElement('label');
        let descriptiionInput = document.createElement('textarea');
        let btn = document.createElement('button');

        imgOne.src = '../Images/pencil.svg';
        imgTwo.src = '../Images/close-thick.svg';
        imgDiv.classList.add('close-and-edit');
        titleLabel.textContent = 'Title';
        titleInput.setAttribute('placeholder','Title..');
        descriptionLabel.textContent = 'Description';
        descriptiionInput.setAttribute('rows','5');
        descriptiionInput.setAttribute('cols','19');
        descriptiionInput.setAttribute('placeholder','Anything you want to say.....')
        btn.textContent = 'Done';

        imgDiv.appendChild(imgOne);
        imgDiv.appendChild(imgTwo);
        dialog.appendChild(imgDiv);
        dialog.appendChild(titleLabel);
        dialog.appendChild(titleInput);
        dialog.appendChild(descriptionLabel);
        dialog.appendChild(descriptiionInput);
        dialog.appendChild(btn);
        content.appendChild(dialog);
        dialog.showModal();
    }

    function projectMaker() {
        getTodoProjectDetails()

        let container = document.createElement('div');
        let imgDiv = document.createElement('div');
        let imgOne = document.createElement('img');
        let imgTwo = document.createElement('img');
        let title = document.createElement('div');

        imgOne.src = '../Images/pencil.svg';
        imgTwo.src = '../Images/arrow-expand.svg';
        title.textContent = 'Title';
        imgDiv.classList.add('sidebar');

        imgDiv.appendChild(imgOne);
        imgDiv.appendChild(imgTwo);
        container.appendChild(imgDiv);
        container.appendChild(title);
        content.removeChild(newProject);
        content.appendChild(container);
        content.appendChild(newProject);
    }
}