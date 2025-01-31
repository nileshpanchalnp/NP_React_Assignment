import { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Truck,
  Phone,
  Package,
  DollarSign,
  Clock,
  Users,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CreateBidForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bidNo: "",
    bidNoCreateBy: "",
    loadingDate: "",
    response: "",
    assignedStaff: "",
    loadingPoint: "",
    unloadingPoint: "",
    vehicleType: "",
    vehicleft: "",
    vehicleBody: "",
    fuelType: "",
    phoneNumber: "",
    material: "",
    weight: "",
    targetPrice: "",
    requestDate: "",
    remaining: "",
    expiryDate: "",
    numberOfBidders: "",
    remarks: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing bids data from localStorage and handle potential errors
    let bidsData = [];
    try {
      bidsData = JSON.parse(localStorage.getItem("bidsData")) || [];
    } catch (error) {
      console.error("Error parsing bids data:", error);
      // Optionally, you can handle this error by initializing bidsData as an empty array if parsing fails
      bidsData = [];
    }

    // Add new bid data to the array
    bidsData.push(formData);

    // Save the updated bidsData array back to localStorage
    localStorage.setItem("bidsData", JSON.stringify(bidsData));

    alert("Bids Data created successfully");
    navigate("/bids");
    console.log("Bids Data created successfully!", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/bids")}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold">Create New Bid</h1>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mx-auto max-w-4xl">
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
          {/* Basic Information */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Bid No.
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="bidNo"
                  value={formData.bidNo}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter bid number"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Bid Create Person Name.
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="bidNoCreateBy"
                  value={formData.bidNoCreateBy}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Bid Create Person Name."
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Vehicle Loading Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  name="loadingDate"
                  value={formData.loadingDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Assigned Staff
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="assignedStaff"
                  value={formData.assignedStaff}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter staff name"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                No. of Response
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  name="response"
                  value={formData.response}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="No. of Response ."
                  required
                />
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Location Details</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Loading Point
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="loadingPoint"
                    value={formData.loadingPoint}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter loading point"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Unloading Point
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="unloadingPoint"
                    value={formData.unloadingPoint}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter unloading point"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Vehicle Details</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Vehicle Type
                </label>
                <div className="relative">
                  <Truck className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  >
                    {" "}
                    <option value="">Select vehicle type</option>
                    <option value="Truck">Truck</option>
                    <option value="Bus">Bus</option>
                  </select>
                </div>

                <div className="relative">
                  <Truck className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <select
                    name="vehicleft"
                    value={formData.vehicleft}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select vehicle ft</option>
                    <option value="20ft">20 ft</option>
                    <option value="24ft">24 ft</option>
                    <option value="32ft">32 ft</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Fuel Type
                </label>
                <div className="flex gap-4">
                  {["Petrol", "Diesel", "CNG", "EV"].map((fuel) => (
                    <label key={fuel} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="fuelType"
                        value={fuel}
                        checked={formData.fuelType === fuel}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                        required
                      />
                      <span className="text-sm">{fuel}</span>
                    </label>
                  ))}
                </div>
                <label className="block text-sm font-medium text-gray-700">
                  Body Type
                </label>
                <div className="relative">
                  <Truck className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <select
                    name="vehicleBody"
                    value={formData.vehicleBody}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select vehicle ft</option>
                    <option value="Close Body">(Close Body)</option>
                    <option value="Open Body">(Open Body)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Material and Price Information */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Material
              </label>
              <div className="relative">
                <Package className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter material type"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Weight (in Kg)
              </label>
              <div className="relative">
                <Package className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter weight"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Target Price (₹)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  name="targetPrice"
                  value={formData.targetPrice}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter target price"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Number of Bidders
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  name="numberOfBidders"
                  value={formData.numberOfBidders}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter number of bidders"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Bid Time Remaining
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="remaining"
                  value={formData.remaining}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="7 Hours 14 min"
                  required
                />
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Request Date
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  name="requestDate"
                  value={formData.requestDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-10 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Remarks */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Remarks
            </label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter any additional remarks"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/bids")}
              className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Bid
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
