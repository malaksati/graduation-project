function sendLoginData() {
    const email = document.getElementById('floatingEmail').value;
    const password = document.getElementById('floatingPassword').value;
    if (email === '') {
        alert('Please enter an email');
        return;
    }else if (password === '') {
        alert('Please enter a password');
        return;
    }else{
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        if (email === 'admin' && password === 'admin') {
            window.location.href = 'admin/dashboard.html';
        }else if (email === 'advisor' && password === 'advisor') {
            window.location.href = 'advisor/dashboard.html';
        }
        else if (email === 'student' && password === 'student') {
            window.location.href = 'student/schedule.html';
        }
        else{
            alert('Invalid email or password');
        }
        // alert('Login successful');
        // window.location.href = '/profile';
    }
    // fetch('http://localhost:3000/auth/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ email, password })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         localStorage.setItem('token', data.token);
    //         window.location.href = '/profile';
    //     } else {
    //         alert(data.message);
    //     }
    // })
    // .catch(error => console.error(error));
}
