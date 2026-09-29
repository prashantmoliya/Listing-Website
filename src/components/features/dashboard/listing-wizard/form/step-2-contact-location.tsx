"use client";

import {
  InputWithLabel,
  SelectWithLabel,
} from "@/components/common";
import { daysOfWeek } from "@/data";

interface Step2ContactLocationProps {
  data: {
    state: string;
    city: string;
    address: string;
    pincode: string;
    latitude: string;
    longitude: string;
    phone: string;
    secondaryPhone: string;
    email: string;
    website: string;
    is24x7: boolean;
    openTime: string;
    closeTime: string;
    closedDays: string[];
  };
  onChange: (field: string, value: any) => void;
}

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
];

const stateCitiesMap: Record<string, string[]> = {
  "Andhra Pradesh": ["Adoni", "Amaravati", "Guntur", "Kakinada", "Kurnool", "Nellore", "Rajahmundry", "Tirupati", "Vijayawada", "Visakhapatnam"],
  "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "South Delhi", "West Delhi"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi", "Davangere"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Navi Mumbai"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Bhilwara"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Noida", "Prayagraj", "Ghaziabad"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
};

export function Step2ContactLocation({
  data,
  onChange,
}: Step2ContactLocationProps) {
  const currentCities = stateCitiesMap[data.state] || [
    "Adoni",
    "Jaipur",
    "Mumbai",
    "Delhi",
    "Bengaluru",
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-base font-bold text-slate-900">
          Location & Contact
        </h3>
      </div>

      <div className="space-y-4">
        {/* State & City (2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectWithLabel
            id="biz-state"
            label="State"
            required
            placeholder="Select State"
            value={data.state}
            onValueChange={(newState) => {
              onChange("state", newState);
              if (stateCitiesMap[newState]?.length) {
                onChange("city", stateCitiesMap[newState][0]);
              }
            }}
            options={indianStates.map((st) => ({ value: st, label: st }))}
          />

          <SelectWithLabel
            id="biz-city"
            label="City"
            required
            placeholder="Select City"
            value={data.city}
            onValueChange={(city) => onChange("city", city)}
            options={currentCities.map((c) => ({ value: c, label: c }))}
          />
        </div>

        {/* Full Address */}
        <InputWithLabel
          id="biz-address"
          label="Full Address"
          placeholder="Shop/Office address"
          value={data.address}
          onChange={(e) => onChange("address", e.target.value)}
        />

        {/* Pincode */}
        <InputWithLabel
          id="biz-pincode"
          label="Pincode"
          placeholder="e.g. 110001"
          value={data.pincode}
          onChange={(e) => onChange("pincode", e.target.value)}
        />

        {/* Latitude & Longitude (2 columns) */}
        <div className="space-y-1.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputWithLabel
              id="biz-latitude"
              label="Latitude (Google Maps)"
              placeholder="e.g. 28.7041"
              value={data.latitude}
              onChange={(e) => onChange("latitude", e.target.value)}
            />

            <InputWithLabel
              id="biz-longitude"
              label="Longitude (Google Maps)"
              placeholder="e.g. 77.1025"
              value={data.longitude}
              onChange={(e) => onChange("longitude", e.target.value)}
            />
          </div>
          <p className="text-[11px] text-slate-400">
            Right-click on Google Maps and click the coordinates to copy them.
          </p>
        </div>

        {/* Phone Number & Secondary Phone (2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputWithLabel
            id="biz-phone"
            label="Phone Number"
            required
            type="tel"
            placeholder="+91 92438 37806"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
          />

          <InputWithLabel
            id="biz-secondary-phone"
            label="Secondary Phone"
            type="tel"
            placeholder="+91 Optional"
            value={data.secondaryPhone}
            onChange={(e) => onChange("secondaryPhone", e.target.value)}
          />
        </div>

        {/* Email */}
        <InputWithLabel
          id="biz-email"
          label="Email"
          type="email"
          placeholder="business@email.com"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
        />

        {/* Website */}
        <InputWithLabel
          id="biz-website"
          label="Website"
          type="url"
          placeholder="https://yourbusiness.com"
          value={data.website}
          onChange={(e) => onChange("website", e.target.value)}
        />

        {/* Business Hours - Toggle + Open/Close + Weekly Off */}
        <div className="pt-2 space-y-4">
          <label className="text-xs sm:text-sm font-bold text-slate-700 select-none block">
            Business Timing & Hours
          </label>

          {/* 24x7 Toggle */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                Open 24 Hours / 7 Days a Week?
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Ideal for hospitals, hotels, emergency services, or 24/7 pharmacies.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                checked={data.is24x7}
                onChange={(e) => onChange("is24x7", e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>

          {!data.is24x7 && (
            <div className="space-y-4 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputWithLabel
                  id="biz-opentime"
                  label="Daily Opening Time"
                  type="time"
                  value={data.openTime}
                  onChange={(e) => onChange("openTime", e.target.value)}
                />

                <InputWithLabel
                  id="biz-closetime"
                  label="Daily Closing Time"
                  type="time"
                  value={data.closeTime}
                  onChange={(e) => onChange("closeTime", e.target.value)}
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-bold text-slate-700 select-none block mb-2">
                  Weekly Off Days (Closed Days)
                </label>
                <div className="flex flex-wrap gap-2">
                  {daysOfWeek.map((day) => {
                    const isOff = data.closedDays.includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => {
                          if (isOff) {
                            onChange(
                              "closedDays",
                              data.closedDays.filter((d) => d !== day)
                            );
                          } else {
                            onChange("closedDays", [...data.closedDays, day]);
                          }
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer border ${
                          isOff
                            ? "bg-rose-50 border-rose-200 text-rose-700"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {day} {isOff && "(Closed)"}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
