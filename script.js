// Javascript / agar warna tetap solid seperti hovering saat tab active
function setActive(element) {
    var links = document.querySelectorAll('.navbar a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    element.classList.add('active');
  }

//   arrow scroll 
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}