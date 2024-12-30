import styled ,{css} from "vue3-styled-components"

export const  PassWoardWrapper=styled.div`

 ${(props)=> console.log(props.propsKey)} 


max-width: 786px;
  max-height: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding-top: 200px;


  .stepArea{
    display: flex;
    justify-content:space-around;
}

${props=>
props.propsKey=='step1'? css`

.step1{
    color: #ff5862;

}
.step2{
    background-color rgb(240, 240, 240)

}

`: css`
.step2{
    color: #ff5862;

}
.step1{
    background-color rgb(240, 240, 240)

}

`
}




.oldpassword::-webkit-input-placeholder {
  display: inline-block;
  color: #ff5862;
}

.newpassword::-webkit-input-placeholder {
  display: inline-block;
  color: #ff5862;
}


.samepasswordcss{
    display: inline-block;   
    border: none;
    width: 100% !important;
    padding-top: 20px;
    padding-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  font-family: "Noto Sans KR", sans-serif;

}







input{
    width:100%;
    display: inline-block;
    border:none
}
button {
    width:100%;
    display: inline-block;
    border:none;
    margin-top: 10px;
    margin-bottom: 20px;

}

`
