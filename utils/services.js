
export async function FetchRandomSong() {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_QUESTIONS_ENDPOINT);
      const data = await response.json();
      
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
      if (word && word.length > 0) {
          if (word[0] === word[0].toUpperCase()) {
              if (currentLine !== '') {
                  lines.push(currentLine.trim());
                  currentLine = '';
              }
          }
      }
      currentLine += `${word} `;
  });
    
    // Add the last line to the lines array
    if (currentLine !== '') {
        lines.push(currentLine.trim());
    }
    
    // Join the lines with a newline character
    const formattedText = lines.join('\n');
    
    return formattedText
    
    }