<template>
<NaveBar/>
<ProductBody/>
<TestModal v-if="modalstore.clopen"/>
</template>

<script setup>
import NaveBar from '../../components/common/NaveBar.vue';
import ProductBody from '../../components/page/product/ProductBody.vue';
import TestModal from '../../components/page/main/TestModal.vue';


import { ModalCloPenStore } from '../../store/ModalStore';

const modalstore=ModalCloPenStore();


</script>