import GoalList from "./GoalList";
import styles from "../CSS/Goal.module.css";
import { Fragment, useState } from "react";
import react from "react";
import {Link} from "react-router-dom";
import Layout from "../Layout/Layout";

const Goal = () => {
  const [title, setTitle] = react.useState("");
  const [mustWork, setMustWork] = react.useState("");
  const [reason, setReason] = react.useState("");
  const [how, setHow] = react.useState("");
  const [goalList,setGoalList] = react.useState([
    {
        key:  title ,
        must: mustWork,
        why: reason,
        how: how,
        date: "2021-12-12 ~ 2022-2-10"
      }
  ]);
  const n = goalList.length-1;
  const onClick = (obj) => {
    const [title, mustWork, reason, how] = [...obj];
    obj.title !== "" &&
    setGoalList((prev) => prev.concat({
        key : title,
        must : mustWork,
        why : reason,
        how : how,
        date : "2021-12-12 ~ 2022-2-10"
    }))
    setTitle("");
    setMustWork("");
    setReason("");
    setHow("");
  };
  const onTitle = (e) => {
      setTitle(e.target.value);
  }
  const onMustWork = (e) => {
      setMustWork(e.target.value);
  }
  const onReason = (e) => {
      setReason(e.target.value);
  }
  const onHow = (e) => {
      setHow(e.target.value);
  }
  
  
  return (
    <Fragment>
      <Layout />
      <form className={styles.main}>
        <div className={styles.container1}>
          <h1 className={styles.title}>
            {title === "" ? "Goal title" : title}
          </h1>
          <span
            style={{
              display: "block",
              fontSize: "18px",
              textAlign: "center",
              color: "#767676",
            }}
          >
            2021-12-12 ~ 2022-02-10
          </span>
          {/* 달력에서 날짜 데이터 가져와야 됨 */}
          <input type="text" value={title} onChange={onTitle} />
        </div>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <h1>꼭 해야 하는 일</h1>
            <textarea type="text" value={mustWork} onChange={onMustWork} />
          </div>
          <div className={styles.container3}>
            <h1>왜 해야 하는지</h1>
            <textarea type="text" value={reason} onChange={onReason} />
          </div>
          <div className={styles.container3}>
            <h1>어떻게 해야 하는지</h1>
            <textarea type="text" value={how} onChange={onHow} />
          </div>
        </div>
        <div className={styles.btnContainer}>
          {/* <Link className={styles.link} to="/goallist"> */}
          <input
            className={styles.btn}
            type="button"
            value="완료"
            onClick={() => onClick([title, mustWork, reason, how])}
          />
          {/* </Link> */}
        </div>
      </form>

      <GoalList goalList={goalList} length={n} />
    </Fragment>
  );
};

export default Goal;
