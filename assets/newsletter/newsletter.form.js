(function() {
  const ENDPOINT = 'https://sendportal.developers.italia.it/api/v1/subscribe';

  const form = document.querySelector('#newsletter-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault()

    const alert = document.querySelector('#newsletter-alert');
    const alertMessage = alert.querySelector('p');

    const data = {};
    new FormData(event.target).forEach((value, key) => (data[key] = value));

    fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP response: ${res.status}`);
      }

      alert.classList.remove('Alert--error');
      alert.classList.add('Alert--success');

      alertMessage.textContent = 'Ti abbiamo mandato un’email, segui il collegamento per confermare la tua iscrizione';
    })
    .catch(e => {
      alert.classList.remove('Alert--success');
      alert.classList.add('Alert--error');

      alertMessage.textContent = 'Qualcosa è andato storto 😔 Riprova più tardi';

      console.error(`Mailing list subscribe error: ${e}`);
    })
    .finally(() => {
      alert.ariaHidden = "false";
      alert.style.display = 'block';
    });
  });
}())
