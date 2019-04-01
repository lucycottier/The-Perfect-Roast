(() => {

        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        const email = urlParams.get('email');
        document.getElementById('name').innerText = name;
        document.getElementById('email').innerText = email;


})();
