
<template>

<input id="inpt">


</template>


<script setup>
    
    import { onMounted } from 'vue';

    onMounted(()=>{
        let inputvalue= document.getElementById("inpt").value;

        let target={입력값:inputvalue};

        let handle={
        get(x,y,z){
        return inputvalue;
            }
        ,
            set(a,b,c,d){

                console.log("셋 트랩 발동");
                return true;
             }
}
let prox=new Proxy(target,handle);

            document.getElementById("inpt").addEventListener("input",(e)=>{          
                prox.입력값=null;
                if(prox.입력값!=target.입력값){
                    prox.입력값=target.입력값;

                }

        });
    
        console.log("inputvalue: "+inputvalue)
       

       console.log(prox.입력값==target.입력값);
     

     


    })


const valueChange=(e)=>{
console.log(e)

}



// function createReactiveObject(target, callback) {
    
//     const proxy = new Proxy(target, {
//       set(obj, prop, value) {
//         if (value !== obj[prop]) {
//           const prev = obj[prop];
//           obj[prop] = value;
//           callback(`${prop}가 [${prev}] >> [${value}] 로 변경되었습니다`);
//         }
//         return true;
//       },
//     });
  
    
//     return proxy;
//   }
  
//   const a = {
//     형규: "솔로",
//   };
  

//   const b = createReactiveObject(a, console.log);
//   b.형규 = "커플";

</script>