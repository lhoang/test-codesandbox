<script>
  export let data = [];
  let pageSize = 5;
  let page = 1;

  let headers =
    data.length > 1
      ? Object.keys(data[0]).map(key => ({
          key,
          value: ""
        }))
      : [];

  $: filters = headers
    .map(({ key, value }) =>
      value.trim == "" ? d => true : d => d[key].toString().includes(value)
    )
    .reduce((p1, p2) => d => p1(d) && p2(d));

  $: last = Math.ceil(data.length / pageSize);
  $: pagination = [...Array(last)].map((_, i) => i + 1);

  $: displayedData = data
    .filter(d => filters(d))
    .slice((page - 1) * pageSize, page * pageSize);

  const isDate = d => /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(d);
  const formatDateTime = s => new Intl.DateTimeFormat(["fr"]).format(new Date(s));
</script>


<div class="content">
<table>
  <thead>
    <tr>
      {#each headers as head}
        <th>{head.key}
          <input type=text
            id="filter-{head.key}" name="filter-{head.key}"
            placeholder="filtre"
            bind:value={head.value}
          />
          </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each displayedData as line, i}
      <tr class={i%2>0?"row-odd":"row-even"}>
      {#each headers as {key}}
        <td>
        {#if isDate(line[key])}
          {formatDateTime(line[key])}
        {:else}
          {line[key]}
        {/if}
        </td>
      {/each}
    </tr>
    {/each}
  </tbody>
</table>
</div>
<div class="controls">
  <div class="paging">
    <ul>
      <li><button on:click={()=>page=1}>&lt;</button></li>
      {#each pagination as p}
       <li><button on:click={()=>page=p}
            >{p}</button></li>
      {/each}
      <li><button on:click={()=>page=last}
              >&gt;</button>
      </li>
    </ul>
  </div>
  <div class="page-size">
    <select id="page-size" bind:value={pageSize}>
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .paging ul {
    list-style: none;
    display: flex;
  }
  .paging li {
    line-height: 1.25;
    color: rgb(219, 39, 119);
  }
  .paging button {
    border: 0;
    background-color: white;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    border: 1px rgb(209, 213, 219) solid;
    border-radius: 0.35rem;
    line-height: inherit;
    color: inherit;
  }

  .page-size {
    margin-left: 2rem;
  }
  .page-size select {
    width: 3rem;
    text-align: right;
    padding: 0.5rem 0.25rem;
    border: 1px rgb(209, 213, 219) solid;
    border-radius: 0.35rem;
  }
</style>