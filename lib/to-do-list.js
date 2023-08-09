const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true },
];

// TODO: Use the template in the `index.html` to dynamically generate a list based on `todos` array
// first get the template element
const template = document.querySelector("#todoItemTemplate");
// get the container of the to do s
const list = document.querySelector("#todosContainer");
// iterate over the todos array

todos.forEach((todo) => {
  // console.log(todo);
  // clone the template
  const clone = template.content.cloneNode(true);
  // set the title in the title element
  clone.querySelector(".title").innerText = todo.title;
  // check the checkbox if its done
  const checkbox = clone.querySelector("input.d-flex");
  checkbox.checked = todo.done;
  // insert the cloned element into the container
  list.appendChild(clone);
});
