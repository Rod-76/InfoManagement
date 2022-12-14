$(document).ready(function(){
    $('.modal').modal();
    $('.collapsible').collapsible();
  })

function toggleModal() {
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));