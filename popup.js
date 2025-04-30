const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const submitButton = document.getElementById('submitForm');

openModal.onclick = () => {
    modal.style.display = 'flex';
};

closeModal.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
};

submitButton.onclick = (e) => {
    e.preventDefault();
    const name = document.getElementById('nameField').value.trim();
    const email = document.getElementById('emailField').value.trim();
    const phone = document.getElementById('phoneField').value.trim();

    if (!name || !email || !phone) {
        alert('Veuillez remplir tous les champs.');
    } else {
        alert('Merci ! Votre demande de Drive Test a été envoyée.');
        modal.style.display = 'none';
    }
};
