/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-08 3:28:31 pm
 * Last Modified: 2022-02-12 1:45:10 pm
 * Description: 文章列表页
 */
import React from "react";
import { observer } from "mobx-react";
import LeftList from "./LeftList";
import RightCategory from "./RightCategory";
import PageHeader from "@/components/PageHeader";
import PageBottom from "@/components/PageBottom";
import css from "./style.module.less";

function List() {
  return (
    <div className="wrapper">
      {/* 页头 */}
      <PageHeader />
      <div className={css["content-box"]}>
        {/* 文章列表 */}
        <LeftList />
        {/* 分类列表 */}
        <RightCategory />
      </div>
      {/* 页脚 */}
      <PageBottom />
    </div>
  );
}

export default observer(List);
