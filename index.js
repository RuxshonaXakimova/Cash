let name = prompt('Как вас зовут?').toLowerCase().trim()

let money = 10000



if (name === 'alex' ) {
    alert('Добро пожаловать,' + name)

    let account = +prompt('Номер счёта').trim()
        if (account === 7777){

            let action = +prompt('Сколько обналичить?').trim()
            if(action <= 10000){
                alert('Всё отлично')
                alert('С вашего счёта снято ' + action)
                alert('Остаток ' + (money-action))
            } else if(isNaN(action)) {
                alert('При введении суммы нужно использовать только цифры!')
            }
            else {
                alert('Недостаточно средств!')
            }
        }else{
            alert('Неверный номер счёта!')
        }
} else {
    alert('Пользователь не найден, досвидули!')
}


