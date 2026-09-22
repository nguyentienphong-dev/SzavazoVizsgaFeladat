const path = "http://localhost:5242"

document.addEventListener('DOMContentLoaded', () => {
    const pollForm = document.getElementById('poll-form');
    const resultMessage = document.getElementById('result-message');
    const selectedText = document.getElementById('selected-text');
    
    const searchInput = document.getElementById('user-search');
    const searchBtn = document.getElementById('search-btn');
    const tableBody = document.getElementById('user-table-body');
    const statusContent = document.getElementById('status-content');
    const voterNameInput = document.getElementById('voter-name');

    /* 
        BACKEND KICSERÉLENDŐ:
        Helyettesítsd ezt az adatbázis-lekérdezéssel vagy töröld, ha backend kezeli az adatokat.
    */
    const mockUsers = [
        { name: 'Kovács János', grade: '5. osztály', hasVoted: true, votedFor: 'Apple' },
        { name: 'Nagy Anna', grade: '8. osztály', hasVoted: false, votedFor: '-' }
    ];

    const radioInputs = document.querySelectorAll('.option-input');
    radioInputs.forEach(input => {
        input.addEventListener('change', () => {
            document.querySelectorAll('.visual-radio').forEach(vr => vr.checked = false);
            if (input.checked) {
                const box = input.nextElementSibling;
                const visualRadio = box.querySelector('.visual-radio');
                if (visualRadio) visualRadio.checked = true;
            }
        });
    });

    function updateUserStatus(user) {
        if (!statusContent) return;

        if (!user) {
            statusContent.innerHTML = `
                <span class="badge bg-secondary mb-1">Nincs kiválasztva</span>
                <p class="small text-muted mb-0">Keress rá egy felhasználóra!</p>
            `;
            return;
        }

        if (user.hasVoted) {
            statusContent.innerHTML = `
                <span class="badge bg-danger fs-6 mb-1">Már szavazott! ❌</span>
                <p class="small text-dark mb-0 fw-bold">${user.name}</p>
                <p class="small text-muted mb-0">Többször nem szavazhat.</p>
            `;
        } else {
            statusContent.innerHTML = `
                <span class="badge bg-success fs-6 mb-1">Még NEM szavazott! ✔️</span>
                <p class="small text-dark mb-0 fw-bold">${user.name}</p>
                <p class="small text-muted mb-0">Leadhatja a szavazatát.</p>
            `;
        }
    }

    async function searchUser(query) {
        if (!query.trim()) return;

        tableBody.innerHTML = `<tr><td colspan="4" class="text-center text-muted py-2">Keresés...</td></tr>`;

        try {
            
            const response = await fetch(`/api/users?search=${encodeURIComponent(query)}`);
            const dummyData = await response.json();
            
            //const dummyData = mockUsers.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));

            if (dummyData.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="4" class="text-center text-muted py-2">Nincs találat.</td></tr>`;
                updateUserStatus(null);
                return;
            }

            tableBody.innerHTML = dummyData.map(user => `
                <tr>
                    <td class="fw-bold">${user.name}</td>
                    <td>${user.grade}</td>
                    <td>${user.hasVoted ? '<span class="badge bg-success">Igen</span>' : '<span class="badge bg-secondary">Nem</span>'}</td>
                    <td><span class="badge bg-info text-dark">${user.votedFor}</span></td>
                </tr>
            `).join('');

            updateUserStatus(dummyData[0]);

        } catch (error) {
            console.error('Hiba az adatok lekérésekor:', error);
            tableBody.innerHTML = `<tr><td colspan="4" class="text-center text-danger py-2">Hiba történt a lekérés során!</td></tr>`;
            updateUserStatus(null);
        }
    }

    searchBtn.addEventListener('click', () => searchUser(searchInput.value));
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchUser(searchInput.value);
        }
    });

    pollForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const selectedBrand = document.querySelector('input[name="brand"]:checked');
        const voterName = voterNameInput ? voterNameInput.value.trim() : '';

        if (!selectedBrand) return;

        
           const response = await fetch(`${path}/api/szavazas`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({ name: voterName, brand: selectedBrand.value })
           });
           const result = await response.json();
        

        const foundUser = mockUsers.find(u => u.name.toLowerCase() === voterName.toLowerCase());

        resultMessage.classList.remove('d-none', 'alert-success', 'alert-danger');

        if (!foundUser) {
            resultMessage.classList.add('alert-danger');
            resultMessage.querySelector('.alert-heading').textContent = 'Sikertelen szavazás! ❌';
            selectedText.textContent = `A(z) "${voterName}" nevű felhasználó nem található!`;
        } else if (foundUser.hasVoted) {
            resultMessage.classList.add('alert-danger');
            resultMessage.querySelector('.alert-heading').textContent = 'Sikertelen szavazás! ❌';
            selectedText.textContent = `${foundUser.name} már korábban leadta a szavazatát!`;
        } else {
            resultMessage.classList.add('alert-success');
            resultMessage.querySelector('.alert-heading').textContent = 'Köszönjük a szavazatodat! ✔️';
            selectedText.textContent = `${foundUser.name}, a szavazatodat rögzítettük a(z) ${selectedBrand.value} márkára!`;
        }
    });
});