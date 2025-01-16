document.addEventListener('DOMContentLoaded', () => {
  const skillList = document.getElementById('skill-list');

  // Fetch skills from the server
  fetch('http://localhost:3000/skills')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((skill) => {
        const div = document.createElement('div');
        div.textContent = `${skill.skill_name} (Teacher: ${skill.teacher})`;
        skillList.appendChild(div);
      });
    });

  // Handle Registration
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.text())
      .then((data) => alert(data));
  });
});
