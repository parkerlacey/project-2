const createReview = async (event) => {
  event.preventDefault();

  // Get values from form
  //! rating in progress
  const title = document.getElementById('review-title').value.trim();
  const content = document.getElementById('review-content').value.trim();
  const rating = 5;

  // If all values completed --> create fetch request
  if (title && content && rating){
    const response = await fetch(`/api/review/`, {
      method: 'POST',
      body: JSON.stringify({ title, content, rating }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
 
    // If response.ok --> go back to home page
    if (response.ok){
      document.location.replace('/');
    } else {
      alert('Failed to create review');
    }
  }
};

// const getRating = function() {
//   const ratingOptions = document.getElementsByName('rating-option');

//   for (i=0; i < ratingOptions.length; i++){
//     if (ratingOptions[i].checked){
//       // get value of that id
//       // find element
//       // get value of that id
//       const id = ratingOptions[i].ge
//       const rating = document.getElementById
//     }
//   }
// }

// Add click listener to create-review-btn
document.getElementById('create-review-btn').addEventListener('click', createReview);