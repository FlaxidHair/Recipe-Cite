<template>
    <main class="main" >
        <RandomDish></RandomDish>
        <LastRecipe></LastRecipe>
        <LastNotes></LastNotes>
    </main>
</template>

<script setup>
import { useStoreRecipies } from '../stores/storeRecipies'
import LastRecipe from '../components/LastRecipe.vue'
import RandomDish from '../components/RandomDish.vue'
import LastNotes from '../components/LastNotes.vue'
const store = useStoreRecipies();

</script>

<style></style>