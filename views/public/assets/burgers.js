const createBurgerBtn = document.getElementById("addBurger");
if (createBurgerBtn) {
  createBurgerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("ive been clicked");
    const newBurger = {
      name: document.getElementById("burger_name").value,
    };
    fetch("/api/burger", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBurger),
    }).then(() => {
      document.getElementById("burger_name").value = "";
      console.log("Created a new cat!");
      location.reload();
    });
  });
}
const changeSleepBtns = document.querySelectorAll(".btn-default");
if (changeSleepBtns) {
  changeSleepBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-burger");
      console.log(id);
      fetch(`/burgers/update/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          console.log(response);
          location.reload('/');
        } else {
          alert("something went wrong!");
        }
      });
    });
  });
}