var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/prodict1')

request.onabort = function ()
{
    var response = request.response;
    var jsonData = JSON.parse(response);
    console.log(jsonData);
};

request.onerror = function ()
{
    console.log('There seems to be a problem!');
}

request.send()