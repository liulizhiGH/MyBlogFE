/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-11 10:16:07 pm
 * Description: 页头及导航栏
 */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Breadcrumb, Divider } from "antd";
import css from "./style.module.less";
import dayjs from "dayjs";

function PageHeader() {
  let [time, settime] = useState(null);
  console.log("PageHeader render", time);
  useEffect(() => {
    console.log(111);
    let timer = setTimeout(() => {
      settime(dayjs().locale("zh-cn").format("YYYY/MM/DD HH:mm:ss"));
      console.log(222);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <div className={css["PageHeader"]}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">首页</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/list">分类</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Divider orientation="right">编程就像搞园艺！当前时间：{time}</Divider>
    </div>
  );
}

export default observer(PageHeader);
