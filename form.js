document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission

    // Collect form data into object
    const formData = new FormData(form);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Convert the form data object to JSON
    const formDataJSON = JSON.stringify(formDataObject, null, 2);

    // Display the JSON data
    result.textContent = formDataJSON;
  });
});
