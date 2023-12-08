document.addEventListener('DOMContentLoaded', (event) => {
    lastModified('lastModified');
});

function lastModified(id) {
    const lastModifiedDate = document.lastModified;
    const formattedDate = new Date(lastModifiedDate).toLocaleString();
    document.getElementById(id).textContent = formattedDate;
}