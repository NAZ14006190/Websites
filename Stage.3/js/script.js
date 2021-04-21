function  APIcall()

{
    var xhttp = new XMLHttpRequest();
    var url = 'https://official-joke-api.appspot.com/random_joke';

    console.log(url);

    xhttp.open('GET', url);

    xhttp.send();

    xhttp.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);
            console.log(data);

            document.getElementById('setup').innerHTML = data.setup;
            document.getElementById('punchline').innerHTML = data.punchline;


        }
    }
}
function sentRequest() {
    alert("Your request has been sent! Please, follow further e-mail instructions.");
}
