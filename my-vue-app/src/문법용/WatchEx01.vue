<script setup>
import { ref, watch , onUpdated} from 'vue'

const idx=ref(0);

watch(idx,async ()=>{
    const responseFromServer= await fetch("http://localhost:8797");
})

const idx_change=()=>{
    idx.value=200;
}





</script>

<template>
    <h1 @click="idx_change">그냥 wath감시 확인용임</h1>
</template>