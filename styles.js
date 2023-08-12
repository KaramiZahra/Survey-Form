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