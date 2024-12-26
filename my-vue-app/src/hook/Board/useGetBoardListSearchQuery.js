import { useQuery } from "@tanstack/vue-query";

import {getBoardListSearchApi} from '../../api/Board/getBoardListSearchApi'
export const useGetBoardListSearchQuery = (searchCondiction) => {

    return useQuery(
        {
            queryKey: ['boardList',searchCondiction],
            queryFn: () => getBoardListSearchApi(searchCondiction)
        }

    )

}