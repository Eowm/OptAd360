const accept = document.getElementById('accept');
const cancel = document.getElementById('cancel');

let addDays = (theDate, days) => {
    return new Date(theDate.getTime() + 60*1000);
}

let setCookie = (name, value) => {
    let date = new Date();
    let expires = addDays(date, 1);
    console.log(expires);
    console.log(name);
    console.log(value);
    document.cookie = name + "=" + value + ";" + 'expires=' + expires.toUTCString() + "; path=/";
    console.log(document.cookie);
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
    

