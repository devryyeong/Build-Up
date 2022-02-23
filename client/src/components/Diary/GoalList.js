import React, { Fragment } from 'react';
import styles from '../CSS/GoalList.module.css';
import Layout from '../Layout/Layout';

const GoalList = ({ goalList, length}) => {
    
    //goalList는 리스트이고 그 안의 item은 객체임
    const newgoalList = goalList;
    const goalGrid = newgoalList.map((value, index) => 
      index !== 0 && (
        <div className={styles.gridContent}>
          <h1 className={styles.gridtitle}>{value.key}</h1>
          <span className={styles.date}>{value.date}</span>
        </div>
      )
    );
    return (
      <Fragment>
        <Layout />
        <h1 className={styles.title}>이수인님의 목표 리스트</h1>
        <h1 className={styles.title2}>이수인님은 총 {length}개의 목표를 생성하셨습니다.</h1>
        <div className={styles.gridContainer}>
          {goalGrid}
          {/* ::after clear:both */}
        </div>
      </Fragment>
    );
};

export default GoalList;