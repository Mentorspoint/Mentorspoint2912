document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    const submitBtn = document.getElementById('submitBtn');

    confirmPasswordInput.addEventListener('input', () => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordError.textContent = "Passwords don't match";
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    });

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordError.textContent = "Passwords don't match";
            passwordError.style.display = 'block';
            return;
        }

        submitBtn.disabled = true;

        try {
            const response = await fetch('http://localhost:5001/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: document.getElementById('username').value,
                    email: document.getElementById('email').value,
                    password: passwordInput.value
                })
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error);

            alert('Account created! Redirecting to login...');
            setTimeout(() => window.location.href = 'login.html', 2000);

        } catch (error) {
            alert('Signup error: ' + error.message);
        } finally {
            submitBtn.disabled = false;
        }
    });
});
