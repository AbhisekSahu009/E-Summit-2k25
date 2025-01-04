
document.getElementById('showSidebarButton').addEventListener('click', showSidebar);
document.getElementById('hideSidebarButton').addEventListener('click', hideSidebar);

function showSidebar(event) {
    event.preventDefault(); // Prevent default action
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(event) {
    event.preventDefault(); // Prevent default action
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
