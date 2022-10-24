const xhr = new XMLHttpRequest();
const list = document.querySelector("ul");

xhr.open("GET", " https://users-api-id.herokuapp.com/users");

xhr.send();

xhr.onload = function () {
  const response = JSON.parse(xhr.response);
  response.forEach((response) => renderItem(response));
};

// version #1

function renderItem({ name, photo, position }) {
  const item = document.createElement("li");

  (item.innerHTML = `
  <h2>${name}</h2>
  <img src="${photo}">
  <p>${position}</p>
  `),
    list.append(item);
}

// version #2

// xhr.onload = function () {
//   const response = JSON.parse(xhr.response);
//   response.forEach(({ name, photo, position }) => {
//     const item = document.createElement("li");
//     const title = document.createElement("h2");
//     const image = document.createElement("img");
//     const description = document.createElement("p");
//     title.innerText = name;
//     image.src = photo;
//     description.innerText = position;
//     item.append(title, image, description);
//     list.append(item);
//   });
// };
