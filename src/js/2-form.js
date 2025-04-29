const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

// Відновлення даних з localStorage
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
    formData = savedData;
    form.email.value = savedData.email || '';
    form.message.value = savedData.message || '';
}

// Відстеження змін
form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Сабміт форми
form.addEventListener('submit', e => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
});