const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
<style>
  .navbar{
    background-color: #F2D027;
  }
  .nav-link{
    color: #000000;
    font-size:1.2rem;
    font-weight: bold;
    font-family: 'Fjalla One', sans-serif;
  }
  .nav-item a:hover{
    color: #D98E04;
  }
  .navbar-nav > li{
    padding-left:30px;
    padding-right:30px;
  }

</style>

<nav class="navbar navbar-expand-lg fixed-top">
<div class="container-fluid">
  <a class="navbar-brand" href="./index.html">   <img
  src="https://i.ibb.co/hxGrxRF/logo-1.png"
  alt="Matcha"/></a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="./recipe.html">Categories</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="./countries.html">Countries</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;

 class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);