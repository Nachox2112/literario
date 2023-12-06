document.addEventListener("DOMContentLoaded", function() {
    var openModalBtns = document.querySelectorAll('.open-modal-btn');
    var modals = document.querySelectorAll('.modal');
  
    openModalBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var modalId = btn.getAttribute('data-modal-id');
        var modal = document.getElementById(modalId);
        modal.style.display = 'block';
  
        // Agregar evento de clic fuera del modal para cerrarlo
        window.addEventListener('click', function(event) {
          if (event.target === modal) {
            modal.style.display = 'none';
          }
        });
      });
    });
  
    // Agregar evento de clic en el botón de cierre para cada modal
    modals.forEach(function(modal) {
      var closeModalBtn = modal.querySelector('.close');
      closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
      });
    });
  });
  