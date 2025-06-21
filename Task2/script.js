document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

const messageBox = document.getElementById("formMessage");
messageBox.textContent = "Your form is submitted successfully!";
messageBox.style.display = "block";

  document.getElementById("contactForm").reset();
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = function () {
    li.remove();
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
