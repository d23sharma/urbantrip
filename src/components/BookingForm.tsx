import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Send } from "lucide-react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickup: "",
    drop: "",
    datetime: "",
    cabType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.mobile || !formData.pickup || !formData.drop || !formData.datetime || !formData.cabType) {
      toast.error("Please fill all required fields");
      return;
    }

    // Mobile validation
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    // Construct WhatsApp message
    const whatsappMessage = `*New Cab Booking Enquiry*%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Pickup:* ${formData.pickup}%0A*Drop:* ${formData.drop}%0A*Date & Time:* ${formData.datetime}%0A*Cab Type:* ${formData.cabType}%0A*Message:* ${formData.message || "N/A"}`;

    // WhatsApp number (replace with actual number)
    const whatsappNumber = "917385432115";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    toast.success("Redirecting to WhatsApp...");

    // Reset form
    setFormData({
      name: "",
      mobile: "",
      pickup: "",
      drop: "",
      datetime: "",
      cabType: "",
      message: "",
    });
  };

  return (
    <Card className="shadow-2xl border-0 animate-scale-in">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="text-2xl">Book Your Ride Now</CardTitle>
        <CardDescription className="text-primary-foreground/90">
          Fill in the details and get instant confirmation
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="mobile">Mobile Number *</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="10-digit mobile number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              maxLength={10}
              required
            />
          </div>

          <div>
            <Label htmlFor="pickup">Pickup Location *</Label>
            <Input
              id="pickup"
              placeholder="Enter pickup location"
              value={formData.pickup}
              onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="drop">Drop Location *</Label>
            <Input
              id="drop"
              placeholder="Enter drop location"
              value={formData.drop}
              onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="datetime">Date & Time *</Label>
            <Input
              id="datetime"
              type="datetime-local"
              value={formData.datetime}
              onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="cabType">Cab Type *</Label>
            <Select value={formData.cabType} onValueChange={(value) => setFormData({ ...formData, cabType: value })}>
              <SelectTrigger id="cabType">
                <SelectValue placeholder="Select cab type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sedan">Sedan</SelectItem>
                <SelectItem value="SUV">SUV</SelectItem>
                <SelectItem value="Hatchback">Hatchback</SelectItem>
                <SelectItem value="Tempo Traveller">Tempo Traveller</SelectItem>
                <SelectItem value="Bus">Bus</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any special requests or instructions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg h-12">
            <Send className="w-5 h-5" />
            Send Enquiry via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
