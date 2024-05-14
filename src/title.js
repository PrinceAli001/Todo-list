export default function title() {
    let content = document.querySelector('#content');
    let dialog = document.createElement('dialog');
    let labelOne = document.createElement('label');
    let labelTwo = document.createElement('label');
    let inputOne = document.createElement('input');
    let inputTwo = document.createElement('textarea');
    let svgDiv = document.createElement('div');
    let svgOne = document.createElement('img');
    let svgTwo = document.createElement('img');
    let btn = document.createElement('button');

    labelOne.setAttribute('for','title');
    labelOne.textContent = 'Title';
    labelTwo.setAttribute('for','description');
    labelTwo.textContent = 'Description'
    inputOne.setAttribute('placeholder','Title.....');
    inputOne.setAttribute('id','title');
    inputTwo.setAttribute('placeholder','Anything you want to write.....');
    inputTwo.setAttribute('id','description');
    inputTwo.setAttribute('rows','5')
    inputTwo.setAttribute('cols','19')
    svgOne.src = '../Images/pencil.svg';
    svgOne.classList.add('edit');
    svgOne.style.cssText = 'display: none; pointer-events: none;'
    svgTwo.src = '../Images/close-thick.svg';
    svgTwo.classList.add('close');
    svgDiv.classList.add('close-and-edit')
    btn.textContent = 'Save';

    svgDiv.appendChild(svgOne);
    svgDiv.appendChild(svgTwo);
    dialog.appendChild(svgDiv);
    dialog.appendChild(labelOne);
    dialog.appendChild(inputOne);
    dialog.appendChild(labelTwo);
    dialog.appendChild(inputTwo);
    dialog.appendChild(btn);
    content.appendChild(dialog);
    dialog.showModal();
}