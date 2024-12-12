const username = document.getElementById('username');
const usernameLabel = document.getElementById('username_lable');
const form = document.getElementById('form');

username.addEventListener('click', () => {
    usernameLabel.style.fontSize = '0.7em';
    username.style.position = 'relative';
    usernameLabel.style.position = 'absolute';
    usernameLabel.style.top = '0';
    usernameLabel.style.left = '20px';
    usernameLabel.style.backgroundColor = 'white';
    usernameLabel.style.padding = '0 10px';
    usernameLabel.style.zIndex = '1000';

    // Add a class to form to trigger transition
    form.classList.add('expanded');
});
