document.addEventListener('DOMContentLoaded', function() {
    const x = prompt("Input X");
    const y = prompt("Input Y");
    const table = document.getElementById('table');
    let thead = document.createElement('thead');
    let firstRow = thead.appendChild(document.createElement('tr'));
    let firstColumn = document.createElement('th');
    firstColumn.textContent = "  ";
    firstRow.appendChild(firstColumn);
    thead.appendChild(firstRow);
    table.appendChild(thead);

    for (let i = 1; i <= x; i++) {
        let column = document.createElement('th');
        column.textContent = i;
        firstRow.appendChild(column);
    }

    for (let i = 1; i <= y; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        let column = document.createElement('th');
        column.textContent = i;
        row.appendChild(column);
        table.appendChild(row);
        for (let j = 1; j <= x; j++) {
            column = document.createElement('td');
            column.textContent = i * j;
            row.appendChild(column);
        }
    }

});