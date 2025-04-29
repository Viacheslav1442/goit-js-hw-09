const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: '',
};

// Заповнення форми при завантаженні
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
}

// Слухач input
form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Слухач submit
form.addEventListener('submit', evt => {
    evt.preventDefault();
    const { email, message } = formData;

    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };
});