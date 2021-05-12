
const API = "https://chatbotmetrics.mybluemix.net"

const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

let raw = "{\"month\":5,\n\"year\":2021}";

const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

export const fetchAPI = () => {
    let age = fetch(`${API}/getedad/`, requestOptions).then(response => response.text())
    let gender = fetch(`${API}/getgenero/`, requestOptions).then(response => response.text())
    let nationality = fetch(`${API}/getnacionalidad/`, requestOptions).then(response => response.text())
    let services = fetch(`${API}/getcatsmenu/`, requestOptions).then(response => response.text())
    let messages = fetch(`${API}/getgeneral/`, requestOptions).then(response => response.text())

    return [age, gender, nationality, services, messages]
}

