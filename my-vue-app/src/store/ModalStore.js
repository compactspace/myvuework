
import { defineStore } from "pinia";

import { ref } from "vue";
export const ModalCloPenStore = defineStore(

    'modal_store',
    () => {
    const clopen=ref(false);

    const ChangeClopen= ()=>{
        clopen.value=!clopen.value;

    }

    return {clopen,ChangeClopen};

    }


)