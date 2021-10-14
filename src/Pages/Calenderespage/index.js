import React, { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

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
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

const Calenderespage = () => {
  let { cafeId, roomId } = useParams();
  const [open, setOpen] = useState(false);
  const [eventData] = useState(event);
  const [todos, setTodos] = useState(eventData);
  const [note, setNote] = useState("");
  const [start, setStart] = useState("");
  // const [end, setEnd] = useState("");
  const calendarComponentRef = React.createRef();

  // const handleDateClick = (arg) => {
  //   alert(arg.dateStr);
  // };
  const handleNew = async (e) => {
    e.preventDefault();
    // const start = info.startStr;
    // const end = info.endStr;

    // const start = info.startStr;
    // const end = info.endStr;
    // const note = prompt("add Event");

    // const cafe_id = cafeId;
    // const room_id = roomId;

    const collectionRef = collection(db, "events");
    if (note !== "") {
      const payload = {
        note,
        start,
        end: new Date(),
        cafe_id: cafeId,
        room_id: roomId,
      };
      const docRef = await addDoc(collectionRef, payload);
      console.log("The new ID is: " + docRef.id);
      // console.log(info.startStr);
    }
    setNote("");
    setStart("");
    // setEnd("");
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(
    () => {
      onSnapshot(
        query(
          collection(db, "events"),
          where("cafe_id", "==", cafeId.trim()),
          where("room_id", "==", roomId.trim())
        ),
        (snapshot) =>
          setTodos(
            snapshot.docs.map((doc) => ({
              // ...doc.data(),
              // cafe_id: doc.data().cafe_id,
              // room_id: doc.data().room_id,
              title: doc.data().note,
              start: doc.data().start,
              end: doc.data().end,
              id: doc.id,
              allDay: true,
            }))
          )
      );
    },
    //eslint-disable-next-line
    []
  );

  return (
    <div style={{ margin: "0 20px 20px 20px" }}>
      {/* <h1>{addEvent}</h1> */}
      <FullCalendar
        // schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        ref={calendarComponentRef}
        dateClick={handleClickOpen}
        // dateClick={handleDateClick}
        defaultView="dayGridMonth"
        displayEventTime={true}
        selectable={true}
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          resourceTimeGridPlugin,
        ]}
        // eventClick={(event) => {
        //   alert(event.event._def.publicId);
        // }}
        events={todos}
        select={handleNew}
        eventLimit={3}
      />

      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Event</DialogTitle>
        <form onSubmit={handleNew}>
          <DialogContent>
            <TextField
              autoFocus
              label="Enter your Note"
              type="name"
              fullWidth
              value={note}
              onChange={(e) => setNote(e.target.value)}
              required
              style={{ marginBottom: "20px" }}
            />
            <TextField
              label="Enter Start Date YYYY-D-MM "
              type="name"
              fullWidth
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
              style={{ marginBottom: "20px" }}
            />
            {/* 
            <TextField
              label="Enter End Date mm-yy-dd"
              type="name"
              fullWidth
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              required
              style={{ marginBottom: "20px" }}
            /> */}
          </DialogContent>
          <DialogActions>
            <Button type="submit">Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Calenderespage;
