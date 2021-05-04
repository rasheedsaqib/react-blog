import axios from "../axios";

const users = [];

axios.get('/users')
    .then(response => {
        response.data.forEach(user => {
            users.push(user);
        });
    });

const images = ['https://bit.ly/3eeAoNp', 'https://bit.ly/3nIKedi', 'https://bit.ly/3eLtj5Q'];
const commentImages = ['https://bit.ly/3tg9Waf', 'https://bit.ly/3vKC7jp', 'https://bit.ly/2Rpu5gZ', 'https://bit.ly/3nMB53w', 'https://bit.ly/3b0Uvwd'];

export const getRandomImage = () => {
    return images[Math.floor(Math.random() * 3)];
}

export const getRandomCommentImage = () => {
    return commentImages[Math.floor(Math.random() * 5)];
}

export const capitalize = string => {
    let newString = '';
    string.split(' ').forEach(word=>{
        newString = newString + word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    });
    return newString;
}

export const getAuthorName = (userId) => {
    let autherName = 'Saqib Rasheed';
    users.forEach(user => {
        if(user.id === userId){
            autherName = user.name;
        }
    });

    return autherName;
}