// Sample data to simulate server data
const jobs = [
    { id: '1', title: 'Software Engineer', location: 'New York' },
    { id: '2', title: 'Data Scientist', location: 'San Francisco' },
    { id: '3', title: 'Product Manager', location: 'Seattle' }
  ];
  
  const courses = [
    { id: '1', title: 'Full Stack Web Development', provider: 'Coursera' },
    { id: '2', title: 'Machine Learning', provider: 'Udacity' },
    { id: '3', title: 'Digital Marketing', provider: 'edX' }
  ];
  
  // Function to display jobs
  function displayJobs() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Available Jobs</h2><ul>' +
      jobs.map(job => `<li><strong>${job.title}</strong> - ${job.location}</li>`).join('') +
      '</ul>';
  }
  
  // Function to display courses
  function displayCourses() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Courses</h2><ul>' +
      courses.map(course => `<li><strong>${course.title}</strong> - ${course.provider}</li>`).join('') +
      '</ul>';
  }
  
  // Function to handle section display
  function showSection(section) {
    if (section === 'jobs') {
      displayJobs();
    } else if (section === 'courses') {
      displayCourses();
    } else {
      document.getElementById('content').innerHTML = '<p>Select a section from the menu.</p>';
    }
  }
  
  // Initialize the application
  document.addEventListener('DOMContentLoaded', () => {
    // Set default content
    document.getElementById('content').innerHTML = '<p>Select a section from the menu.</p>';
    
    // Set up navigation
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        showSection(link.getAttribute('onclick').split("'")[1]);
      });
    });
  });  
