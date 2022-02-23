import React from 'react';
import Layout from "../Layout/Layout";
import styles from '../CSS/DiaryGoal.module.css';
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

function Diary_goal() {
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
            <div className={styles.goalBorder}>
                <div className={styles.searchGoal}>
                    <input type="textarea" placeholder=' 목표를 검색해 주세요.' />
                </div>
                <div className={styles.schedule}>
                    <h1>목표 제목</h1>
                    <span>목표 일정</span>
                    <img
                    src={require("../imgs/Calendar.png")}
                    alt="Calendar"
                    className={styles.img_calendarLogo}
                    />
                </div>
                <hr className={styles.goalLine}/>
                <div className={styles.setUpGoal}>
                    <div className={styles.what}>꼭 해야 하는 일<br/>
                    <input type="textarea" /></div>
                    <div className={styles.why}>왜 해야 하는지<br/>
                    <input type="textarea" />
                    </div>
                    <div className={styles.how}>어떻게 해야 하는지<br/>
                    <input type="textarea" />
                    </div>
                </div>
                <div className={styles.btnArea}>
                    <button className={styles.changeBtn}>수정</button>
                    <button className={styles.deleteBtn}>삭제</button>
                </div>
            </div>
            </Layout>
        </div>
    );
}

export default Diary_goal;