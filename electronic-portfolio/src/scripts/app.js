document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const projectId = event.target.getAttribute('data-project-id');
            displayProjectDetails(projectId);
        });
    });

    function displayProjectDetails(projectId) {
        const projectDetails = document.getElementById('project-details');
        // Clear previous details
        projectDetails.innerHTML = '';

        // Fetch project data (this could be from an API or a local JSON file)
        fetch(`projects/${projectId}.html`)
            .then(response => response.text())
            .then(data => {
                projectDetails.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching project details:', error);
                projectDetails.innerHTML = '<p>Sorry, there was an error loading the project details.</p>';
            });
    }
});