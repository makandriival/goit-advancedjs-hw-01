const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

// Hydrate from localStorage on page load
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsed = JSON.parse(savedData);
  formData.email = parsed.email || '';
  formData.message = parsed.message || '';
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

// Track input changes and persist to localStorage
feedbackForm.addEventListener('input', (e) => {
  const { name, value } = e.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Handle form submission
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  feedbackForm.reset();
});
