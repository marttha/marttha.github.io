function pobierzDane(event) {
    event.preventDefault();

    window.onscroll = function (event) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            ajax("GET", "https://jsonplaceholder.typicode.com/users", wrzucDaneHtml)
        }
    }
};

function wrzucDaneHtml(dane) {
    for (var i = 0; i < dane.length; i++) {

        var pId = document.createElement('p');
        var pName = document.createElement('p');
        var pUserName = document.createElement('p');
        var pAdress = document.createElement('p');

        var pIdContent = document.createTextNode('Id: ' + dane[i].id);
        var pNameContent = document.createTextNode('Name: ' + dane[i].name);
        var pUserNameContent = document.createTextNode('User Name: ' + dane[i].name);
        var pAdressContent = document.createTextNode('Adress: ' + dane[i].website);

        pId.appendChild(pIdContent);
        pName.appendChild(pNameContent);
        pUserName.appendChild(pUserNameContent);
        pEmail.appendChild(pEmailContent);
        pAdress.appendChild(pAdressContent);

        document.body.appendChild(pId);
        document.body.appendChild(pName);
        document.body.appendChild(pUserName);
        document.body.appendChild(pEmail);
        document.body.appendChild(pAdress);
    }
}


function ajax(method, url, callback) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.open(method, url);

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                var returnDane = httpRequest.responseText;

                var jsonObj = JSON.parse(returnDane);

                callback(jsonObj);


                httpRequest = null;
            }
        }
    }

    httpRequest.send();
}