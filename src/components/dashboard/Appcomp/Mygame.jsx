import React from 'react';

const App = () => {
    const shareApp = () => {
        if (navigator.share) {
            navigator.share({
                title: 'My App',
                text: 'Check out this awesome app!',
                url: 'https://myapp.example.com', // Replace with your app URL
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else {
            alert("Web Share API is not supported in this browser.");
        }
    };

    return (
        <div>
            <h1>My React App</h1>
            <button onClick={shareApp}>Share</button>
        </div>
    );
};

export default App;
