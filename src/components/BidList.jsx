import React, { useEffect, useState } from "react";
import "./Custom.css";
import { Calendar, Search, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function BidList() {
  const [showDetails, setShowDetails] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState("live");
  const navigate = useNavigate();
  const [bids, setBids] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedBids = JSON.parse(localStorage.getItem("bidsData")) || [];
    setBids(storedBids);
  }, []);

  const toggleDetails = (id) => {
    setShowDetails((prevId) => (prevId === id ? null : id)); // Close other bid details when toggling
  };
  const filteredBids = bids.filter(
    (bid) =>
      bid.bidNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bid.bidNoCreateBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bid.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bid.loadingPoint.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bid.unloadingPoint.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bid.vehicleType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Top Filters Section */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/*  */}

            {/*  */}
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
                    ? "bg-blue-600 text-green-500"
                    : "text-green-600 hover:bg-gray-50"
                }`}
              >
                Responded (30)
              </button>
              <button
                onClick={() => setActiveTab("unresponded")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "unresponded"
                    ? "bg-blue-600 text-red-500"
                    : "text-red-500 hover:bg-gray-50"
                } rounded-r-lg`}
              >
                Unresponded (30)
              </button>
            </div>
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
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate("/create-bid")}
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-lm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create <i className="bi bi-plus-square-fill"></i>
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-lg border bg-white pl-10 pr-4 py-2 text-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bids Table */}
      <div className="rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b rounded-xl text-left text-sm table-header-color font-medium text-white">
                <th className="whitespace-nowrap px-3 py-4">S No.</th>
                <th className="whitespace-nowrap px-3 py-4">
                  Bid Number <br /> Created by
                </th>
                <th className="whitespace-nowrap px-3 py-4">
                  Start Date <br /> & Time
                </th>
                <th className="whitespace-nowrap px-3 py-4">
                  Bid Time <br /> Remaining
                </th>
                <th className="whitespace-nowrap px-3 py-4">
                  From city <br />
                  To city
                </th>
                <th className="whitespace-nowrap px-3 py-4">
                  Vehicle Type, <br /> Size, Body,
                  <br /> No. of Vehicles
                </th>
                <th className="whitespace-nowrap px-3 py-4">Response</th>
                <th className="whitespace-nowrap px-3 py-4">
                  Assigned <br /> Staff
                </th>
                <th className="whitespace-nowrap px-3 py-4">
                  Material <br /> Weight <br />
                  (in Kg)
                </th>
                <th className="whitespace-nowrap px-3 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBids.length === 0 ? (
                <tr>
                  <td colSpan="10" className="text-center py-4 text-gray-500">
                    No data available
                  </td>
                </tr>
              ) : (
                filteredBids.map((bid, index) => (
                  <React.Fragment key={bid.id}>
                    <tr className="border-b text-sm font-semibold">
                      <td className="px-3 py-4">
                        <i class="bi bi-circle-fill text-xs text-green-500"></i>{" "}
                        &nbsp;
                        {index + 1}
                      </td>
                      <td className="px-3 py-4">
                        #{bid.bidNo} <br />{" "}
                        <span className="text-gray-500">
                          {bid.bidNoCreateBy}
                        </span>
                      </td>
                      <td className="px-3 py-4">
                        {bid.loadingDate}
                        <br />
                        {bid.time}
                      </td>
                      <td className="px-3 py-4 text-orange-500">
                        {bid.remaining}
                      </td>
                      <td className="px-3 py-4">
                        {bid.loadingPoint} <br /> &nbsp; &nbsp;&nbsp;
                        <i className="bi bi-arrow-down"></i> <br />
                        {bid.unloadingPoint}
                      </td>
                      <td className="px-3 py-4">
                        {bid.vehicleType} {bid.vehicleft},
                        <br /> {bid.vehicleBody}
                      </td>
                      <td className="px-3 py-4">
                        <button className="text-blue-600 hover:underline">
                          {bid.response} View results
                        </button>
                      </td>
                      <td className="px-3 py-4">
                        {bid.assignedStaff} <br />
                        {bid.staffId}
                      </td>
                      <td className="px-3 py-4">{bid.weight}</td>
                      <td className="px-3 py-4">
                        <button
                          onClick={() => toggleDetails(bid.bidNo)}
                          className="flex items-center gap-1 text-blue-600 hover:underline"
                        >
                          {showDetails === bid.bidNo
                            ? "View less"
                            : "View Details"}
                          {showDetails === bid.bidNo ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </button>
                      </td>
                    </tr>
                    <AnimatePresence>
                      {showDetails === bid.bidNo && (
                        <tr>
                          <td colSpan={14}>
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-sky-100"
                            >
                              <div className="grid gap-6 p-6 md:grid-cols-3">
                                <div className="space-y-4">
                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      Bid No: #{bid.bidNo} ({bid.bidNoCreateBy})
                                    </h3>
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      <i class="bi bi-circle-fill text-green-600"></i>{" "}
                                      <span className="text-green-600">
                                        Loading Point
                                      </span>
                                      :{" "}
                                      <span className="text-sky-600 text-lg">
                                        {bid.loadingPoint}
                                      </span>
                                      <p className="font-medium pl-7 text-gray-500">
                                        {bid.loadingPointAdd}
                                      </p>
                                    </h3>
                                  </div>

                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      <i class="bi bi-geo-alt-fill text-red-600"></i>{" "}
                                      <span className="text-red-600">
                                        Unloading Point:
                                      </span>{" "}
                                      <span className="text-sky-600 text-lg">
                                        {bid.unloadingPoint}
                                      </span>
                                      <p className="font-medium pl-7 text-gray-500">
                                        {bid.unloadingPointAdd}
                                      </p>
                                    </h3>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      <i className="bi bi-calendar2-event-fill"></i>{" "}
                                      Vehicle loading date:{" "}
                                      <span className="text-sky-600">
                                        {bid.loadingDate}
                                      </span>
                                    </h3>
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      <i className="bi bi-truck"></i> Vehicle
                                      Type:{" "}
                                      <span className="text-sky-600">
                                        {bid.vehicleType} {bid.vehicleft},
                                        {bid.vehicleBody} ({bid.fuelType})
                                      </span>
                                    </h3>
                                  </div>
                                  <div>
                                    <span className="font-medium text-gray-900">
                                      <i className="bi bi-box-seam-fill"></i>{" "}
                                      Material:{" "}
                                      <span className="text-sky-600">
                                        {bid.material}
                                      </span>
                                    </span>{" "}
                                    &nbsp;
                                    <span className="font-medium text-gray-900">
                                      Weight:{" "}
                                      <span className="text-sky-600">
                                        {bid.weight} Tonnes
                                      </span>
                                    </span>
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      <i class="bi bi-calendar2-event-fill"></i>{" "}
                                      RequestDate:{" "}
                                      <span className="text-sky-600">
                                        {bid.requestDate}
                                      </span>
                                    </h3>
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      <i class="bi bi-calendar2-event-fill"></i>{" "}
                                      ExpiryDate:{" "}
                                      <span className="text-sky-600">
                                        {bid.expiryDate}
                                      </span>
                                    </h3>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div>
                                    <p className="font-medium text-gray-900">
                                      <i className="bi bi-person-fill"></i>{" "}
                                      Assigned Staff :{" "}
                                      <span className="text-sky-600">
                                        {bid.assignedStaff}
                                      </span>
                                    </p>
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      <i className="bi bi-telephone-fill"></i>{" "}
                                      Phone number:{" "}
                                      <span className="text-sky-600">
                                        +91 {bid.phoneNumber}
                                      </span>
                                    </h3>
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      Number of Bidders for this Bid:{" "}
                                      <span className="text-sky-600 text-lg">
                                        {bid.numberOfBidders}
                                      </span>
                                    </h3>
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      Target Price:{" "}
                                      <span className="text-sky-600 text-lg">
                                        Rs {bid.targetPrice}
                                      </span>
                                    </h3>
                                  </div>
                                  <div className="space-y-4">
                                    <div>
                                      <h3 className="font-medium text-gray-900">
                                        <i class="bi bi-pencil-square"></i>{" "}
                                        Remarks:{" "}
                                        <span className="text-sky-600">
                                          {bid.remarks}
                                        </span>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </td>
                        </tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
