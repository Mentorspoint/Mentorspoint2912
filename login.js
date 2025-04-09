document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const formMessages = document.getElementById('formMessages');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        formMessages.innerHTML = '';

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            showMessage('Please fill in all fields', 'error');
            return;
        }

        loginBtn.disabled = true;

        try {
            const response = await fetch('http://localhost:5001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error);

            localStorage.setItem('authToken', data.token);
            localStorage.setItem('userEmail', data.email);

            showMessage('Login successful! Redirecting...', 'success');
            setTimeout(() => window.location.href = 'dashboard.html', 1500);

        } catch (error) {
            showMessage(error.message, 'error');
        } finally {
            loginBtn.disabled = false;
        }
    });

    function showMessage(msg, type) {
        const div = document.createElement('div');
        div.className = `${type}-message`;
        div.textContent = msg;
        formMessages.appendChild(div);
        if (type === 'error') setTimeout(() => div.remove(), 5000);
    }
});
