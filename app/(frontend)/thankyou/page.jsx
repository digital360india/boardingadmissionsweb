import Image from "next/image";
import Head from "next/head"; // ✅ Import Head from next/head

export default function ThankYouPage() {
  return (
    <>
      <Head>
        {/* Event snippet for Lead form submission BA conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                  'send_to': 'AW-10787874522/au7eCNuj2KsaENrNh5go',
                  'value': 1.0,
                  'currency': 'INR'
              });
            `,
          }}
        />
      </Head>
      <div className="flex items-center justify-center h-screen bg-background01 p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-md w-full transform transition duration-300 hover:scale-105">
          <div className="flex justify-center">
            <Image
              src="/images/student.svg"
              alt="Student"
              className="w-[280px] md:w-[380px] xl:w-[450px]"
              width={1000}
              height={1000}
            />
          </div>
          <h1 className="text-4xl font-extrabold text-[#075D70] mt-6 mb-3 animate-fade-in">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600 mb-6 animate-fade-in">
            Your submission has been received.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#075D70] to-[#A1C5CD] rounded-full text-white font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
}
