import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#9538E2] to-[#6A1B9A]">
      <div className="container mx-auto pt-8">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold py-6">Gadget Heaven</h1>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <footer className="footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white p-10">
          <nav>
            <h6 className="footer-title font-bold text-lg mb-4">Services</h6>
            <p><NavLink to="/" className="">Home</NavLink></p>
            <p><NavLink to="/statistics" className="link-hover">Statistics</NavLink></p>
            <p><NavLink to="/dashboard" className="link-hover">Dashboard</NavLink></p>
            <p><NavLink to="/compare" className="link-hover">Compare Gadgets</NavLink></p>
          </nav>

          <nav>
            <h6 className="footer-title font-bold text-lg mb-4">Company</h6>
            <p><NavLink to="/" className="link-hover">About Us</NavLink></p>
            <p><NavLink to="/careers" className="link-hover">Careers</NavLink></p>
            <p><NavLink to="/contact" className="link-hover">Contact Us</NavLink></p>
            <p><NavLink to="/blog" className="link-hover">Blog</NavLink></p>
          </nav>

          <nav>
            <h6 className="footer-title font-bold text-lg mb-4">Legal</h6>
            <a className="link link-hover text-gray-300 " href="/terms">Terms of Use</a>
            <a className="link link-hover text-gray-300 " href="/privacy">Privacy Policy</a>
            <a className="link link-hover text-gray-300 " href="/cookie-policy">Cookie Policy</a>
          </nav>

          <nav>
            <h6 className="footer-title font-bold text-lg mb-4">Connect with Us</h6>
            <p className="text-gray-300">Follow us on social media to stay updated.</p>
            <div className="flex space-x-4 mt-3">
              <a href="https://facebook.com" className="text-white "><i className="fab fa-facebook-square fa-2x"></i></a>
              <a href="https://twitter.com" className="text-white "><i className="fab fa-twitter-square fa-2x"></i></a>
              <a href="https://linkedin.com" className="text-white "><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="https://instagram.com" className="text-white "><i className="fab fa-instagram-square fa-2x"></i></a>
            </div>
          </nav>
        </footer>
        <div className="border-t border-gray-400 py-4 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Gadget Heaven. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
