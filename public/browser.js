console.log("FrontEnd JS ishga tushdi!");

// CREATE FIELD
let createField = document.getElementById("create-field");

// =====================================
// ITEM TEMPLATE
// =====================================

function itemTemplate(item) {
  return `
    <li class="plan-item">

      <div class="plan-content">

        <div class="plan-number">
          1
        </div>

        <div class="plan-info">

          <span class="item-text">
            ${item.reja}
          </span>

          <small>
            Maqsadingiz sari yana bir qadam 🚀
          </small>

        </div>

      </div>


      <div class="plan-actions">

        <button
          data-id="${item._id}"
          class="edit-me"
          type="button"
        >
          ✏️
          <span>O'zgartirish</span>
        </button>


        <button
          data-id="${item._id}"
          class="delete-me"
          type="button"
        >
          🗑️
          <span>O'chirish</span>
        </button>

      </div>

    </li>
  `;
}

// =====================================
// REJA SONINI YANGILASH
// =====================================

function updateCount() {
  let allItems = document.querySelectorAll(".plan-item");

  let count = document.getElementById("plan-count");

  if (count) {
    count.innerText = allItems.length;
  }
}

// =====================================
// REJA RAQAMLARINI YANGILASH
// =====================================

function updateNumbers() {
  let allItems = document.querySelectorAll(".plan-item");

  allItems.forEach(function (item, index) {
    let number = item.querySelector(".plan-number");

    if (number) {
      number.innerText = index + 1;
    }
  });
}

// =====================================
// CREATE OPERATSIYA
// =====================================

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // bo'sh reja yubormaslik
  if (!createField.value.trim()) {
    alert("Reja kiriting!");

    createField.focus();

    return;
  }

  axios
    .post("/create-item", {
      reja: createField.value.trim(),
    })

    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));

      createField.value = "";

      createField.focus();

      updateNumbers();

      updateCount();
    })

    .catch((err) => {
      console.log(err);

      alert("Iltimos qaytadan harakat qiling!");
    });
});

// =====================================
// DELETE VA EDIT
// =====================================

document.addEventListener("click", function (e) {
  // ===================================
  // DELETE OPERATSIYA
  // ===================================

  let deleteButton = e.target.closest(".delete-me");

  if (deleteButton) {
    if (confirm("O'chirishni tasdiqlaysizmi?")) {
      let id = deleteButton.getAttribute("data-id");

      axios
        .post("/delete-item", {
          id: id,
        })

        .then((response) => {
          console.log(response.data);

          deleteButton.closest(".plan-item").remove();

          updateNumbers();

          updateCount();
        })

        .catch((err) => {
          console.log(err);

          alert("Iltimos qaytadan urinib ko'ring!");
        });
    }
  }

  // ===================================
  // EDIT OPERATSIYA
  // ===================================

  let editButton = e.target.closest(".edit-me");

  if (editButton) {
    let planItem = editButton.closest(".plan-item");

    let itemText = planItem.querySelector(".item-text");

    let userInput = prompt(
      "O'zgartirishni kiriting!",
      itemText.innerText.trim(),
    );

    if (userInput && userInput.trim()) {
      axios
        .post("/edit-item", {
          id: editButton.getAttribute("data-id"),

          new_input: userInput.trim(),
        })

        .then((response) => {
          console.log(response.data);

          itemText.innerText = userInput.trim();
        })

        .catch((err) => {
          console.log(err);

          alert("Iltimos qaytadan harakat qiling!");
        });
    }
  }
});

// =====================================
// DELETE ALL OPERATSIYA
// =====================================

let cleanAllButton = document.getElementById("clean-all");

if (cleanAllButton) {
  cleanAllButton.addEventListener("click", function () {
    let confirmDelete = confirm("Hamma rejalarni o'chirishni xohlaysizmi?");

    if (!confirmDelete) {
      return;
    }

    axios
      .post("/delete-all", {
        delete_all: true,
      })

      .then((response) => {
        alert(response.data.state);

        document.getElementById("item-list").innerHTML = "";

        updateCount();
      })

      .catch((err) => {
        console.log(err);

        alert("Iltimos qaytadan urinib ko'ring!");
      });
  });
}

updateNumbers();

updateCount();
