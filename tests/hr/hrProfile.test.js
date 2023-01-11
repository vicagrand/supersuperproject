let arr_students = [];
let arr_hr = [];
let arr_inspector = [];
let flag;


// Set up the User for testing
let user = {
  username: "jack@gmail.com",
  full_name: "jack",
  about_you: "about",
  location: "dimona",
  education: "degree",
  jobTitle: "bull****",
  lookingForWork: "no",
  type:'hr'
};
beforeEach(() => {
  // Set up the DOM for testing
  document.body.innerHTML = `
  <label class="email" id="email" value="jack@gmail.com"></label>
  <input id="qualification" placeholder="many degrees" value = "many degrees">
  <input id="about_you" placeholder="very smort" value = "very smort">
  <input id="location" placeholder="space" value = "space">
  <input id="position" placeholder="workee" value = "workee">
  <input id="fname" placeholder="dani" value = "dani">
  <input id="forHire" placeholder = "no" value = "no">
  <label class="warning" id="id_warning"></label>
  `;
  arr_hr = [user]//we're gonna use this as our students storage
  id_warning.innerHTML = "";

});
function displayProfile(){
  let full_name = arr_hr[0].full_name;
  document.getElementById("fname").placeholder = `${full_name}`;
  let about_you = arr_hr[0].about_you;
  document.getElementById("about_you").placeholder = `${about_you}`;
  let location = arr_hr[0].location;
  document.getElementById("location").placeholder = `${location}`;
  let username = arr_hr[0].username;
  document.getElementById("email").innerHTML += `${username}`;
  let education = arr_hr[0].education;
  document.getElementById("qualification").placeholder = `${education}`;
  let jobTitle = arr_hr[0].jobTitle;
  document.getElementById("position").placeholder = `${jobTitle}`;
}

describe('displayProfile',()=>{
it('Should display the user details on the screen', () => {
  
  //call the function
  displayProfile();
  

  //Check that it was updated and this should be displayed on the screen
  expect(document.getElementById("fname").placeholder).toEqual("jack");
  expect(document.getElementById("about_you").placeholder).toEqual('about');
  expect(document.getElementById("location").placeholder).toEqual('dimona');
  expect(document.getElementById("email").innerHTML).toEqual('jack@gmail.com');
  expect(document.getElementById("qualification").placeholder).toEqual('degree');
  expect(document.getElementById("position").placeholder).toEqual('bull****');
});
});
