const searchBarTemplate = document.createElement('template');
searchBarTemplate.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
<style>
.searchbar{
    text-align:center;
}

</style>

    <div class= "searchbar">
    <form>
        <input type="text" id="search" name="search" placeholder="Search for a meal">
        <button type="submit">&#128269;</button>
        <button type="submit">&#10536;</button>
      </form>
    </div> 
`;

class SearchBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(searchBarTemplate.content);
  }
}
customElements.define('searchbar-component', SearchBar);


// AQUI EMPIEZA LA LOGICA 
