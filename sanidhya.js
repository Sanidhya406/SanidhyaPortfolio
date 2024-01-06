function redirectToGmail() {
  window.location.href = "mailto:sanidhyatiwari22@gmail.com";
}
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          navLinks.forEach(link => link.classList.remove('active-link'));
          this.classList.add('active-link');
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth' });
      });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.querySelector('.featured-name p');
  const textContent = textElement.textContent.trim();
  textElement.textContent = '';

  function typeWriterEffect(index) {
      if (index < textContent.length) {
          textElement.textContent += textContent.charAt(index);
          setTimeout(() => typeWriterEffect(index + 1), 100);
      } else {
          textElement.textContent = textContent;
      }
  }
  typeWriterEffect(0);
});
function redirectToMoreProjects() {
  window.location.href = 'more.html';
}