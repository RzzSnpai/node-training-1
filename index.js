const fs = require("fs");
fs.readFile('homework-1.txt', 'utf8', (error, data) => {
    if (error) throw error;
    console.log('Transactions \n————————————————————');
    let counter = 0;
    data.split('\n').forEach(function (line) {
        if(/[0-9]/.test(line.charAt(0))) {
            const arr = line.split(':');
            const n = arr.length -1;
            if(arr[n] != 'OK') {
                console.log(arr[0]);
                counter ++;
            }
        };
    });
    if(counter == 0) console.log('Todas las transacciones fueron exitosas');
});