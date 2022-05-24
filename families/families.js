import { checkAuth, deleteBunny, moveBunny, getFamilies, logout } from '../fetch-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayFamilies() {
    // fetch families from supabase
    const families = await getFamilies();
    // clear out the familiesEl
    familiesEl.textContent = '';
    for (let family of families) {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const div2 = document.createElement('div');
        div.classList.add('family');
        // give each div an id equal to its supabase id
        div2.id = family.id;
        div2.classList.add('bunnies');
        h3.textContent = family.name;
        div.append(h3, div2);
        // need to preventDefault on all drag events, as well as setData on the id on dragstart and getData on drop so it "remembers" which item has moved
        div2.addEventListener('drop', async (e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData('text/plain');
            const dropBunny = document.getElementById(id);
            e.target.append(dropBunny);
            dropBunny.classList.remove('hide');
            // div2.id is the new family_id that the bunny is moving to, id is the original id from the family div it started in
            const mover = { family_id: div2.id, id: id };
            await moveBunny(mover);
        });
        div2.addEventListener('dragenter', (e) => {
            e.preventDefault();
        });
        div2.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        for (let bunny of family.fuzzy_bunnies) {
            const divBun = document.createElement('div');
            divBun.textContent = bunny.name;
            divBun.classList.add('bunny');
            divBun.addEventListener('click', async () => {
                await deleteBunny(bunny.id);
                await displayFamilies();
            });
            // set to draggable and setData. Hide the object the instant it is clicked to drag, but setTimeout to 0 so that you can "pick up" the still visible object and drag it around, and the left behind object is then immediately set to hidden
            divBun.draggable = true;
            divBun.id = bunny.id;
            divBun.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.id);
                setTimeout(() => {
                    e.target.classList.add('hide');
                }, 0);
            });
            div2.append(divBun);
        }

        familiesEl.append(div);
    }
}

displayFamilies();

