function handleSubmit(event) {
    const form = event.target.closest('form');
    if (form.checkValidity()) {
        alert("Форма успешно отправлена!");
        form.reset();
    } else {
        alert("Пожалуйста, заполните все обязательные поля.");
    }
}

function handleReset() {
    alert("Форма сброшена!");
}

function validatePhoneInput(event) {
    const input = event.target;
    let value = input.value;

    if (value.indexOf('+') > 0) {
        value = value.replace(/\+/g, '');
    }
    value = value.replace(/[^+\d]/g, '');
    
    if (value.length > 0 && value[0] !== '+') {
        value = '+' + value.replace(/\+/g, '');
    }

    if (value.length > 13) {
        value = value.slice(0, 13);
    }

    if (value[0] === '+') {
        value = '+' + value.slice(1).replace(/\D/g, '');
    } else {
        value = value.replace(/\D/g, '');
    }

    input.value = value;
}
