const hamburgerMenu = document.querySelector('.fa-bars');
const navigationItems = document.querySelector('.wrapper');
const deleteBtn = document.querySelector('.fa-times-circle');



const showNavigationItems = () =>{
    navigationItems.style.display = 'block';
    navigationItems.style.position = 'absolute';
    navigationItems.style.right = '50px';
    navigationItems.style.top = '5%';
    hamburgerMenu.style.display = 'none';
    deleteBtn.style.display = 'block';
}

const hideNavigationItems = () => {
    navigationItems.style.display = 'none';
    deleteBtn.style.display = 'none';
    hamburgerMenu.style.display = 'block';
}

deleteBtn.addEventListener('click', hideNavigationItems);
hamburgerMenu.addEventListener('click', showNavigationItems);

