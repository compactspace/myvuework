
import { getApplicantListApi } from "../../문법API/Applicant2/getApplicantListApi";
import { useQuery } from "@tanstack/vue-query";

export const useGetApplicantListQUery = ( firstProc,postIdx,loginId,currentPage ,pageSize
 ,injectedValue,provideMDVal
) => {
  return useQuery({
    queryKey: ["applicantList"],
    queryFn: () =>
      getApplicantListApi( firstProc,postIdx,loginId,currentPage ,pageSize
     ,injectedValue,provideMDVal
      ),
      enabled:false
    // enabled: postIdx.value !== null // postIdx가 null이 아니면 쿼리가 실행됩니다.
  });
};
