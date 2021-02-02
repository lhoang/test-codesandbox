<script>
</script>


<div class="content">
<table>
  <thead>
    <tr>
      <th>col 1</th>
      <th>col 2</th>
    </tr>
  </thead>
  <tbody>
    <tr class="row-odd">
      <td>A</td>
      <td>B</td>
    </tr>
    <tr class="row-even">
      <td>C</td>
      <td>D</td>
    </tr>
  </tbody>
</table>
</div>
<div class="controls">
  <div class="paging">
    <ul>
      <li><button>&lt;</button></li>
      <li><button>1</button></li>
      <li><button>2</button></li>
      <li><button>3</button></li>
      <li><button>&gt;</button></li>
    </ul>
  </div>
  <div class="page-size">
    <select id="page-size">
      <option>5</option>
      <option>10</option>
    </select>
    <label for="page-size">lignes par page</label>
  </div>
</div>


<style>
  table {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td {
    border: 2px solid rebeccapurple;
    padding: 0.5rem 1rem;
  }

  thead {
    background-color: rgb(199, 210, 254);
  }
  .row-odd {
    background-color: rgb(238, 242, 255);
  }
  .row-even {
    background-color: rgb(224, 231, 255);
  }
  .controls {
    display:flex;
    align-items: center;
    justify-content: flex-end;
  }

  .paging ul {
    list-style:none;
    display: flex;
  }
  .paging li {
    line-height: 1.25;
    color: rgb(219, 39, 119);
  }
  .paging button {
    border:0;
    background-color: white;
    cursor: pointer;
    padding: .5rem .75rem;
    border: 1px rgb(209, 213, 219) solid;
    border-radius: .35rem;
    line-height: inherit;
    color: inherit;
  }

  .page-size {
    margin-left: 2rem;
  }
  .page-size select {
    width: 3rem;
    text-align: right;
    padding: .5rem .25rem;
    border: 1px rgb(209, 213, 219) solid;
    border-radius: .35rem;
  }

</style>