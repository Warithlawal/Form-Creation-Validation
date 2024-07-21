document.addEventListener('DOMContentLoaded', () => {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const users = await response.json();
            dataContainer.innerHTML = ''; // Clear loading message

            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);
        } catch (error) {
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data.';
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    fetchUserData();
});
