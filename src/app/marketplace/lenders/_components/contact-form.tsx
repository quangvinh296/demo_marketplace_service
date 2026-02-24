"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    loanType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#0F0F1A] rounded-3xl p-8 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Need Help Finding a Lender?</h2>
          <p className="text-[#9CA3AF] mb-6">
            Our team of experts is ready to help you find the perfect lender for your specific loan scenario. Get personalized recommendations within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F36F20]/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#F36F20]" />
              </div>
              <div>
                <div className="text-sm text-[#9CA3AF]">Call us</div>
                <div className="font-semibold">+1 (800) 555-0123</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#06B6D4]/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div>
                <div className="text-sm text-[#9CA3AF]">Email us</div>
                <div className="font-semibold">support@loanfactory.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#22C55E]" />
              </div>
              <div>
                <div className="text-sm text-[#9CA3AF]">Business hours</div>
                <div className="font-semibold">Mon-Fri 8AM-6PM PST</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Send us a message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#F36F20] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#F36F20] transition"
            />
            <select
              value={formData.loanType}
              onChange={(e) => setFormData((prev) => ({ ...prev, loanType: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-slate-300 focus:outline-none focus:border-[#F36F20] transition"
            >
              <option value="">Select Loan Type</option>
              <option value="conventional">Conventional</option>
              <option value="fha">FHA</option>
              <option value="va">VA</option>
              <option value="jumbo">Jumbo</option>
              <option value="non-qm">Non-QM</option>
            </select>
            <textarea
              placeholder="Describe your loan scenario..."
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#F36F20] transition resize-none"
            />
            <Button type="submit" className="w-full bg-[#F36F20] hover:bg-[#E5611A] text-white font-semibold py-3 rounded-xl shadow-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
