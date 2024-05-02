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
  

export const FormulateQuote = (quote) => {

  // Split the text into words
  const words = quote.split(' ');
  
  let lines = [];
  let currentLine = '';
  
  words.forEach(word => {
      // If the word is capitalized, start a new line
      if (word[0] === word[0].toUpperCase()) {
          // Add the current line to the lines array
          if (currentLine !== '') {
              lines.push(currentLine.trim());
              currentLine = '';
          }
      }
      // Add the word to the current line
      currentLine += `${word} `;
  });
  
  // Add the last line to the lines array
  if (currentLine !== '') {
      lines.push(currentLine.trim());
  }
  
  // Join the lines with a newline character
  const formattedText = lines.join('\n');
  
  console.log(formattedText);
  return formattedText
  
  }