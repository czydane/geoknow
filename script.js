const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

const themeToggleBtn = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeToggleBtn.textContent = savedTheme === "light" ? "☀️" : "🌙";
} else {
    document.body.classList.add("dark");
    themeToggleBtn.textContent = "🌙";
}

themeToggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
        document.body.classList.replace("light", "dark");
        themeToggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.replace("dark", "light");
        themeToggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    }
});
function toggleInfo(id) {
  const box = document.getElementById(id);
  box.style.display = (box.style.display === "block") ? "none" : "block";
}

function toggleCard(button) {
  const parent = button.parentElement;
  const cards = parent.querySelectorAll('.info-box');

  // Auto-close other cards
  cards.forEach(card => {
    if (card.previousElementSibling !== button) {
      card.style.display = 'none';
    }
  });

  // Toggle the clicked card
  const cardToShow = button.nextElementSibling;
  cardToShow.style.display = (cardToShow.style.display === 'block') ? 'none' : 'block';
}

// toggles a main dropdown list (active/inactive)
    function toggleDropdown(listId){
      const list = document.getElementById(listId);
      if(!list) return;
      list.style.display = (list.style.display === 'block') ? 'none' : 'block';
    }

    // show the info card that's directly below the clicked button,
    // and auto-close other cards in the same list (column)
    function toggleCardBelow(buttonElem, cardId){
      // the parent container that holds the button and cards (the dropdown-box)
      // find nearest ancestor with class 'dropdown-box'
      let parent = buttonElem.parentElement;
      while(parent && !parent.classList.contains('dropdown-box')){
        parent = parent.parentElement;
      }
      if(!parent) parent = document; // fallback

      // close all other card boxes inside this parent
      const cards = parent.querySelectorAll('.info-box');
      cards.forEach(c => {
        if(c.id !== cardId) c.style.display = 'none';
      });

      // toggle the target card
      const target = document.getElementById(cardId);
      if(!target) return;
      target.style.display = (target.style.display === 'block') ? 'none' : 'block';
    }