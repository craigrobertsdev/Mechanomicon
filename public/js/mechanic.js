// const newCommentHandler = async (event) => {
//     event.preventDefault();
  
//     const comment = document.querySelector('#message').value.trim();
  
//     if (comment) {
//       const response = await fetch(`/api/projects`, {
//         method: 'POST',
//         body: JSON.stringify({ comment }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/mechanic');
//       } else {
//         alert('Failed to create comment');
//       }
//     }
//   };

//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);