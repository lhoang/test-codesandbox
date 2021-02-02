<script>
  import Datatable from "./Datatable.svelte";

  export let name = "";
  export let url = "";

  const fetchData = fetch(url)
    .then(res => res.json())
    .then(data => data.dataset || []);
</script>



<main>
	<h1>Hello {name} !</h1>
	
  {#await fetchData}
    Loading...
  {:then data}
  <Datatable {data}/>
  {:catch e}
        Mauvaise URL: {e.message}
  {/await}
</main>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>