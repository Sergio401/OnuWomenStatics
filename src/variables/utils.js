export const API = "https://chatbotriohachametrics.mybluemix.net" //process.env.API_URL ||

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

//let raw = String.raw`{"month":${2},"year":${2021}}`;
//let raw = String.raw`{"month":${new Date().getMonth() + 1},"year":${new Date().getFullYear()}}`;

export const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    //body: raw,
    redirect: 'follow'
};

export const APIRequest = async (endpoint, options) => {
    //let age = fetch(`${API}/getedad/`, requestOptions).then(response => response.text())
    //let gender = fetch(`${API}/getgenero/`, requestOptions).then(response => response.text())
    //let nationality = fetch(`${API}/getnacionalidad/`, requestOptions).then(response => response.text())
    //let services = fetch(`${API}/getcatsmenu/`, requestOptions).then(response => response.text())
    //let messages = fetch(`${API}/getgeneral/`, requestOptions).then(response => response.text())

    // const age = await fetch(`${API}/getedad/`, requestOptions).then(response => response.json())
    // const gender = await fetch(`${API}/getgenero/`, requestOptions).then(response => response.json())
    // const nationality = await fetch(`${API}/getnacionalidad/`, requestOptions).then(response => response.json())
    // const services = await fetch(`${API}/getcatsmenu/`, requestOptions).then(response => response.json())
    // const messages = await fetch(`${API}/getgeneral/`, requestOptions).then(response => response.json())
    // const satisfaction = await fetch(`${API}/getsolution/`, requestOptions).then(response => response.json())

    //return [age, gender, nationality, services, messages, satisfaction]
    return await fetch(`${API}${endpoint}`, options).then(response => response.json());
}

