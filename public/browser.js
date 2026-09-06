console.log("FrontEnd JS ishga tushdi!");

function itemTemplate(item) {
  return ` <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between mb-2 shadow-sm border-0 rounded">
          <span class="item-text">
            ${item.reja}
          </span>
          <div>
            <button data-id="${item._id} " class="edit-me btn btn-secondary btn-sm me-1">
              O'zgartirish
            </button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan harakat qiling!");
    });
});

document.addEventListener("click", function (e) {
  //   Delete Operatsion
  if (e.target.classList.contains("delete-me")) {
    console.log(e.target);
    if (confirm("O'chirishni tasdiqlaysizmi? ")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan urinib ko'ring!");
        });
    }
  }

  // Edit Operatsion
  if (e.target.classList.contains("edit-me")) {
    alert("Siz Edit tugmasini bosdingiz!");
  }
});
