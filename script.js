document.getElementById("voteForm").addEventListener("submit", function (e) {
      e.preventDefault(); // prevent default form submission

      const nameInput = document.getElementById("name").value.trim();
      const ageInput = document.getElementById("age").value.trim();

      if (nameInput === "" || ageInput === "") {
        alert("Please enter valid details.");
        return;
      }

      const age = Number(ageInput);

      const checkEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve(`Welcome, ${nameInput}. You can vote.`);
          } else {
            reject(`Oh sorry ${nameInput}. You aren't old enough.`);
          }
        }, 4000);
      });

      checkEligibility
        .then((message) => alert(message))
        .catch((errorMessage) => alert(errorMessage));
    });