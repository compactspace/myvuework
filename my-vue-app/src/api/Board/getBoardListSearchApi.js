import axios from "axios";

export const getBoardListSearchApi = async (searchCondiction) => {

    let param={
        startpage:searchCondiction.value.startpage,
        writer:searchCondiction.value?.writer||'',
        content:searchCondiction.value?.content||''
    }
console.log(param)


    let boardList = await axios.post('/api/vuegetboard.do',param);

    return boardList.data;
}