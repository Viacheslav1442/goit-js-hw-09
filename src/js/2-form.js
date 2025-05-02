const STORAGE_KEY = 'feedback-msg';
const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('textarea');
const formData = {}; // глобальний об'єкт стану форми

// Стилізація
const submitBtn = form.lastElementChild;
submitBtn.classList.add('btn-login');
const formItems = Array.from(form.children);
formItems.forEach(el => el.classList.add('login-items-form'));
const inputItems = Array.from(form.firstElementChild.children);
inputItems.forEach(el => el.classList.add('input'));
textArea.classList.add('style-textarea');

// Завантаження даних із localStorage
populateForm();

// Обробка подій
form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', handleFormInput);

// Записуємо дані в formData і localStorage при кожному введенні
function handleFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Обробка надсилання форми
function handleFormSubmit(event) {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form));
    const isFormComplete = Object.values(data).every(value => value.trim() !== '');

    if (!isFormComplete) {
        alert('Будь ласка, заповніть усі поля перед відправленням форми.');
        return;
    }

    console.log('Надіслані дані:', data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    form.reset();

    // Очищення глобального formData
    Object.keys(formData).forEach(key => delete formData[key]);
}

// Заповнюємо форму зі збережених даних
function populateForm() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
        const parsed = JSON.parse(saved);
        for (const key in parsed) {
            if (form.elements[key]) {
                form.elements[key].value = parsed[key];
                formData[key] = parsed[key]; // також оновлюємо formData
            }
        }
    } catch (error) {
        alert('⚠️ Помилка при завантаженні даних із localStorage.');
    }
}