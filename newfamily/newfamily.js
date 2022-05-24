import { createFamily } from '../fetch-utils.js';

const homeButton = document.getElementById('home-button');
const form = document.getElementById('form');

homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const family = { name: data.get('new-name') };
    const creation = await createFamily(family);
    if (creation) alert(`New loving family "${family.name}" added!`);
    form.reset();
    window.location.href = '/';
});