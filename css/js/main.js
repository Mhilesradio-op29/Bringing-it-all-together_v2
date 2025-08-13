document.addEventListener('DOMContentLoaded', function () {
  console.log('Site loaded');
  const form = document.querySelector('form[name="contact"]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks! This demo form does not send emails.');
    });
  }
});
