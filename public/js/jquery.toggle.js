
(function ($) { // Begin jQuery
  $(function () { // DOM ready

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      $('nav ul').slideToggle();
    });

    // Hamburger to X toggle
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });

    $('#button-toggle').click(function () {
      $(this).toggleClass('active');
      $('#nav-overlay').toggleClass('open');
    });

    // Close after clicking on a li
    $('#nav-overlay li').on('click', function () {
      $('#nav-toggle').click().removeClass("active");
      $("#nav-overlay").hide();
    });

  }); // end DOM ready
})(jQuery); // end jQuery