let selectElem = document.querySelector('select');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    if (img.src.includes('BYUI-Logo-Dark.png')) {
        img.src = 'BYUI-Logo-Light.png';
    } else if (img.src.includes('BYUI-Logo-Light.png')) {
        img.src = 'BYUI-Logo-Dark.png';
    }
}

let img = document.querySelector('img');
img.changeTheme = changeTheme;