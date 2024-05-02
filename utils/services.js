export async function FetchQuizQuestions() {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_QUESTIONS_ENDPOINT);
      const data = await response.json();
      // Process the data
        console.log(data);
        return data
    } catch (error) {
      // Handle any errors
      console.error('Error:', error);
    }
  }
  
