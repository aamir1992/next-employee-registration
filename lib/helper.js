
const BASE_URL = "https://next-employee-registration.vercel.app/"
// all user
export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}api/users`)
    const json = await response.json()

    return json;
}

// single user
export const getUser = async (userId) => {
    const Options = {
        method : 'GET',
        headers : {'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
    }

    const response = await fetch(`${BASE_URL}api/users?id=${userId}`, Options)
    console.log("URL: ", `${BASE_URL}api/users?id=${userId}`)
    console.log("Response: ", response)
    const json = await response.json()
    return json;
}

// posting a new user
export async function addUser(formData){
    try{
        const Options = {
            method : 'POST',
            headers : {'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
            body: JSON.stringify(formData)
        }
        
        const response = await fetch(`${BASE_URL}api/users`, Options)
        const json = await response.json()

        return json;
    }catch(error){
        return error;
    }
}


// Update a new user
export async function updateUser(userId, formData){
    const Options = {
        method : 'PUT',
        headers : {'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
        body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}api/users/${userId}`, Options)
    const json = await response.json()
    return json;
}


// Delete a new user
export async function deleteUser(userId){
    const Options = {
        method : 'DELETE',
        headers : {'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
    }

    const response = await fetch(`${BASE_URL}api/users/${userId}`, Options)
    const json = await response.json()
    return json;
}