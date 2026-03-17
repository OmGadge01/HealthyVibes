"use client";

import { useState } from "react";
import { Coffee, Utensils, Moon } from "lucide-react";

// Generate 7 days from today
const generateWeekData = () => {
  const today = new Date();
  const days = [];

  const breakfastItems = [
    "Oats + Fruits",
    "Smoothie Bowl",
    "Paneer Sandwich",
    "Fruit Yogurt",
    "Moong Dal Chilla",
    "Pancakes",
    "Breads",
  ];
  const lunchItems = [
    "Dal + Rice",
    "Veg Pulao",
    "Chole + Rice",
    "Veg Biryani",
    "Rajma + Rice",
    "Veg Pulao",
    "Special",
  ];
  const dinnerItems = [
    "Paneer + Roti",
    "Dal + Salad",
    "Mix Veg",
    "Palak Paneer",
    "Kadhai Veg",
    "Special",
    "Chef Special",
  ];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    days.push({
      date: date.getDate(),
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      fullDate: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      breakfast: breakfastItems[i % breakfastItems.length],
      lunch: lunchItems[i % lunchItems.length],
      dinner: dinnerItems[i % dinnerItems.length],
      isToday: i === 0,
    });
  }

  return days;
};

export default function MenuPreview() {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  const weekDays = generateWeekData();

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#F6FFF7]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            This{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Week's Menu
            </span>
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Hover on any day to see full menu
          </p>
        </div>

        {/* Calendar Strip */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-green-100 p-4">
          {/* Days Grid */}
          <div className="flex justify-between gap-2">
            {weekDays.map((day, index) => {
              const isHovered = hoveredDay === index;

              return (
                <div
                  key={index}
                  className="relative flex-1"
                  onMouseEnter={() => setHoveredDay(index)}
                  onMouseLeave={() => setHoveredDay(null)}
                >
                  {/* Day Card */}
                  <div
                    className={`
                    relative p-3 rounded-xl text-center transition-all duration-200 cursor-pointer
                    ${
                      day.isToday
                        ? "bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg"
                        : "bg-green-50 hover:bg-green-100 text-gray-700"
                    }
                    ${isHovered && !day.isToday ? "scale-105 shadow-md" : ""}
                  `}
                  >
                    {/* Day name */}
                    <div className="text-xs font-medium opacity-90">
                      {day.day}
                    </div>

                    {/* Date */}
                    <div className="text-lg font-bold">{day.date}</div>

                    {/* Today badge */}
                    {day.isToday && (
                      <div className="absolute -top-2 -right-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      </div>
                    )}
                  </div>

                  {/* Hover Popup */}
                  {isHovered && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-56 z-20 animate-fadeIn">
                      {/* Arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-green-200"></div>

                      {/* Menu Card */}
                      <div className="bg-white rounded-xl shadow-xl border-2 border-green-200 p-4">
                        {/* Date */}
                        <div className="text-center mb-3 pb-2 border-b border-green-100">
                          <p className="text-sm font-semibold text-gray-800">
                            {day.fullDate}
                          </p>
                        </div>

                        {/* Meals */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Coffee className="w-3 h-3 text-orange-500" />
                            <span className="text-xs text-gray-500">
                              Breakfast:
                            </span>
                            <span className="text-xs font-medium text-gray-800 ml-auto">
                              {day.breakfast}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Utensils className="w-3 h-3 text-green-500" />
                            <span className="text-xs text-gray-500">
                              Lunch:
                            </span>
                            <span className="text-xs font-medium text-gray-800 ml-auto">
                              {day.lunch}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Moon className="w-3 h-3 text-blue-500" />
                            <span className="text-xs text-gray-500">
                              Dinner:
                            </span>
                            <span className="text-xs font-medium text-gray-800 ml-auto">
                              {day.dinner}
                            </span>
                          </div>
                        </div>

                        {/* Calories */}
                        <p className="text-xs text-gray-400 text-center mt-3 pt-2 border-t border-green-100">
                          ~550 calories per meal
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Streak indicator */}
        <div className="flex items-center justify-center gap-4 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"></div>
            <span className="text-gray-600">Today</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-100 rounded-full"></div>
            <span className="text-gray-600">Upcoming</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-500">🔥</span>
            <span className="text-gray-600">5 day streak</span>
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-8">
          <button className="text-sm text-green-600 hover:text-green-700 font-medium">
            View full month →
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -5px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
