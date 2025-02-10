"use client";
import { useState, useEffect } from "react";
import { GenericLayout } from "@/components/GenericLayout";
import { ScheduleButton } from "@/components/Schedule/ScheduleButton";
import { getSchedules } from "@/api/getData";
import { ScheduleEventCard } from "@/components/Schedule/ScheduleEventCards";
import { parseISO, isThisWeek } from "date-fns";
import { Schedule } from "@/utils/Types";
import { ScheduleSkeleton } from "@/components/Skeletons/ScheduleSkeleton";
import "../globals.css";
import "@/components/Timer/Countdown";
import { EventInfoSkeleton } from "@/components/Skeletons/EventInfo";
import { PrizesSkeleton } from "@/components/Skeletons/Prizes";

export default function Page() {
  const [categorizedEvents, setCategorizedEvents] = useState<{
    upcoming: Schedule[];
  }>({
    upcoming: [],
  });

  const [currentTab, setCurrentTab] = useState<"upcoming">("upcoming");

  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    async function fetchData() {
      const scheduleData = await getSchedules();
      categorizeEvents(scheduleData);
      setIsLoading(false); // Set loading state to false after data is fetched
    }
    fetchData();
  }, []);

  // Helper function to categorize events based on sheet criteria
  const categorizeEvents = (events: Schedule[]) => {
    const upcomingEvents: Schedule[] = [];

    events.forEach((event) => {
      const eventDate = parseISO(
        `${new Date().getFullYear()}-${event.date.replace("/", "-")}`
      );

      // Categorize as Upcoming Events if this week
      if (isThisWeek(eventDate)) {
        upcomingEvents.push(event);
      }
    });

    setCategorizedEvents({
      upcoming: upcomingEvents,
    });
  };

  // Function to render events based on the selected tab
  const renderEvents = () => {
    const eventsToDisplay = categorizedEvents[currentTab] || [];
    return <ScheduleEventCard events={eventsToDisplay} />;
  };

  return (
    <GenericLayout title="Live Page">
      <div className="space-y-20 text-brown">
        <center className="text-green font-sans font-bold text-5xl py-5">
          Countdown until the Beginning of Pearl Hacks!
        </center>

        {/* Timer Widget */}
        <div className="w-full flex justify-center items-center">
          <div className="p-4 rounded-md text-center flex justify-center items-center">
            <div className="countdown flex justify-center items-center space-x-4">
              {/* Days Section */}
              <div className="time-section" id="days">
                <div className="time-group">
                  <div className="time-segment">
                    <div className="segment-display">
                      <div className="segment-display__top"></div>
                      <div className="segment-display__bottom"></div>
                      <div className="segment-overlay">
                        <div className="segment-overlay__top"></div>
                        <div className="segment-overlay__bottom"></div>
                      </div>
                    </div>
                  </div>
                  <div className="time-segment">
                    <div className="segment-display">
                      <div className="segment-display__top"></div>
                      <div className="segment-display__bottom"></div>
                      <div className="segment-overlay">
                        <div className="segment-overlay__top"></div>
                        <div className="segment-overlay__bottom"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>Days</p>
              </div>

              {/* Existing Time Sections */}
              <div className="time-section" id="hours">
                <div className="time-group">
                  <div className="time-segment">
                    <div className="segment-display">
                      <div className="segment-display__top"></div>
                      <div className="segment-display__bottom"></div>
                      <div className="segment-overlay">
                        <div className="segment-overlay__top"></div>
                        <div className="segment-overlay__bottom"></div>
                      </div>
                    </div>
                  </div>
                  <div className="time-segment">
                    <div className="segment-display">
                      <div className="segment-display__top"></div>
                      <div className="segment-display__bottom"></div>
                      <div className="segment-overlay">
                        <div className="segment-overlay__top"></div>
                        <div className="segment-overlay__bottom"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>Hours</p>
              </div>

              <div className="time-section" id="minutes">
                <div className="time-group">
                  <div className="time-segment">
                    <div className="segment-display">
                      <div className="segment-display__top"></div>
                      <div className="segment-display__bottom"></div>
                      <div className="segment-overlay">
                        <div className="segment-overlay__top"></div>
                        <div className="segment-overlay__bottom"></div>
                      </div>
                    </div>
                  </div>
                  <div className="time-segment">
                    <div className="segment-display">
                      <div className="segment-display__top"></div>
                      <div className="segment-display__bottom"></div>
                      <div className="segment-overlay">
                        <div className="segment-overlay__top"></div>
                        <div className="segment-overlay__bottom"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>Minutes</p>
              </div>

              <div className="time-section" id="seconds">
                <div className="time-group">
                  <div className="time-segment">
                    <div className="segment-display">
                      <div className="segment-display__top"></div>
                      <div className="segment-display__bottom"></div>
                      <div className="segment-overlay">
                        <div className="segment-overlay__top"></div>
                        <div className="segment-overlay__bottom"></div>
                      </div>
                    </div>
                  </div>
                  <div className="time-segment">
                    <div className="segment-display">
                      <div className="segment-display__top"></div>
                      <div className="segment-display__bottom"></div>
                      <div className="segment-overlay">
                        <div className="segment-overlay__top"></div>
                        <div className="segment-overlay__bottom"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-10 justify-center">
          <ScheduleButton
            onClick={() => window.open("https://discord.com")}
            className="bg-discord hover:bg-blue-500 border-b-2 border-discord text-white"
          >
            Discord
          </ScheduleButton>
          <ScheduleButton
            onClick={() => window.open("http://bit.ly/PH25HackerGuidem")}
            className="bg-brown hover:bg-brown-transition border-b-2 border-brown-transition text-white"
          >
            Hacker Guide
          </ScheduleButton>
          <ScheduleButton
            onClick={() => window.open("https://devpost.com")}
            className="bg-pink-accent hover:bg-pink-transition border-b-2 border-pink-accent text-white"
          >
            Devpost
          </ScheduleButton>
        </div>

        {/* Placeholder for Location, Parking, Menu, and WiFi */}
        {/* Event Information Section */}
        <div className="space-y-8 mt-8">
          <div className="text-xl font-semibold text-center">
            Event Information
          </div>

          {/* Location */}
          {isLoading ? (
            <EventInfoSkeleton /> // Show skeletons for Event Information
          ) : (
            <div className="bg-gray-100 p-5 rounded-md max-w-[1000px] mx-auto overflow-hidden">
              <h2 className="font-bold">Location</h2>
              <p>To be announced.</p>
            </div>
          )}

          {/* Parking */}
          {isLoading ? (
            <EventInfoSkeleton /> // Show skeletons for Event Information
          ) : (
            <div className="bg-gray-100 p-5 rounded-md max-w-[1000px] mx-auto overflow-hidden">
              <h2 className="font-bold">Parking</h2>
              <p>Details coming soon.</p>
            </div>
          )}

          {/* Menu */}
          {isLoading ? (
            <EventInfoSkeleton /> // Show skeletons for Event Information
          ) : (
            <div className="bg-gray-100 p-5 rounded-md max-w-[1000px] mx-auto overflow-hidden">
              <h2 className="font-bold">Menu</h2>
              <p>Check back later for the menu details.</p>
            </div>
          )}

          {/* WiFi */}
          {isLoading ? (
            <EventInfoSkeleton /> // Show skeletons for Event Information
          ) : (
            <div className="bg-gray-100 p-5 rounded-md max-w-[1000px] mx-auto overflow-hidden">
              <h2 className="font-bold">WiFi</h2>
              <p>Network information will be provided at the event.</p>
            </div>
          )}
        </div>

        {/* Prizes Section */}
        <div className="space-y-8 mt-8">
          <div className="text-xl font-semibold text-center">Prizes</div>

          {isLoading ? (
            <PrizesSkeleton /> // Show skeletons for Prizes section
          ) : (
            <>
              {/* Grand Prize */}
              <div className="bg-gray-100 p-5 rounded-md max-w-[1000px] mx-auto overflow-hidden">
                <h2 className="font-bold">Grand Prize</h2>
                <p>Details about the grand prize to be announced soon.</p>
              </div>

              {/* Other Prizes */}
              <div className="bg-gray-100 p-5 rounded-md max-w-[1000px] mx-auto overflow-hidden">
                <h2 className="font-bold">Other Prizes</h2>
                <p>Details about the other prizes to be announced soon.</p>
              </div>
            </>
          )}

          <div className="h-6" />
        </div>

        {/* Upcoming Events Button */}
        <div className="flex justify-center py-5">
          <ScheduleButton
            onClick={() => setCurrentTab("upcoming")}
            className={`${
              currentTab === "upcoming"
                ? "bg-yellow border-b-2 border-brown text-brown"
                : "bg-brown border-b-2 border-brown hover:bg-brown-transition text-white"
            }`}
          >
            Upcoming Events
          </ScheduleButton>
        </div>

        {/* Render either skeleton or events based on loading state */}
        <div className="space-y-4">
          {isLoading ? (
            <ScheduleSkeleton /> // Display skeleton while loading
          ) : (
            renderEvents() // Display events after loading
          )}
        </div>
        <div>
          <div className="h-6" />
        </div>
      </div>
    </GenericLayout>
  );
}
