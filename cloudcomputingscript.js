function highlightText(element, searchText) {
    var content = element.textContent || element.innerText;

    if (content.includes(searchText)) {
      var regex = new RegExp(searchText, 'g');
      content = content.replace(regex, '<span class="highlight">' + searchText + '</span>');
      element.innerHTML = content;
    }
  }

  function searchAndHighlight() {
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    var divElements = document.querySelectorAll('searchword');

    divElements.forEach(function (element) {
      element.innerHTML = element.textContent || element.innerText;

      highlightText(element, searchText);
    });
  }