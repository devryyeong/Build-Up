import React from 'react';
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


function Diary() {
  return (
    <div style={{ width: '894px', margin: '40px auto', fontSize: '14px' }}>
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
            color: 'purple',
            allDay: true,
            editable: true,
          },

          {
            id: 2,
            title: '헬로',
            start: '2022-02-01',
            end: '2022-02-29',
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
  );
}

export default Diary;