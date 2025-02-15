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
        if (email === 'admin' && password === '123456') {
            window.location.href = 'admin/dashboard.html';
        }else if (email === 'advisor' && password === '123456') {
            window.location.href = 'advisor/dashboard.html';
        }
        else if (email === 'student' && password === '123456') {
            window.location.href = 'student/schedule.html';
        }
        else if (email === 'financialaffairs' && password === '123456') {
            window.location.href = 'financial_affairs/details.html';
        }
        else if (email === 'managerfinancial' && password === '123456') {
            window.location.href = 'financial_affairs/manager/home.html';
        }
        else if (email === 'managerstudent' && password === '123456') {
            window.location.href = 'student_affairs/manager/home.html';
        }
        else if (email === 'studentaffairs' && password === '123456') {
            window.location.href = 'student_affairs/applications.html';
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
