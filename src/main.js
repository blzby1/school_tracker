async function fetchDataFromApi(source) {
    try {
        const response = await fetch(source);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
       } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchDataFromApi('/info').then(function(data) {
        document.getElementById('data').innerText = JSON.stringify(data, null, 2);
});