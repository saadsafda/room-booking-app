import React, { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import moment from "moment";

import swal from "sweetalert";

import event from "./event";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  doc,
  setDoc,
  deleteDoc,
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
  // const [EditOrDeletopen, setEditOrDeletopen] = useState(false);
  // const [edit, setEdit] = useState("");
  const [start, setStart] = useState("");
  const calendarComponentRef = React.createRef();

  const handleNew = async () => {
    const collectionRef = collection(db, "events");

    if (note !== "") {
      const payload = {
        note,
        start,
        end: start,
        cafe_id: cafeId,
        room_id: roomId,
      };
      const docRef = await addDoc(collectionRef, payload);
      console.log("The new ID is: " + docRef.id);
    }
    setNote("");
    setStart("");
    setOpen(false);
  };

  // const handleEdit = async (id) => {
  //   const note = prompt("Edit Text");
  //   const docRef = doc(db, "events");
  //   if (note !== null) {
  //     const payload = {
  //       note,
  //       start: moment(id.event._instance.range.start).format("YYYY-MM-DD"),
  //       end: start,
  //       cafe_id: cafeId,
  //       room_id: roomId,
  //     };
  //     setDoc(docRef, payload);
  //     console.log(payload);
  //   }
  // };
  // const handleEdit = async (id) => {
  //   // const note = prompt("Edit Text");
  //   const docRef = doc(db, "events", id.event._def.publicId);
  //   if (edit !== null) {
  //     const payload = {
  //       edit,
  //       start: moment(id.event._instance.range.start).format("YYYY-MM-DD"),
  //       end: start,
  //       cafe_id: cafeId,
  //       room_id: roomId,
  //     };
  //     setDoc(docRef, payload);
  //     console.log(payload);
  //   }
  // };

  const handleSelect = (arg) => {
    setStart(moment(arg.dateStr).format("YYYY-MM-DD"));
    setNote("");
    setOpen(true);
  };
  // const handleSelectEdit = (arg) => {
  //   setStart(moment(arg.dateStr).format("YYYY-MM-DD"));
  //   setEdit("");
  //   setEditOrDeletopen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  // const handleEditOrDeletClose = () => {
  //   setEditOrDeletopen(false);
  // };

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

  const handleDelete = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("this event is delet " + id.event.title)) {
      await deleteDoc(doc(db, "events", id.event._def.publicId));
    }
  };

  return (
    <div style={{ margin: "0 20px 20px 20px" }}>
      <FullCalendar
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        ref={calendarComponentRef}
        // defaultView="dayGridMonth"
        displayEventTime={true}
        selectable={false}
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          resourceTimeGridPlugin,
        ]}
        // eventClick={(event) => {
        //   alert(event.event._def.title);
        // }}
        eventClick={handleDelete}
        // eventClick={handleEdit}
        events={todos}
        // select={handleSelect}
        dateClick={handleSelect}
        // eventLimit={3}
        selectMirror={true}
        // dayMaxEvents={true}
      />
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleNew}>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
      {/* <Dialog open={EditOrDeletopen} onClose={handleEditOrDeletClose}>
        <DialogTitle>Add New Event</DialogTitle>
        {/* <form onSubmit={handleEdit}> */}
      {/* <DialogContent>
          <TextField
            autoFocus
            label="Enter your Note"
            type="name"
            fullWidth
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
            required
            style={{ marginBottom: "20px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEdit}>Save</Button>
          {/* <Button onClick={handleDelete}>Cancel</Button> */}
      {/* </DialogActions> */}
      {/* </form> */}
      {/* </Dialog>  */}
    </div>
  );
};

export default Calenderespage;
