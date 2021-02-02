<script>
  import Datatable from "./Datatable.svelte";
  
  export let name = ''

</script>



<main>
	<h1>Hello {name} !</h1>
	
  
  <Datatable />
</main>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>