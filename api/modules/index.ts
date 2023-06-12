
import http from "@/api";

/**
 * @name 首页接口
 */
// * 
export const index = (params) => {
	return http.get(`/api/index`, params);
};