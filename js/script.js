document.addEventListener('DOMContentLoaded', () => {
    const actionBlock = document.getElementById('actionBlock');
  
    // Handle double-click event
    actionBlock.addEventListener('dblclick', () => {
      alert('Double-clicked!');
    });
  
    // Handle copy content event
    actionBlock.addEventListener('copy', (e) => {
      const selection = window.getSelection().toString();
      if (selection.length > 0) {
        alert(`Copied: ${selection}`);
      } else {
        alert('No text selected to copy!');
      }
    });
  
    // Handle drag event
    actionBlock.setAttribute('draggable', true);
  
    actionBlock.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', actionBlock.innerText);
      alert('Drag started!');
    });
  
    actionBlock.addEventListener('dragend', () => {
      alert('Drag ended!');
    });
  });