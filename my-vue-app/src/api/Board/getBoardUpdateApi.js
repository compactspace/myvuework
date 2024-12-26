import axios from 'axios';
import { Api } from '../Api';

export const getBoardUpdateApi= async(changeDetaile,seq)=>{
console.log(`boardUpdateAPI seq: ${seq}  content: ${changeDetaile.value.content}`)
    let bodyData={
seq:seq,
content:changeDetaile.value?.content||0

    }


   await axios.post(Api.board.update,bodyData)
}