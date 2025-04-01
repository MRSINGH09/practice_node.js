// console.dir(document);

// url of page
// console.dir(document.URL);

// //domain of page

// console.log(document.domain);
// console.log(document.head);

const addButton = document.getElementById("add-button");
console.log(addButton);

addButton.addEventListener("click", addItem);
function addItem(e) {
  e.preventDefault();
  const listItems = document.querySelector(".item-list-containor>ul");

  // Creating li tag
  const li = document.createElement("li");

  // Creating p tag
  const p = document.createElement("p");

  // Accessing the input value
  p.innerText = document.getElementById("input-list").value.toLowerCase();
  const button = document.createElement("button");
  button.id = "delete_btn";
  button.addEventListener("click", (e) => {
    listItems.removeChild(e.target.parentElement);
  });
  button.innerText = "x";
  li.append(p, button);

  listItems.appendChild(li);
}
