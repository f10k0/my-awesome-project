
const dlg = document.getElementById('registrationDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('registrationForm');
let lastActive = null;


openBtn.addEventListener('click', () => {
    lastActive = document.activeElement;
    dlg.showModal();
    dlg.querySelector('input').focus();
});


closeBtn.addEventListener('click', () => {
    dlg.close();
    lastActive?.focus();
});


dlg.addEventListener('click', (e) => {
    if (e.target === dlg) {
        dlg.close();
        lastActive?.focus();
    }
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(field => {
        field.setCustomValidity('');
        field.removeAttribute('aria-invalid');
    });
    

    if (!form.checkValidity()) {
        form.reportValidity();
        
        // Подсветка невалидных полей
        fields.forEach(field => {
            if (!field.checkValidity()) {
                field.setAttribute('aria-invalid', 'true');
            }
        });
        return;
    }
    

    alert('Регистрация успешно завершена! Добро пожаловать!');
    form.reset();
    dlg.close();
    lastActive?.focus();
});


const phone = document.getElementById('phone');
phone.addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value.startsWith('7') || value.startsWith('8')) {
        value = value.substring(1);
    }
    
    let formattedValue = '+7 (';
    if (value.length > 0) formattedValue += value.substring(0, 3);
    if (value.length >= 3) formattedValue += ') ' + value.substring(3, 6);
    if (value.length >= 6) formattedValue += '-' + value.substring(6, 8);
    if (value.length >= 8) formattedValue += '-' + value.substring(8, 10);
    
    this.value = formattedValue;
});