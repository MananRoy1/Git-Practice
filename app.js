function addNote() {
  const input = document.getElementById("noteInput");
  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("notes").appendChild(li);
  input.value = "";
}
