import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white font-inter">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">7 Heaven General Trading</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              South Sudan's trusted clearing and forwarding agency. We provide fast, 
              secure, and compliant customs clearance services at Juba International 
              Airport, Nimule Border, and Mombasa Port, Kenya.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Juba International Airport & Nimule Border</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+211923482020</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@7heaventrading.com</span>
              </div>
            </div>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-montserrat">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Airport Cargo Clearance</li>
              <li>Border Entry Clearance</li>
              <li>Customs Documentation</li>
              <li>Import Advisory</li>
              <li>Emergency Clearance</li>
              <li>Compliance Consulting</li>
            </ul>
          </div>
          {/* Quick Links & Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-montserrat">Business Hours</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Emergency Only</p>
              <p className="text-primary font-medium">24/7 Emergency Service</p>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold text-white mb-2 font-montserrat">Locations</h5>
              <div className="space-y-1 text-white/80 text-sm">
                <p>📍 Juba International Airport</p>
                <p>📍 Nimule Border Crossing</p>
                <p>📍 Mombasa Port, Kenya</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-white/20 my-8" />
        {/* Bottom Section */}
        <div className="md:flex justify-between items-center text-sm text-white/60">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 7 Heaven General Trading Company Limited. All rights reserved.</p>
            <p className="mt-1">
              Company Registration: [Registration Number] | 
              Licensed Clearing & Forwarding Agent
            </p>
          </div>
          <div className="text-right">
            <p>South Sudan</p>
            <p className="text-right">Your Gateway to Efficient Trade</p>
          </div>
        </div>
      </div>
      {/* Emergency Contact Strip */}
      <div className="bg-gray-100 text-primary">
        <div className="container mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium">
            <span>© 2024 Belednai Technology. All rights reserved.</span>
            <span>📞 Contact Info: +211928446544, +211928741200</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;