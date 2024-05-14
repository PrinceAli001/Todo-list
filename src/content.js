export default function content() {
    let content = document.querySelector('#content');

    let defaultProject = document.createElement('div');
    let svgDiv = document.createElement('div');
    let svgOne = document.createElement('img');
    let svgTwo = document.createElement('img');
    let title = document.createElement('p');
    let addProject = document.createElement('div');

    title.textContent = 'Title';
    title.classList.add('title')
    addProject.textContent = '+';
    addProject.classList.add('new-project')
    svgOne.src = '../Images/pencil.svg';
    svgTwo.src = '../Images/arrow-expand.svg';

    svgDiv.appendChild(svgOne);
    svgDiv.appendChild(svgTwo);
    defaultProject.appendChild(svgDiv);
    defaultProject.appendChild(title);
    content.appendChild(defaultProject);
    content.appendChild(addProject);
}