<script>
import Layout from '@Components/Layout';
import Piece from '@Components/Piece';
import Navigation from '@Components/Navigation'
const routes = {
    '/': Layout,
    '/piece/*': Piece,
}
import Router from 'svelte-spa-router'

</script>

<Router {routes}/>

