

if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () { //promise feature
            console.log('Service worker registered');
        });
}



