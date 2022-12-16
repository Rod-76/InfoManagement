$(document).ready(function () {
  $('.modal').modal();
  $('.collapsible').collapsible();
  $('.datepicker').datepicker();
  $('.sidenav').sidenav();
  $('.dropdown-trigger').dropdown();

})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

$(document).ready(function () {
  $('.pushpin-demo-nav').each(function () {
      var $this = $(this);
      var $target = $('#' + $(this).attr('data-target'));
      $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
      });
  });
});
