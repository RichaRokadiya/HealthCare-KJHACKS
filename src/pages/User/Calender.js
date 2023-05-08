// import React from 'react'
// import Sidebar from '../../components/SidebarUser'
// import { IoMdNotifications } from "react-icons/io";

// function Calender() {
//   return (
//     <div className="font-ourfront">
//       <div className="flex  bg-grey">
//         <div>
//           <Sidebar />
//         </div>
//         <div>
//           <div className="flex items-center  ml-4 ">
//             <div className="px-10 py-4 h-12 bg-white rounded-lg  mt-4 shadow-md flex justify-items-start text-xl font-bold ">
//               Schedule your Appointments
//             </div>
//             <div className="w-12 h-12 bg-white rounded-lg mt-4 ml-[975px] items-center flex shadow-md">
//               <IoMdNotifications
//                 size="30"
//                 className="flex ml-2 cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//   )
// }

// export default Calender

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { useNavigate } from "react-router-dom";



const Calendar = () => {
    let navigate = useNavigate();
    const [currentEvents, setCurrentEvents] = useState([]);
    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };
    const openInNewTab = (url) => { window.open(url, "_blank", "noreferrer"); }


       
    return (
        <>
        
            <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 font-ourfont">
                <p className="text-5xl text-white font-bold ml-10 mt-0">Schedule Your Routine</p>
                <div className="grid grid-cols-10  mt-16 px-10 ">
                    <div className="col-span-8">
                        <div className="row px-20 rounded-xl  mx-5 py-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                            <div className="grid grid-cols-11 ">
                                <div className="col-span-10">
                                    <div flex="1 1 100%" ml="15px">
                                        <FullCalendar
                                            height="75vh"
                                            plugins={[
                                                dayGridPlugin,
                                                timeGridPlugin,
                                                interactionPlugin,
                                                listPlugin,
                                            ]}
                                            headerToolbar={{
                                                left: "prev,next today",
                                                center: "title",
                                                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                                            }}
                                            initialView="dayGridMonth"
                                            editable={true}
                                            selectable={true}
                                            selectMirror={true}
                                            dayMaxEvents={true}
                                            select={handleDateClick}
                                            eventClick={handleEventClick}
                                            eventsSet={(events) => setCurrentEvents(events)}
                                            initialEvents={[
                                                {
                                                    id: "12315",
                                                    title: "All-day event",
                                                    date: "2022-09-14",
                                                },
                                                {
                                                    id: "5123",
                                                    title: "Timed event",
                                                    date: "2022-09-28",
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div>
                        <button onClick={() => { navigate("/dashboard"); }} className=" h-16 w-48 items-center mt-[500px]  bg-white border-2  border-black hover:bg-black text-xl font-semibold hover:text-white rounded-xl"> Back</button>
                        </div>
                        <div>

                        <button  role="link" onClick={() => openInNewTab('https://meet.jit.si/') }
                        className=" h-16 w-48 items-center  my-4 bg-white border-2  border-black hover:bg-black text-xl font-semibold hover:text-white rounded-xl">Start a Meeting</button>
                        </div>
                    </div>
                    <div className="mt-[793px]"></div>
                </div>

            </div>
        </>
    );
};

export default Calendar;
