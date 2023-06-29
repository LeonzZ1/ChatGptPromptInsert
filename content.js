
const insertText = (text) => {
    // Check if the page has a textarea.
    const textarea = document.querySelector('textarea');
    if (textarea) {
      const startPosition = textarea.selectionStart; // The position of the cursor at the beginning of the selected text.
      const endPosition = textarea.selectionEnd; // The position of the cursor at the end of the selected text.
      const originalText = textarea.value; // The original text in the textarea.
      const newText = originalText.slice(0, startPosition) + text + originalText.slice(endPosition); // The new text in the textarea.
      
      textarea.value = newText; // Insert the new text into the textarea.
      textarea.focus(); // Focus on the textarea.
      textarea.selectionEnd = startPosition + text.length; // Set the cursor position at the end of the inserted text.
      textarea.selectionStart = startPosition + text.length; // Set the cursor position at the beginning of the inserted text.
    }
  };
  
  // Create a button.
  const addButton = (title,text) => {
    const button = document.createElement('button'); // Create a button.
    button.textContent = `${title}`; // Set the button text.
    button.addEventListener('click', (event) => {
        event.preventDefault();
        insertText(text); // Insert text into the textarea.
      });
    return button;
  };
  
  // Add buttons to the page.
  const init = () => {
    // Check if the page has a textarea.
    const textarea = document.querySelector('textarea').parentElement;
    if (textarea && !document.querySelector('.textarea-buttons')) {
      // Create a container for the buttons.
      const container = document.createElement('div');
      container.className = 'textarea-buttons';
      container.style.display = 'flex';
      container.style.gap = '5px';
      container.style.marginTop = '5px';
      // Add buttons to the container.
      container.appendChild(addButton('Rewrite','I want you to act as a professional reviewer for academic journal. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to rewrite my simplified A0-level words and sentences with more academic,  upper level English words and sentences. Keep the meaning same, but make them more suitable for native English speakers to read. I want you to only reply the correction, the improvements and nothing else, do not write explanations. '));
      container.appendChild(addButton('Translate','I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in Chinese. I want you to only reply the correction, the improvements and nothing else, do not write explanations.'));
      // Add the container below the textarea.
      textarea.parentNode.insertBefore(container, textarea.nextSibling);
    }
  };
  
  init();
  
  // If the page uses dynamic elements, periodically check and add buttons if necessary.
  setInterval(init, 1000);
  
