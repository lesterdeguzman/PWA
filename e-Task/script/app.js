const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.textbox');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
var x = 0;

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'block') {
      listDiv.style.display = 'none';
    } else {
    //   toggleList.textContent = 'Hide card';
      listDiv.style.display = 'block';
    }
    return x++;
  });

  addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.setAttribute("id", "list"+x);
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
  });

  removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
  });


  self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
  });

self.addEventListener('fetch', event => {
    if (event.request.url.endsWith('/style.css')) {
      event.respondWith(
        fetch('http://localhost/e-task/style/style.css')
      );
    }
  });

  self.addEventListener('fetch', event => {
      if (event.request.url.endsWith('/app.js')) {
        event.respondWith(
          fetch('http://localhost/e-task/script/app.js')
        );
      }
    });

    self.addEventListener('fetch', event => {
        if (event.request.url.endsWith('/script.js')) {
          event.respondWith(
            fetch('http://localhost/e-task/script/script.js')
          );
        }
      });
      self.addEventListener('fetch', event => {
          if (event.request.url.endsWith('/sw.js')) {
            event.respondWith(
              fetch('http://localhost/e-task/script/sw.js')
            );
          }
        });
        self.addEventListener('fetch', event => {
            if (event.request.url.endsWith('/manifest.json')) {
              event.respondWith(
                fetch('http://localhost/e-task/manifest.json')
              );
            }
          });
