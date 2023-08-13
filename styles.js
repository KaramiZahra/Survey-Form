let countrySelect = document.querySelector('.country')
let citySelect = document.querySelector('.city')

let dataBase = {
    'America': ['Chicago', 'Boston', 'Arizona'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal'],
    'Germany': ['Berlin', 'Munich', 'Frankfurt', 'Cologne'],
    'France': ['Paris', 'Lyon'],
    'Turkey': ['Izmir', 'Istanbul', 'Bursa', 'Antalya', 'Mersin']
}

countrySelect.addEventListener('change', function () {

    if (countrySelect.value === 'Select Country') {
        citySelect.innerHTML = ''
        citySelect.innerHTML = '<option>Select City</option>'
    } else {
        let countryValue = countrySelect.value
        let cityValue = dataBase[countryValue]

        citySelect.innerHTML = ''
        cityValue.forEach(function (city) {
            citySelect.innerHTML += '<option>' + city + '</option>'
        })
    }
})


let passwordInput = document.getElementById('password')
let passwordBtn = document.querySelector('.password-btn')
let passwordBtnIcon = document.querySelector('.password-btn i')

passwordInput.addEventListener('focus', function() {
    passwordBtn.style.right = '45px'
})

passwordInput.addEventListener('blur', function() {
    passwordBtn.style.right = '25px'
})

passwordBtn.addEventListener('click', function() {
    if(passwordInput.type === 'password') {
        passwordInput.type = 'text'
        passwordBtnIcon.classList = 'fa-solid fa-eye-slash'
    } else {
        passwordInput.type = 'password'
        passwordBtnIcon.classList = 'fa-solid fa-eye'
    }
})