const container = document.querySelector('#data_container');

const apiUrl = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/global-shark-attack/records';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error('Error fetching data:', e);
        return { records: [] };
    }
}

async function main() {
    const myData = await fetchData(apiUrl);
    console.log(myData);

    function showData() {
        if (myData.records && myData.records.length > 0) {
            myData.records.forEach((element) => {
                let card = document.createElement('article');
                card.innerHTML = `
                    <h2>${element.record.fields.name || 'No name available'}</h2>
                    <p>${element.record.fields.description || 'No description available'}</p>
                    <p><strong>Date:</strong> ${element.date || 'No date available'}</p>
                `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p>No data available</p>';
        }
    }

    showData();
}

main();