<template>
  <ACompoNent />
  <BCompoNent />
</template>
<script setup>
import ACompoNent from "./ACompoNent.vue";
import BCompoNent from "./BCompoNent.vue";
import { provide ,ref} from "vue";

const proValue=ref();

provide("proValue",proValue)


</script>
