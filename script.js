 
    const toggle = document.getElementById('theme-toggle');
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light');
      toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    });

    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      menuBtn.classList.toggle('toggle');
    });
