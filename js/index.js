
let count = 0;
function addToList(button) {
    count++;
    if (count > 5) {
        count = 5;
        return alert('you have already choose 5 players. You can not choose anymore player');
    } else {
        const playerName = button.parentElement.parentElement.children[0].innerText;

        createElement(playerName, button);
    }
};

document.getElementById('calculate').addEventListener('click', function () {
    const playerExpenses = document.getElementById('player-expenses');
    const perPlayerInputFeild = document.getElementById('per-player-input');
    const perPlayerInputFeildValue = parseInt(perPlayerInputFeild.value);

    if (perPlayerInputFeild.value === '') {
        return alert('please enter the per player input number');
    } else {
        playerExpenses.innerText = count * perPlayerInputFeildValue;
    }

});

document.getElementById('calculate-total').addEventListener('click', function () {
    // get manaer input feild
    const managerInputFeild = document.getElementById('manager-input-feild');
    const managerInputFeildValue = parseInt(managerInputFeild.value);

    // get coach input feild
    const coachInputFeild = document.getElementById('coach-input-feild');
    const coachInputFeildValue = parseInt(coachInputFeild.value);

    // get player expense element
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesValue = parseInt(playerExpenses.innerText);

    // get total amount element
    const totalAmount = document.getElementById('total-amount');

    if ((managerInputFeild.value === '') || (coachInputFeild.value === '') || (playerExpenses.innerText === '')) {
        return alert('please enter input number');
    } else {
        totalAmount.innerText = managerInputFeildValue + coachInputFeildValue + playerExpensesValue;
    };
})