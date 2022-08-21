function createElement(playerName, button) {
    const tableBody = document.getElementById('table-body');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <tr>
     <th>${count}</th>
     <td>${playerName}</td>
     </tr>
    `;

    tableBody.appendChild(tableRow);
    button.setAttribute('disabled', true);
}