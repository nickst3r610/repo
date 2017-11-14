const fs = require('fs');

function create() {
    for (var i = 1; i <= 100; i++) {
        fs.mkdir('another-new-repo', () => {
            console.log('Created folder!')
        });
    }
}


function remove() {
    for (var i = 1; i <= 100; i++) {
        fs.rmdir(`folder-${i}`, (err, data) => {
            if (err) console.log('Error!', err);
            console.log('Deleted folder!')
        });

    }
}

//create()
remove()