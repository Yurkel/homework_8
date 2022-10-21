const xhr = new XMLHttpRequest();
const list = document.querySelector("ul");

xhr.open("GET", " https://users-api-id.herokuapp.com/users");

xhr.send();

xhr.onload = function () {
  const response = JSON.parse(xhr.response);
  response.forEach((response) => renderItem(response));
};

const item = document.createElement("li");

function renderItem({ name, photo, position }) {
  const title = document.createElement("h1");
  title.innerText = name;
  const image = document.createElement("img");
  image.src = photo;
  const description = document.createElement("p");
  description.innerText = position;
  item.append(title, image, description);
}

list.append(item);

// function renderItem({ name, photo, position }) {
//   const item = document.createElement("li");
//   (document.li.innerHTML = <h2>${name}</h2>),
//     (<img>${photo}</img>),
//     (<p>${position}</p>);
//   list.append(item);
// }

// function renderItem({ name, photo, position }) {
//   const item = document.createElement("li");
//   item.innerText = <h2>${name}</h2>;
//   item.src = <img>${photo}</img>;
//   item.innerText = <p>${position}</p>;
//   list.append(item);
// }

// function renderPhoto(photo) {
//   const item = document.createElement("img");
//   item.src = photo;
//   list.append(item);
// }
// function renderPosition(position) {
//   const item = document.createElement("p");
//   item.innerText = position;
//   list.append(item);
// }

// xhr.onload = function () {
//   const response = JSON.parse(xhr.response);
//   response.forEach((response) => renderName(response.name));
//   response.forEach((response) => renderPhoto(response.photo));
//   response.forEach((response) => renderPosition(response.position));
// };

// function renderName(name) {
//   const item = document.createElement("h1");
//   item.innerText = name;

//   list.append(item);
// }
// function renderPhoto(photo) {
//   const item = document.createElement("img");
//   item.src = photo;
//   list.append(item);
// }
// function renderPosition(position) {
//   const item = document.createElement("p");
//   item.innerText = position;
//   list.append(item);
// }
