console.log("JavaScript connecté !");


const form = document.querySelector("#contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.querySelector("#nom").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (nom === "" || email === "" || message === "") {
        alert(" Veuillez remplir tous les champs.");
        return;
    }

    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValide) {
        alert(" Adresse email invalide.");
        return;
    }

    alert("Merci " + nom + " ! Ton message a été envoyé.");
    form.reset();
});


const toggleBtn = document.querySelector("#toggleBtn");
const extraText = document.querySelector("#extraText");

toggleBtn.addEventListener("click", function() {
    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        toggleBtn.textContent = "Afficher moins";
    } else {
        extraText.style.display = "none";
        toggleBtn.textContent = "Afficher plus";
    }
});


const status = document.querySelector("#status");
const statusBtn = document.querySelector("#statusBtn");

statusBtn.addEventListener("click", function() {
    if (status.textContent === "statut: disponible") {
        status.textContent = "Statut : occupé";
        statusBtn.textContent = "Revenir disponible";
    } else {
        status.textContent = "statut: disponible";
        statusBtn.textContent = "Changer statut";
    }
});


const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>Aucune tâche pour l'instant.</p>";
        return;
    }

    tasks.forEach(function(task, index) {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";

        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Veuillez entrer une tâche.");
        return;
    }

    tasks.push(taskText);
    saveTasks();
    displayTasks();
    taskInput.value = "";
});

displayTasks();

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("ouvert");

    
    if (nav.classList.contains("ouvert")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

nav.querySelectorAll("a").forEach(function(lien) {
    lien.addEventListener("click", function() {
        nav.classList.remove("ouvert");
        menuBtn.textContent = "☰";
    });

const sections = document.querySelectorAll(".section-cachee");

const observateur = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

sections.forEach(function(section) {
    observateur.observe(section);
});
});