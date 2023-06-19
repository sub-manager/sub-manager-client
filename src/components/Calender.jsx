import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import Axios from "axios";
const Calender = () => {
  const [events, setEvents] = useState([]);

  const getSubs = async () => {
    await Axios.get("http://localhost:8800/api/post/subscriptions", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      let tempData = res.data.subscription;
      let tempEvents = [];

      tempData.forEach((e) => {
        tempEvents.push({ title: e.providerName, date: e.date });
      });
      setEvents(tempEvents);
    });
  };
  useEffect(() => {
    getSubs();
  }, []);
  return (
    <>
      <div className="max-w-3xl mx-auto p-12">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
        />
        ;
      </div>
    </>
  );
};

export default Calender;
