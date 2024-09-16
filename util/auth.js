import axios from 'axios';

const API_KEY = 'AIzaSyA232zYyDmBz5n5K44aTCoJuAGYnwUEsq8'

export async function createUser(email, password) {
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
        {
        email: email,
        password: password,
        returnSecureToken: true
        }
    );
}