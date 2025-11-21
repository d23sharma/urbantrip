import { useState, useMemo } from "react";
import { Send, Clock, Calendar, ChevronDown } from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickup: "",
    drop: "",
    date: null,
    time: "",
    cabType: "",
    message: "",
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isCabTypeOpen, setIsCabTypeOpen] = useState(false);

  const cabTypes = [
    { value: "Sedan", label: "Sedan (4 Seater)" },
    { value: "SUV", label: "SUV (6-7 Seater)" },
    { value: "Hatchback", label: "Hatchback (4 Seater)" },
    { value: "Tempo Traveller", label: "Tempo Traveller (12-17 Seater)" },
    { value: "Bus", label: "Bus (20+ Seater)" },
  ];

  const formatDate = (date) => {
    if (!date) return null;
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const availableTimeSlots = useMemo(() => {
    const slots = [];
    const now = new Date();
    const minTime = new Date(now.getTime() + 15 * 60000);

    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
        const ampm = h < 12 ? 'AM' : 'PM';
        const timeStr = `${String(hour12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`;
        
        if (formData.date && isToday(formData.date)) {
          const slotTime = new Date(formData.date);
          slotTime.setHours(h, m, 0, 0);
          if (slotTime > minTime) {
            slots.push(timeStr);
          }
        } else {
          slots.push(timeStr);
        }
      }
    }
    return slots;
  }, [formData.date]);

  const handleSubmit = () => {
    if (!formData.name || !formData.mobile || !formData.pickup || !formData.drop || !formData.date || !formData.time || !formData.cabType) {
      alert("Please fill all required fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    const [timePart, ampm] = formData.time.split(' ');
    const [hourStr, minuteStr] = timePart.split(':');
    let hour24 = parseInt(hourStr);
    if (ampm === "PM" && hour24 !== 12) hour24 += 12;
    if (ampm === "AM" && hour24 === 12) hour24 = 0;

    const selectedDateTime = new Date(formData.date);
    selectedDateTime.setHours(hour24, parseInt(minuteStr), 0, 0);

    const now = new Date();
    const minTime = new Date(now.getTime() + 15 * 60000);

    if (selectedDateTime < minTime) {
      alert("Please select a time at least 15 minutes from now");
      return;
    }

    const formattedDate = formData.date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    const message = `*New Cab Booking Enquiry*

*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*Pickup:* ${formData.pickup}
*Drop:* ${formData.drop}
*Date:* ${formattedDate}
*Time:* ${formData.time}
*Cab Type:* ${formData.cabType}
*Message:* ${formData.message || "N/A"}`;

    const whatsappMessage = encodeURIComponent(message);
    const whatsappNumber = "917385432115";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
    alert("Redirecting to WhatsApp...");

    setFormData({
      name: "",
      mobile: "",
      pickup: "",
      drop: "",
      date: null,
      time: "",
      cabType: "",
      message: "",
    });
  };

  const generateCalendarDays = () => {
    const today = new Date();
    const days = [];
    for (let i = 0; i < 30; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="shadow-2xl border-0 max-w-2xl mx-auto bg-white rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 p-6 rounded-t-lg">
          <h1 className="text-3xl font-bold text-black">Book Your Ride Now</h1>
          <p className="text-black/90 text-base mt-1">
            Fill in the details and get instant confirmation via WhatsApp
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-base font-semibold block">Full Name *</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-11 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold block">Mobile Number *</label>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                maxLength={10}
                className="w-full h-11 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold block">Pickup Location *</label>
              <input
                type="text"
                placeholder="Enter pickup location"
                value={formData.pickup}
                onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                className="w-full h-11 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold block">Drop Location *</label>
              <input
                type="text"
                placeholder="Enter drop location"
                value={formData.drop}
                onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                className="w-full h-11 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Pickup Date *
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className={`w-full h-11 px-3 border border-gray-300 rounded-md text-left flex items-center gap-2 bg-white hover:bg-gray-50 ${!formData.date ? 'text-gray-500' : 'text-gray-900'}`}
                >
                  <Calendar className="w-4 h-4 text-gray-500" />
                  {formData.date ? formatDate(formData.date) : 'Pick a date'}
                </button>
                {isCalendarOpen && (
                  <div className="absolute z-20 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-h-64 overflow-y-auto w-full">
                    {calendarDays.map((day, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, date: day, time: "" });
                          setIsCalendarOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded hover:bg-purple-50 ${formData.date?.toDateString() === day.toDateString() ? 'bg-purple-100 text-purple-700' : ''}`}
                      >
                        {formatDate(day)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Pickup Time *
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => formData.date && setIsTimeOpen(!isTimeOpen)}
                  disabled={!formData.date}
                  className={`w-full h-12 px-3 border border-gray-300 rounded-md text-left flex items-center justify-between bg-white ${!formData.date ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'} ${!formData.time ? 'text-gray-500' : 'text-gray-900'}`}
                >
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    {formData.time || (formData.date ? 'Select pickup time' : 'Please select a date first')}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                {isTimeOpen && formData.date && (
                  <div className="absolute z-20 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto w-full">
                    {availableTimeSlots.length > 0 ? (
                      availableTimeSlots.map((slot, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, time: slot });
                            setIsTimeOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 hover:bg-purple-50 text-base ${formData.time === slot ? 'bg-purple-100 text-purple-700 font-medium' : ''}`}
                        >
                          {slot}
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-gray-500 text-center">
                        No available time slots for today. Please select another date.
                      </div>
                    )}
                  </div>
                )}
              </div>
              {formData.time && (
                <div className="mt-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium">
                    Selected Time: {formData.time}
                  </p>
                </div>
              )}
              {formData.date && isToday(formData.date) && (
                <p className="text-xs text-gray-500 mt-1">
                  * Only times at least 15 minutes from now are shown
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold block">Cab Type *</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCabTypeOpen(!isCabTypeOpen)}
                  className={`w-full h-12 px-3 border border-gray-300 rounded-md text-left flex items-center justify-between bg-white hover:bg-gray-50 ${!formData.cabType ? 'text-gray-500' : 'text-gray-900'}`}
                >
                  <span>{formData.cabType ? cabTypes.find(c => c.value === formData.cabType)?.label : 'Select cab type'}</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                {isCabTypeOpen && (
                  <div className="absolute z-20 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg w-full">
                    {cabTypes.map((cab) => (
                      <button
                        key={cab.value}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, cabType: cab.value });
                          setIsCabTypeOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 hover:bg-purple-50 text-base ${formData.cabType === cab.value ? 'bg-purple-100 text-purple-700 font-medium' : ''}`}
                      >
                        {cab.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-base font-semibold block">Additional Message (Optional)</label>
              <textarea
                placeholder="Any special requests or instructions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-black gap-2 text-lg h-14 font-semibold shadow-lg hover:shadow-xl transition-all rounded-md flex items-center justify-center"
            >
              <Send className="w-5 h-5" />
              Send Enquiry via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;