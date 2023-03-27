const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#message').value.trim();
  
    if (comment) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/mechanic');
      } else {
        alert('Failed to create comment');
      }
    }
  };