var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products?qty=2&order=name');

request.onload = function ()
{
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    // Access the value for description key of first product
    var description = parsedData[0].description
    console.log(description);
}

request.send();