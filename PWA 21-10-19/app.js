const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.textbox');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'block') {
      listDiv.style.display = 'none';
    } else {
    //   toggleList.textContent = 'Hide card';                        
      listDiv.style.display = 'block';
    }                             
  });

  addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
  });
    
  removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
  });