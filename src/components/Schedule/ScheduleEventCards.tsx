"use client";

import { Schedule } from "@/utils/Types";
import React from "react";
import { ScheduleSkeleton } from "../Skeletons/ScheduleSkeleton";
import {
  BellAlertIcon,
  BellIcon,
  CalendarIcon,
  ClockIcon,
  LinkIcon,
  StarIcon,
} from "@heroicons/react/16/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";

const calculateEndTime = (startTime?: string, duration?: string): string => {
  if (!startTime || !duration) {
    return ""; // Handle cases where data is missing
  }

  try {
    // Parse start time into hours and minutes
    const [time, modifier] = startTime.split(" "); // E.g., "9:00 AM"
    const [hours, minutes] = time.split(":").map(Number);

    // Create a base Date object with the start time
    const startDate = new Date();
    if (modifier === "PM" && hours !== 12) {
      startDate.setHours(hours + 12); // Convert PM times to 24-hour format, except for 12 PM
    } else if (modifier === "AM" && hours === 12) {
      startDate.setHours(0); // 12 AM is midnight, so set it to 0 hours
    } else {
      startDate.setHours(hours); // For AM times except 12 AM and PM times except 12 PM
    }
    startDate.setMinutes(minutes || 0);
    startDate.setSeconds(0);

    // Convert duration to minutes
    const durationInMinutes = parseFloat(duration) * 60;

    // Duration + Start Time
    const endDate = new Date(startDate.getTime() + durationInMinutes * 60000);

    // Format end time
    return `- ${endDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })}`;
  } catch (error) {
    console.error("Error calculating end time:", error);
    return "";
  }
};

type ScheduleEventCardProps = {
  events: Schedule[]; // Array of events to be displayed
};

export const ScheduleEventCard: React.FC<ScheduleEventCardProps> = ({
  events,
}) => {
  // If events are not yet loaded, show the skeleton loader
  if (!events || events.length === 0) {
    return <ScheduleSkeleton />;
  }

  return (
    <div className="w-full flex justify-center items-start py-4">
      <div className="w-full flex flex-col space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full content-center flex flex-col md:flex-row justify-between bg-white rounded-lg p-5 overflow-hidden w-80"
          >
            <div className="w-full flex flex-col justify-between">
              {/* Event Title */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight font-sans text-pink-accent">
                {event.event_name || "Event Title"}
              </h5>
              {/* Date, Start Time - End Time */}
              <p className="flex flex-row items-center space-x-2 font-body text-med font-semibold text-brown-500">
                <>
                  <ClockIcon className="w-4 h-4 mr-2" />{" "}
                </>{" "}
                {event.date}
                {", "}
                {event.start_time}{" "}
                {calculateEndTime(event.start_time, event.duration?.toString())}
              </p>
              {/* Location */}
              <p className="flex flex-row items-center gap-2 font-body text-brown-500">
                <MapPinIcon className="w-4 h-4" />
                {event.location || "TBD"}
              </p>
            </div>
            <div>
              {/* Event Link */}
              {event.link && (
                <a
                  href={event.link}
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-red-300 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-200 mt-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon className="w-4 h-4 mr-1" /> Post-event slides
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
