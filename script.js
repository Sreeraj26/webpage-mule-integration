function sendJSON(){
              
    let result = document.querySelector('.result');
    let fname = document.querySelector('#fname');
    let sname = document.querySelector('#sname');
      
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = "https://web-page-api.us-e2.cloudhub.io/api/webpage";

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };

    // Converting JSON data to string
    var data = JSON.stringify({ "first_name": fname.value, "second_name": sname.value });

    // Sending data with the request
    xhr.setRequestHeader("client_id","bc27aa37d65647dbb0bc8672ce7a80f0");
    xhr.setRequestHeader("client_secret","262aAd1369e3403CAB871f12542D8ac9");
    xhr.send(data);
}