//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Remove specified words and sort the array
    const sortedBands = bands.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);

    // Display the sorted list
    const bandList = document.getElementById('band');
    sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        bandList.appendChild(listItem);
    });

    function removeArticles(band) {
        return band.replace(/^(a |an |the )/i, '').trim();
    }
});

