import React from 'react';
import Layout from "../Layout/Layout";
import styles from '../CSS/DiaryWriting.module.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const handleDateClick = (info) => {
    info.dayEl.style.backgroundColor = 'lightgreen';
    // bind with an arrow function
    alert(info.dateStr);
    // 좌표..? 좌표......?
    // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    
  };
  
  
  const handleEventClick = (info) => {
    document.addEventListener('DOMContentLoaded', function () {
      var calendarEl = document.getElementById('calendar');
  
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
          center: 'addEventButton',
        },
        customButtons: {
          addEventButton: {
            text: 'add event...',
            click: function () {
              var dateStr = prompt('Enter a date in YYYY-MM-DD format');
              var date = new Date(dateStr + 'T00:00:00'); // will be in local time
  
              if (!isNaN(date.valueOf())) {
                // valid?
                calendar.addEvent({
                  title: '이벤트추가',
                  start: date,
                  allDay: true,
                });
                alert('Great. Now, update your database...');
              } else {
                alert('Invalid date.');
              }
            },
          },
        },
      });
  
      calendar.render();
    });
  }

function Diary_writing() {
    return (
        <div>
            <Layout>
            <div className={styles.calendar}>
            <FullCalendar
                id="calendar"
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={handleDateClick}
                initialView="dayGridMonth"
                events={[
                {
                    id: 1,
                    title: '하이',
                    date: '2022-02-01',
                    color: '#FFDE5C',
                    allDay: true,
                    editable: true,
                },

                {
                    id: 2,
                    title: '헬로',
                    start: '2022-02-01',
                    end: '2022-02-29',
                    color: '#FFCC00',
                },
                ]}
            />
            <div style={{ backgroundColor: 'yellow' }}>
                <button
                type="button"
                title="일정 등록"
                aria-pressed="false"
                className="fc-addEventButton-button fc-button fc-button-primary"
                onClick={handleEventClick}
                >
                일정 등록
                </button>
            </div>
            </div>
            <div className={styles.border}>
                <div className={styles.diary}>
                    <h1>날짜</h1>
                    <span>목표 이름</span>
                </div>
                <hr className={styles.goalLine}/>
                <div>
                <input type="textarea" className={styles.diaryTextbox} />
                <div className={styles.starArea}>
                    <img
                    src={require("../imgs/fullstar.png")}
                    alt="star1"
                    className={styles.img_star1}/>
                    <img
                    src={require("../imgs/fullstar.png")}
                    alt="star2"
                    className={styles.img_star2}/>
                    <img
                    src={require("../imgs/halfstar.png")}
                    alt="star3"
                    className={styles.img_star3}/>
                    <img
                    src={require("../imgs/emptystar.png")}
                    alt="star4"
                    className={styles.img_star4}/>
                    <img
                    src={require("../imgs/emptystar.png")}
                    alt="star5"
                    className={styles.img_star5}/>
                </div>
                <div className={styles.btnArea}>
                    <button className={styles.changeBtn}>수정</button>
                    <button className={styles.deleteBtn}>삭제</button>
                </div>
                </div>
            </div>
            </Layout>
        </div>
    );
}

export default Diary_writing;