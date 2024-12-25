<!-- <template>
    <div class="boardWrapper"   >
        <div class="boardContentArea" id="idboardContentArea" >
            <div class="boardContentList" v-for="list in qnaList.boardList" >
                <div>{{ list.seq }}</div>
                <div>{{ list.writer }}</div>
                <div>{{ list.title }}</div>
            </div>
        </div>

        <div class="btnArea">
           

                <button @click="getBoardFnc(paginCalCulData.backPage,paginCalCulData.startFlage)">이전페이지로</button>
           
            
       
                <div class="pagebtn"  v-for="(pages)  in paginCalCulData.endPage " :key="paginCalCulData.startPage">

                    <button  v-if="paginCalCulData.startPage<=pages" @click="getBoardFnc(pages)">{{ pages }}</button>

                </div>

                 <button @click="getBoardFnc(paginCalCulData.nextPage, paginCalCulData.endFlage)">다음페이지로</button>     
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import { paginCalCulFnc } from '../자바스크립트익스폴트연습/common';






const unitBoardWidth=ref(0);


const paginData = {

    currentPage: 1,
    pageSize: 5


}






const paginCalCulData = ref({});

const startIndex = ref(1);


const qnaList = ref({});



const getBoardFnc = async (pages,flagMessage) => {


    console.log(`flagMessage : ${flagMessage}`)
    
    if(flagMessage&&paginCalCulData.value.startFlage){
        alert("처음 페이지 입니다.");
        return;
    }
  
    if(flagMessage&&paginCalCulData.value.endFlage){
        alert("마지막 페이지 입니다.");
        return;
    }



    paginData.currentPage = pages;

    await axios.post('/api/vuegetboard.do', paginData)
        .then(response => {
            qnaList.value = response.data;
            let qnaCnt = response.data.qnaCnt
            paginCalCulData.value = paginCalCulFnc(pages, qnaCnt, 5, 5);
            startIndex.value = paginCalCulData.value.startPage;
           // console.log(paginCalCulData.value)
            console.log(`nextPage:  ${ paginCalCulData.value.nextPage}    backPage:  ${ paginCalCulData.value.backPage} endFlage ${paginCalCulData.value.startFlage} endFlage ${paginCalCulData.value.endFlage}`)
        })
        .catch(err => {
            console.log(err);
        });

}

onMounted(async () => {


    await axios.post('/api/vuegetboard.do', paginData,)
        .then(response => {
            qnaList.value = response.data;
            let qnaCnt = response.data.qnaCnt
            paginCalCulData.value = paginCalCulFnc(1, qnaCnt, 5, 5);
            startIndex.value = paginCalCulData.value.startPage;
            // console.log(paginCalCulData.value)
            // console.log(` startIndex.value:  ${ startIndex.value}`)
            console.log(`nextPage:  ${ paginCalCulData.value.nextPage}    backPage:  ${ paginCalCulData.value.backPage} startFlage ${paginCalCulData.value.startFlage}`)

        })
        .catch(err => {
            console.log(err);
        });

    let unitWidth=document.getElementById("idboardContentArea").clientWidth;
    console.log("unitWidth:  "+unitWidth)

    unitBoardWidth.value=unitWidth


})



//나중이 스타일도 이부분으로 모듈화 인지 뭔지 해봅세....
// const boardCss=reactive({

// boardWrapper:{
// display: 'flex',
// flexDirection:'column',
// alignItems: 'center',
// justifyContent: 'center',
// width: '786px',
// maxwidth: '786px'
// }
// ,
// boardContentArea:{
// display:' flex',
// flexDirection: 'column',

// }
// ,boardContentList :{
// display: 'grid',
// gridTemplateColumns: '5% 10% 70%'

// }

// })




</script>

<style>
.boardWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 786px;
    max-width: 786px;
}


.boardContentArea {
    display: flex;
    flex-direction: column;
    width: 80%;
}

.boardContentList {
    display: grid;
    grid-template-columns: 5% 10% 70%;
    height: 48px;

}

.btnArea {
    display: flex;
}
</style> -->