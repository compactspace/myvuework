
import { getApplicantListApi } from "../../문법API/Applicant2/getApplicantListApi";
import { useQuery } from "@tanstack/vue-query";

export const useGetApplicantListQUery = (
  loginId,
  hireProcessArr,
  MDetail,
  postIdx,
  pageSetting,
  choiceStatus,
  injectedValue,
) => {
  return useQuery({
    queryKey: ["applicantList"],
    queryFn: () =>
      getApplicantListApi(
        loginId,
        hireProcessArr,
        MDetail,
        postIdx,
        pageSetting,
        choiceStatus,
        injectedValue
      ),

    // enabled: postIdx.value !== null // postIdx가 null이 아니면 쿼리가 실행됩니다.
  });
};
