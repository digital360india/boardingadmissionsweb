import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy for Boarding Admissions</h1>
      
      <p className="mb-4 text-gray-600">
        At <strong>Boarding Admissions</strong> , we understand the importance of your privacy and are committed to safeguarding the personal information of both students and parents. This policy outlines how we collect, use, and protect your data throughout the boarding school entrance exam preparation process.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">Information We Collect:</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-600">
        <li> <strong>Personal Details:</strong> When you sign up for our services, we collect basic information such as names, contact numbers, and email addresses.</li>
        <li><strong>Student Academic Records:</strong>  For personalised guidance, we may request academic reports, scores, and school information.</li>
        <li><strong>Parental Consent:</strong>  If the student is under 18, we ensure parental consent before gathering personal data.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">How We Use Your Information:</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-600">
        <li><strong>Service Personalisation:</strong>  Data helps us provide customized study plans, monitor progress, and communicate important updates.</li>
        <li> <strong>Improvement and Analytics:</strong> We analyze performance data to enhance our educational programs and offer better learning resources.</li>
        <li> <strong>Communication:</strong> Your contact information is used to send notifications regarding course materials, schedules, and progress updates.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">Information Sharing:</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-600">
        <li><strong>Third-Party Service Providers:</strong> To facilitate smooth operations (like online classes or exam simulations), we may share your data with trusted third-party partners, ensuring they adhere to strict confidentiality.</li>
        <li><strong>No Unauthorised Sharing:</strong> We do not sell, rent, or share your information with external parties for marketing or unrelated purposes.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">Data Protection Measures:</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-600">
        <li><strong>Secure Data Storage:</strong> We use advanced encryption techniques and secure databases to store your personal and academic data.</li>
        <li><strong>Access Control:</strong> Only authorized staff and partners have access to your data to ensure it is protected against unauthorized use.</li>
        <li><strong>Retention Policy:</strong> We retain your data only for as long as necessary to provide our services or as legally required.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">Your Rights:</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-600">
        <li><strong>Data Access and Update:</strong> You can request access to the personal data we hold about you and update any inaccuracies.</li>
        <li><strong>Opt-Out Option:</strong> You can unsubscribe from our communications or stop using our services anytime by contacting us.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">Cookies and Online tracking:</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-600">
        <li><strong>Website Usage:</strong> We use cookies to enhance your browsing experience and gather information on website traffic. You can adjust your browser settings to disable cookies.</li>
      </ul>

      <p className="mt-6 text-gray-600">
        We are dedicated to maintaining the confidentiality and security of your information while helping you navigate the boarding school admissions process. If you have any questions or need further clarification regarding our privacy practices, feel free to reach out to our team. Your trust is important to us, and we are here to ensure your data is treated with the utmost care.
      </p>
    </div>
  );
};

export default PrivacyPolicy;