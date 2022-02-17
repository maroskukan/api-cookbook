var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=yourcustomapikeyvalue&tag=squirrels&rating=g');

request.onload = function ()
{
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
}

request.send()