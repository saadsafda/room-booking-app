import React, { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
// import { collection,  } from "@firebase/firestore";
import event from "./event";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import db from "../../firebase";
import { useParams } from "react-router-dom";

const Calenderespage = () => {
  let { cafeId, roomId } = useParams();
  const [eventData, setEventData] = useState(event);
  const [todos, setTodos] = useState(eventData);
  const calendarComponentRef = React.createRef();

  // const handleDateClick = (arg) => {
  //   alert(arg.dateStr);
  // };

  const handleNew = async (info) => {
    const note = prompt("Enter note");
    const start = info.startStr;
    const end = info.endStr;
    const cafe_id = cafeId;
    const room_id = roomId;

    const collectionRef = collection(db, "todos");
    const payload = { note, start, end, cafe_id, room_id };
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new ID is: " + docRef.id);
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "todos"),
          where("cafe_id", "==", cafeId.trim()),
          where("room_id", "==", roomId.trim())
        ),
        (snapshot) =>
          setTodos(
            snapshot.docs.map((doc) => ({
              // ...doc.data(),
              cafe_id: doc.data().cafe_id,
              room_id: doc.data().room_id,
              title: doc.data().note,
              start: doc.data().start,
              end: doc.data().end,
              id: doc.id,
              allDay: true,
            }))
          )
      ),
    //eslint-disable-next-line
    []
  );

  return (
    <div className="container">
      <h1>
        {cafeId} and {roomId}
      </h1>
      <FullCalendar
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        ref={calendarComponentRef}
        defaultView="dayGridMonth"
        // dateClick={handleDateClick}
        displayEventTime={true}
        selectable={true}
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          resourceTimeGridPlugin,
        ]}
        // events={[
        //   {
        //     title: todos.name,
        //     start: todos.start,
        //     end: todos.end,
        //     allDay: true,
        //   },
        // ]}
        events={todos}
        select={handleNew}
        eventLimit={3}
      />
    </div>
  );
};

export default Calenderespage;
