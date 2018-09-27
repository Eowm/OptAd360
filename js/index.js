const accept = document.getElementById('accept');
const cancel = document.getElementById('cancel');

const MILISECONDS_IN_DAY = 24*60*60*1000;
const addDays = (date, days) => new Date(date.getTime() + days*MILISECONDS_IN_DAY);

const setCookie = (name, value) => {
    const date = new Date();
    const expires = addDays(date, 1);
    document.cookie = `${name} = ${value}; expires= + ${expires.toUTCString()}; path=/`;
}

if(!document.cookie.match(/^(.*;)?\s*newCookie\s*=\s*[^;]+(.*)?$/)) {
    document.getElementById('scroll').classList.add('scroll');
    
    accept.addEventListener('click', event => {
        document.querySelector('.box').classList.add('hide');
        setCookie('newCookie', 'accept');
        document.getElementById('opacity').classList.add('show');
        document.getElementById('scroll').classList.remove('scroll');
    })
    
    cancel.addEventListener('click', event => {
        document.querySelector('.box').classList.add('hide');
        setCookie('newCookie', 'cancel');
        document.getElementById('opacity').classList.add('show');
        document.getElementById('scroll').classList.remove('scroll');
    })
} else {
    document.querySelector('.box').classList.add('hide');
    document.getElementById('opacity').classList.add('show');
    document.getElementById('scroll').classList.remove('scroll');
}