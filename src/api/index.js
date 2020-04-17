/*
 * @Author: 何元鹏
 * @Date: 2019-10-16 15:40:58
 * @LastEditors: 何元鹏
 * @LastEditTime: 2020-03-23 21:33:49
 * @Description: file content
 */
import { GET } from "@/plugins/axios";
/**
 * @description: 获取体系值管理可选项
 */
export function getRegionBaseList(id) {
  return GET(
    `ims/admin/v1/region/base/list/${id}/children`,
    "获取下级行政区划"
  );
}
export function getRegionBaseSearch(index, size, keyword) {
  return GET(
    `ims/admin/v1/region/base/search/${index}/${size}?keyword=${keyword}`,
    "搜索行政区划"
  );
}
// 新的接口 现状评估--评估管理--获取指标体系详情
export function getIndicatorSystemInfo(
  indicatorSystemId,
  regionCode,
  evaluateName
) {
  return GET(
    `/rest/evaluate/v1/indicator/system/preview/ex/${indicatorSystemId}/${regionCode}/${evaluateName}/0/全部/全部`,
    "地区评估页面，点击评估指标体系"
  );
}
