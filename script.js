function validateForm() {
    let isValid = true;
    let errorMessage = "Required Input in the Blank";

    const productName = document.getElementById("productName").value.trim();
    const rating = document.getElementById("rating").value.trim();
    const comments = document.getElementById("comments").value.trim();


    const productNameError = document.getElementById("productNameError");
    const ratingError = document.getElementById("ratingError");
    const commentsError = document.getElementById("commentsError");


    productNameError.textContent = "";
    ratingError.textContent = "";
    commentsError.textContent = "";

  
    if (productName === "") {
        productNameError.textContent = "Product name is required.";
        isValid = false;
    }

  
    if (rating === "") {
        ratingError.textContent = "Rating is required.";
        isValid = false;
    } else if (isNaN(rating) || rating < 1 || rating > 5) {
        ratingError.textContent = "Please enter a rating between 1 and 5.";
        isValid = false;
    }

  
    if (comments === "") {
        commentsError.textContent = "Comments are required.";
        isValid = false;
    } 

    if (!isValid) {
        alert(errorMessage);
    } else {
        alert("Thank you for your feedback! Your submission has been received.");
    }

    return isValid; 
}
