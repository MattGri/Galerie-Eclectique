const container = document.querySelector('.container');
const footer = document.querySelector('.copyright');
const main = document.querySelector('main');
const div = document.createElement('div');
const hey = document.createElement('p');
const you = document.createElement('p');
const get = document.createElement('p');
const of = document.createElement('p');
const redLine = document.createElement('span');
const storePolicies = document.createElement('p');
const image = document.createElement('img');
const buttonShop = document.createElement('button');


div.classList.add('modal');

hey.innerText = 'hey';
hey.classList.add('hey');

you.innerText = 'you!';
you.classList.add('you');

get.innerText = 'Get free shipping on orders';
get.classList.add('get');

of.innerText = 'of $35 or more.*';
of.classList.add('of');

redLine.classList.add('redLine');

storePolicies.innerHTML = '*See <a class="store">store policies</a> for full details.'
storePolicies.classList.add('policies');

image.src = 'assets/img/modal.png';
image.classList.add('img');

buttonShop.innerText = 'shop';
buttonShop.classList.add('btnShop');


setTimeout(() => {
    document.body.appendChild(div);
    div.append(hey);
    div.append(you);
    div.append(redLine);
    div.append(get);
    div.append(of);
    div.append(storePolicies);
    div.append(image);
    div.append(buttonShop);

    container.style.opacity = '0.2';
    container.style.pointerEvents = 'none'
    main.style.opacity = '0.2';
    footer.style.opacity = '0.2';
    footer.style.pointerEvents = 'none';
}, 1000);


const closeAd = (e) => {
    if(e.target.class !== 'modal' && !e.target.closest('.modal')){
        container.style.opacity = '1';
        container.style.pointerEvents = 'auto'
        main.style.opacity = '1';
        footer.style.opacity = '1';
        footer.style.pointerEvents = 'auto';  
        div.remove(); 
    }
}


document.addEventListener('click', closeAd);
