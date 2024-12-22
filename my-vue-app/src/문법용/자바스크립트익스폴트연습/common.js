
/**
 * --out params --
 * @param currentPage variable: 1페이지 .. i페이지 버튼 클릭시 페이지
 * @param totalCount  varaible: 백단에서 가져온 게시판의 총로우수
 * @param pageRow     constant: 한 페이지당 n개의 게시글
 * @param blockPage   constant: 페이지의 묶음단위 가령 10 이라면 해당 web은 10개 단위로 끊어서 보여주어야한다.
 * 
 * -- inner params --
 * @param totalPage 한 페이지당 가지고 있는 pageRow 개의 묶음 총개수
 * @param startCount 각 i 페이지에서 시작 넘버링
 * @param endCount 각 i 페이지에서 종료 넘버링
 * @param startPage  페이지의 묶음단위 blockPage 의 시작을 의미
 * @param endPage 페이지 묶음단위 blockPage 의 종료를 의미
 * 예를 들자면
 * blockPage의 묶음이 5 라면 [1~5] [6~10] [11~15] [16~20] 이다.
 * 각 startPage 는 1 6 11 16
 * 각 endPage 는 5 10 15 20 이다.
*/


export const paginCalCulFnc = (currentPage, totalCount, pageRow, blockPage) => {
    totalCount = parseInt(totalCount);
    pageRow = parseInt(pageRow);
    blockPage = parseInt(blockPage);


    let totalPage = Math.ceil(totalCount / pageRow);
    if (totalPage == 0) {
        totalPage = 1;
    }
    let endFlage;

    if (currentPage > totalPage) {
		currentPage = totalPage;
       
	}

    // 예를 들자면
    //[a1,a2],[a2,a3],.. 
    let startPage = Math.floor((currentPage - 1) / blockPage) * blockPage + 1;
    let endPage = startPage + blockPage - 1;

    console.log("엔드페이지:  "+endPage +" 토탈 페이지:  "+totalPage)

    let nextPage;

    // 마지막 페이지가 전체 페이지 수보다 크면 전체 페이지 수로 설정
	if (endPage >=totalPage) {
		endPage = totalPage;
        nextPage = endPage;
         endFlage=true;
       console.log("  endFlage:  "+  endFlage)
	}

    
    if (endPage+1 < totalPage) {
		nextPage = endPage+1;
        endFlage=false;
	}

    let backPage;
    let startFlage;
    if(startPage-1>=-1){
        // //
        backPage=startPage-5;
        startFlage=false
        if(backPage<0){
            backPage=1;
            startFlage=true
        }
        
    }


    for (var i = startPage; i <= endPage; i++) {
		if (i > totalPage) {
			break;
		}
		
		if(i > startPage) {
			
		}
		
		if (i == currentPage) {
			
		} 
	}

    return {endPage:endPage,nextPage:nextPage,backPage:backPage,startPage:startPage,startFlage:startFlage,endFlage:endFlage}

}