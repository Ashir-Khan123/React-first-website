import React from "react";
import background from "../../assets/background.png";

const TermsSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-[#0B0E12] text-white py-15 bg-cover bg-center"
    >
      <div className="flex flex-col items-center">
        <div className="sm:text-5xl text-3xl font-semibold text-center capitalize">
          <h3>Terms and Conditions</h3>
        </div>
        <div className="text-center py-7">
          <p className="uppercase text-[#335DD2] text-sm">Welcome to</p>
          <h3 className="sm:text-4xl text-2xl font-semibold">WebXV</h3>
        </div>
        <div className="lg:w-[53%] w-[80%] flex flex-col gap-7 text-[#A1A1A1]">
          <p>
            By accessing or using our platform, you agree to be bound by these
            terms and conditions. Please read them carefully.
          </p>
          <li className="list-disc">
            <span className="text-white font-semibold">Acceptance of Terms:</span> By using WebXV, you agree to abide by these
            terms and any additional terms and conditions that may apply.
          </li>
          <li>
           <span className="text-white font-semibold"> User Registration:</span> You must register for an account to access certain features of our platform. You agree to provide accurate and complete information during the registration process and to keep your account information up to date.
          </li>
          <li>
            <span className="text-white font-semibold">User Content:</span> You are solely responsible for the content you post on WebXV. By posting content, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content.
          </li>
          <li>
            <span className="text-white font-semibold">Prohibited Activities:</span> You agree not to engage in any activity that violates these terms or any applicable laws. Prohibited activities include, but are not limited to, posting unlawful, harmful, or offensive content, infringing upon the rights of others, and attempting to disrupt the operation of the platform.
          </li>
          <li>
            <span className="text-white font-semibold">Intellectual Property:</span> All intellectual property rights in WebXV, including but not limited to trademarks, copyrights, and trade secrets, are owned by us or our licensors.
          </li>
          <li>
            <span className="text-white font-semibold">Disclaimer of Warranties:</span> WebXV is provided on an "as is" and "as available" basis, without any warranties of any kind. We do not guarantee that the platform will be error-free or uninterrupted.
          </li>
          <li>
            <span className="text-white font-semibold">Limitation of Liability:</span> In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of WebXV.
          </li>
          <li>
            <span className="text-white font-semibold">Governing Law:</span> These terms shall be governed by and construed in accordance with the laws of Alabama
          </li>
          <li>
            <span className="text-white font-semibold">Changes to Terms:</span> We reserve the right to modify these terms at any time without prior notice. Your continued use of WebXV after any such changes constitutes your acceptance of the new terms.
          </li>
          <li>
            <span className="text-white font-semibold">Contact Us:</span> If you have any questions or concerns about these terms, please contact us at contact@x-v.io
          </li>
        </div>
      </div>
    </div>
  );
};

export default TermsSection;
