import { Divider } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  GithubOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="w-screen h-auto text-white py-8">
      <div className="w-full flex justify-center">
        <div className="w-10/12 flex flex-col items-center">
          <Divider style={{ borderColor: "gray" }} />

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled style={{ fontSize: "24px", color: "white" }} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined style={{ fontSize: "24px", color: "white" }} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled style={{ fontSize: "24px", color: "white" }} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined style={{ fontSize: "24px", color: "white" }} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mb-4 gap-y-1 flex flex-col items-center text-gray-400">
            <p>hanskr7882@gmail.com</p>
            <p>+61 466 846 890</p>
          </div>

          {/* Footer Links */}
          <div className="flex gap-x-8 mb-4 flex-col sm:flex-row gap-y-3 items-center">
            <a href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms
            </a>
            <a
              href="/privacy"
              className="text-sm text-gray-400 hover:text-white"
            >
              Privacy Policy
            </a>
            <a href="#home" className="text-sm text-gray-400 hover:text-white">
              About me
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-400 hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-xs text-gray-400 flex flex-col items-center">
            <p>© 2024 Hans Kristian Reynaldi</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
