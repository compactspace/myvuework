import axios from "axios";
import { Api } from "../Api";
export const tryBoardDeleteApi=async (seq)=>{

    console.log(`boardDelete API seq: ${seq}`)

let boadyData={
    seq:seq
}

await axios.post(Api.board.delete,boadyData);

}