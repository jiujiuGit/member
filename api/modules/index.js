
import http from "@/api/request";

/**
 * @name 首页接口
 */
// * 
export const index = (params) => {
	return http(`/box/findAuth`,'get', params);
};
