import axios from "axios";


export const getOnedayClassListApi= async (onedayclass_num)=>{

    let bodyData={
        onedayclass_num:onedayclass_num?.value||null
      }

  let  result= await axios.post('/api/getonedayclassList.do',bodyData);
      
  return result.data;

}