// Set global variable for rating result
let ratingValue;

const elRatingComponentForm = document.querySelector('.rating-component__form');
const elRatingComponentResultLabel = document.querySelector('.rating-component__result-label');

// When there's a form
if (elRatingComponentForm) {
  // listen for its submit event
  elRatingComponentForm.addEventListener('submit', function (evt) {
    // Prevent form submission
    evt.preventDefault();

    // Get rating value from the form
    let ratingFormData = new FormData(elRatingComponentForm);
    ratingValue = parseInt(ratingFormData.get('rating'), 10);

    // Set the result label text to the rating
    elRatingComponentResultLabel.textContent = ratingValue;

    // Find the current active step
    let currentStep = elRatingComponentForm.closest('.rating-component__step');

    // Listen for currentStep's animation end, so the thank you section will appear in a needed time
    currentStep.addEventListener('animationend', function (evt) {
      // When the fade out animation is done, remove the active class from the current step
      currentStep.classList.remove('rating-component__step--active');

      // Make the thank you section appear with animation
      currentStep.nextElementSibling.classList.add('rating-component__step--active', 'rating-component__step--in');
    });

    // Start fade out animation of the current step
    currentStep.classList.add('rating-component__step--out');
  });
}
