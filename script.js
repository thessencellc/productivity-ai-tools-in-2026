const form = document.getElementById('my-form');
const box  = document.getElementById('downloadBox');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/mojplovw', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.style.display = 'none';
      box.style.display  = 'block';
    } else {
      alert('Submission failed. Please try again.');
    }

  } catch (error) {
    alert('Something went wrong. Please try again.');
  }
});
