let elList = document.querySelector('.list')
let elInput = document.querySelector('.search')

const users = [
    {
        name: 'Ali',
        text: 'binnmaa'
    },
    {
        name: 'Vali',
        text: 'binnmaa'
    },
    {
        name: 'Gani',
        text: 'binnmaa'
    },
    {
        name: 'Odil',
        text: 'binnmaa'
    },
    {
        name: 'Davron',
        text: 'binnmaa'
    },
    {
        name: 'Baqo',
        text: 'binnmaa'
    },
    {
        name: 'Quvonch',
        text: 'binnmaa'
    },
    {
        name: 'Shaxzod',
        text: 'binnmaa'
    },
    {
        name: 'Sanjar',
        text: 'binnmaa'
    },
    {
        name: 'Gulnoza',
        text: 'binnmaa'
    },
]

function render(data, element) {
    data.forEach(row => {
        let newLi = document.createElement('li')
        newLi.textContent = row.name
        element.appendChild(newLi)
    })
}


elInput.addEventListener('input', () => {

    let newUsers = []

    users.forEach(user => {
        if (user.name.toLowerCase().includes(elInput.value.toLowerCase())) {
            newUsers.push(user)
        }
    })
    elList.innerHTML = null
    render(newUsers, elList)
})

render(users, elList)