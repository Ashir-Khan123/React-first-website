import React from "react";
import background from "../../assets/background.png";

const PrivacySection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-[#0B0E12] text-white py-15 bg-cover bg-center"
    >
      <div className="flex flex-col items-center">
        <div className="sm:text-5xl text-3xl font-semibold text-center capitalize">
          <h3>Privacy Policy</h3>
        </div>
        <div className="text-center py-7">
          <h3 className="sm:text-4xl text-2xl font-semibold">WebXV</h3>
        </div>
        <div className="lg:w-[53%] w-[80%] flex flex-col gap-7 text-[#A1A1A1]">
          <p>
            At WebXV, we take your privacy seriously. This privacy policy explains how we collect, use, and protect your personal information.
          </p>
          <li className="list-disc">
           <span className="text-white font-semibold">Information We Collect:</span> We collect personal information you provide to us, such as your name, email address, and profile information. We also collect information automatically when you use WebXV, such as your IP address, device information, and usage data.
          </li>
          <li>
           <span className="text-white font-semibold">Use of Information:</span> We use your personal information to provide and improve WebXV, communicate with you, and personalize your experience. We may also use your information to send you promotional communications and analyze usage trends.
          </li>
          <li>
            <span className="text-white font-semibold">Sharing of Information:</span> We may share your personal information with third-party service providers that assist us in operating WebXV. We may also disclose your information in response to legal requests or to protect our rights and interests.
          </li>
          <li>
            <span className="text-white font-semibold">Data Security:</span> We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Nonetheless, you agree to absolve us, our partners, and or advertisers of any breach caused to your data through any acts known, or unknown to us.
          </li>
          <li>
           <span className="text-white font-semibold">Children's Privacy:</span> WebXV is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13 years of age.
          </li>
          <li>
           <span className="text-white font-semibold">Your Choices:</span> You may choose to access, update, or delete your personal information by contacting us. You may also opt out of receiving promotional communications from us.
          </li>
          <li>
            <span className="text-white font-semibold">Changes to Terms:</span> We reserve the right to modify this privacy policy at any time. If we make material changes to this policy, we will notify you by email or by posting a notice on WebXV.
          </li>
          <li>
           <span className="text-white font-semibold">Contact Us:</span> If you have any questions or concerns about these terms, please contact us at contact@x-v.io
          </li>
        </div>
      </div>
    </div>
  );
};

export default PrivacySection;
