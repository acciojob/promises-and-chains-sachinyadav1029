let ageInput = document.getElementById("age");
let nameInput = document.getElementById("name");
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  //e.preventDefault();

  const age = ageInput.value.trim();
  const name = nameInput.value.trim();

  if (!age || !name) {
    alert("Please enter valid details.");
    return;
  }

  const userAge = Number(age);

  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userAge >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  checkVotingEligibility
    .then(message => alert(message))
    .catch(error => alert(error));
});
