function ban_user() {
  let username = document.querySelector("#user_select").value;
  let obj = {
    username: username,
    full_name: "",
    password: "",
    confirm_password: "",
    question: "",
    type: "",
    //new
    about_you: "",
    location: "",

    education: "",
    jobTitle: "",
    lookingForWork: "",
  };
  function removeUser() {
    let arr_students =
      JSON.parse(localStorage.getItem("Students and Graduates")) || [];
    for (let key in arr_students) {
      if (arr_students[key].username == username) {
        arr_students.splice(key, 1);
        // arr_students.appen
        localStorage.setItem(
          "Students and Graduates",
          JSON.stringify(arr_students)
        );
      }
    }

    let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
    for (let key in arr_hr) {
      if (arr_hr[key].username == username) {
        arr_hr.splice(key, 1);
        localStorage.setItem("HR", JSON.stringify(arr_hr));
      }
    }

    let arr_inspector = JSON.parse(localStorage.getItem("Inspectors")) || [];
    for (let key in arr_inspector) {
      if (arr_inspector[key].username == username) {
        arr_inspector.splice(key, 1);
        localStorage.setItem("Inspectors", JSON.stringify(arr_inspector));
      }
    }
  }
}
