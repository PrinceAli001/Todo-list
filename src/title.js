export default function title() {
    let content = document.querySelector('#content');
    let p = document.querySelector('p');


    p.addEventListener('click', () => {
        let dialog = document.createElement('dialog');
        let labelOne = document.createElement('label');
        let labelTwo = document.createElement('label');
        let inputOne = document.createElement('input');
        let inputTwo = document.createElement('textarea');

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

        dialog.appendChild(labelOne);
        dialog.appendChild(inputOne);
        dialog.appendChild(labelTwo);
        dialog.appendChild(inputTwo);
        content.appendChild(dialog);
        dialog.showModal();
    });
}