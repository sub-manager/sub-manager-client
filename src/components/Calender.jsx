import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import Axios from "axios";
const Calender = () => {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);

  const getSubs = async () => {
    await Axios.get("http://localhost:8800/api/post/subscriptions", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setData(res.data.subscription);
      //   console.log(res.data.subscription);
      data.forEach((e) => {
        setEvents(...events, { title: e.providerName, date: e.date });
      });
      //   console.log(events);
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
          //   events={[
          //     { title: "event 1", date: "2023-01-19" },
          //     { title: "event 2", date: "2023-06-22" },
          //   ]}
        />
      </div>
    </>
  );
};

export default Calender;
