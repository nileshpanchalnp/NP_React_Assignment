"use client";

import React, { useState } from "react";
import "./Custom.css";
import { Calendar, Search, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function BidList() {
  // const [showDetails, setShowDetails] = (useState < number) | (null > null);
  const [showDetails, setShowDetails] = useState(null);

  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState("live");
  const navigate = useNavigate();

  const bids = [
    {
      id: 1,
      date: "14/02/2024",
      time: "05:40 Pm",
      remaining: "7hr 20min",
      fromCity: "Gurgaon",
      toCity: "Mumbai",
      vehicleType: "Truck, 20 ft",
      body: "Close body",
      vehicles: 1,
      bidNumber: "#122345678123",
      createdBy: "Sunder Yadav",
      responses: 4,
      assignedStaff: "Mohit",
      staffId: "5215001161264",
      weight: "4000 Kg",
      loadingPoint: "Ramchandra Ramniwas oil mill, Alwar, Rajasthan",
      unloadingPoint: "Manesar, Gurugram, Haryana",
      targetPrice: "₹5000",
      vehicleLoadingDate: "17/02/2024",
      vehicleDetails: "20 ft Truck (Close Body)",
      fuelType: "CNG",
      material: "Agricultural Products",
      materialWeight: "14 Tonnes",
      requestDate: "15/02/2024",
      expiryDate: "15/02/2024",
      numberOfBidders: 54,
      remarks: "Urgent Delivery",
      phoneNumber: "+91 332423442442",
    },
    // Add more bids with similar structure
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Top Filters Section */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate("/create-bid")}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create <i class="bi bi-plus-square-fill"></i>
            </button>
            <div className="flex rounded-lg bg-white shadow">
              <button
                onClick={() => setActiveTab("live")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "live"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                } rounded-l-lg`}
              >
                Live (30)
              </button>
              <button
                onClick={() => setActiveTab("responded")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "responded"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Responded (30)
              </button>
              <button
                onClick={() => setActiveTab("unresponded")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "unresponded"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-50"
                } rounded-r-lg`}
              >
                Unresponded (30)
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Calendar className="h-4 w-4 " />
                <span>Today</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {showCalendar && (
                <div className="absolute right-0 z-10 mt-2 w-64 rounded-lg bg-white p-4 shadow-lg">
                  <div className="flex justify-between border-b pb-2">
                    <button className="font-medium text-blue-600">Today</button>
                    <button className="text-gray-600">Yesterday</button>
                    <button className="text-gray-600">Bid Created</button>
                  </div>
                  {/* Calendar Component would go here */}
                </div>
              )}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg border bg-white pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bids Table */}
      <div className="rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full  border-collapse">
            <thead>
              <tr className="border-b rounded-xl text-left text-sm table-header-color font-medium text-white">
                <th className="whitespace-nowrap  px-3 py-4">S No.</th>
                <th className="whitespace-nowrap px-3 py-4">
                  Bid Number <br /> create by
                </th>

                <th className="whitespace-nowrap px-3 py-4">
                  Start Date <br /> & Time
                </th>
                <th className="whitespace-nowrap px-3 py-4">
                  Bid Time <br /> Remaining
                </th>
                <th className="whitespace-nowrap px-3 py-4 ">
                  From city <br />
                  to city
                </th>
                {/* <th className="whitespace-nowrap px-3 py-4">To city</th> */}
                <th className="whitespace-nowrap px-3 py-4">
                  Vehicle Type, <br /> Size, Body,
                  <br /> No. of Vehicle
                </th>
                {/* <th className="whitespace-nowrap px-3 py-4"></th> */}
                {/* <th className="whitespace-nowrap px-3 py-4">Created By</th> */}
                <th className="whitespace-nowrap px-3 py-4">Response</th>
                <th className="whitespace-nowrap px-3 py-4">
                  Assigned <br /> Staff
                </th>
                {/* <th className="whitespace-nowrap px-3 py-4">Details</th> */}
                <th className="whitespace-nowrap px-3 py-4">
                  Material <br /> Weight <br />
                  (in Kg)
                </th>
                <th className="whitespace-nowrap px-3 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid) => (
                <React.Fragment key={bid.id}>
                  <tr className="border-b text-sm font-semibold">
                    <td className="px-3 py-4">{bid.id}</td>
                    <td className="px-3 py-4">
                      {bid.bidNumber} <br /> {bid.createdBy}
                    </td>

                    <td className="px-3 py-4">
                      {bid.date}
                      <br />
                      {bid.time}
                    </td>
                    <td className="px-3 py-4 text-orange-500">
                      {bid.remaining}
                    </td>
                    <td className="px-3 py-4">
                      {bid.fromCity} <br /> &nbsp; &nbsp;&nbsp;
                      <i class="bi bi-arrow-down"></i> <br />
                      {bid.toCity}
                    </td>
                    {/* <td className="px-3 py-4"></td> */}
                    <td className="px-3 py-4">
                      {bid.vehicleType} <br /> {bid.body}, {bid.vehicles}
                    </td>
                    {/* <td className="px-3 py-4"></td> */}
                    {/* <td className="px-3 py-4">{bid.createdBy}</td> */}
                    <td className="px-3 py-4">
                      <button className="text-blue-600 hover:underline">
                        {bid.responses} View results
                      </button>
                    </td>
                    <td className="px-3 py-4">
                      {bid.assignedStaff} <br />
                      {bid.staffId}
                    </td>
                    {/* <td className="px-3 py-4">{bid.staffId}</td> */}
                    <td className="px-3 py-4">{bid.weight}</td>
                    <td className="px-3 py-4">
                      <button
                        onClick={() =>
                          setShowDetails(showDetails === bid.id ? null : bid.id)
                        }
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        {showDetails === bid.id ? (
                          <>
                            View less
                            <i class="bi bi-caret-up-fill"></i>
                          </>
                        ) : (
                          <>
                            View Details <i class="bi bi-caret-down-fill"></i>
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                  <AnimatePresence>
                    {showDetails === bid.id && (
                      <tr>
                        <td colSpan={14}>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-sky-100"
                          >
                            <div className="grid gap-6 p-6 md:grid-cols-4">
                              <div className="space-y-4">
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    Bid No: {bid.bidNumber} ({bid.createdBy})
                                  </h3>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    Loading Point:
                                  </h3>
                                  <p className="text-gray-600">
                                    {bid.loadingPoint}
                                  </p>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    Unloading Point:
                                  </h3>
                                  <p className="text-gray-600">
                                    {bid.unloadingPoint}
                                  </p>
                                </div>

                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    Number of Bidders for this Bid:{" "}
                                    {bid.numberOfBidders}
                                  </h3>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    Target Price: {bid.targetPrice}
                                  </h3>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <p className="font-medium text-gray-900">
                                    <i class="bi bi-person-fill"></i> Assigned
                                    Staff :{" "}
                                    <span className="text-sky-600">
                                      {bid.assignedStaff}
                                    </span>
                                  </p>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    <i class="bi bi-telephone-fill"></i> Phone
                                    number:{" "}
                                    <span className="text-sky-600">
                                      {bid.phoneNumber}
                                    </span>
                                  </h3>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    <i class="bi bi-calendar2-event-fill"></i>{" "}
                                    Vehicle loading date:{" "}
                                    <span className="text-sky-600">
                                      {bid.vehicleLoadingDate}
                                    </span>
                                  </h3>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    <i class="bi bi-truck"></i> Vehicle Type:{" "}
                                    <span className="text-sky-600">
                                      {bid.vehicleDetails} ({bid.fuelType})
                                    </span>
                                  </h3>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    <i class="bi bi-box-seam-fill"></i>{" "}
                                    Material:{" "}
                                    <sky className="text-sky-600">
                                      {bid.material}
                                    </sky>
                                  </h3>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    Weight:{" "}
                                    <span className="text-sky-600">
                                      {bid.materialWeight}
                                    </span>
                                  </h3>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    <i class="bi bi-calendar2-event-fill"></i>{" "}
                                    Request Date:{" "}
                                    <span className="text-sky-600">
                                      {bid.requestDate}
                                    </span>
                                  </h3>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    <i class="bi bi-calendar2-event-fill"></i>{" "}
                                    Expiry Date:{" "}
                                    <span className="text-sky-600">
                                      {bid.expiryDate}
                                    </span>
                                  </h3>
                                </div>
                                <div>
                                  <h3 className="font-medium text-gray-900">
                                    Remarks:{" "}
                                    <span className="text-sky-600">
                                      {bid.remarks}
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </td>
                      </tr>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
