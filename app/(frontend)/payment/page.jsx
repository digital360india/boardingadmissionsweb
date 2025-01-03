import { redirect } from "next/navigation";
import Link from "next/link";

export default function Payment({ searchParams }) {
  const status = searchParams.status;


  if (status == "failed") {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className=" bg-gray-100 shadow-md rounded-lg p-6  md:mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-20 w-20 text-red-600 mx-auto my-6"
            fill="currentColor"
            viewBox="0 -8 528 528"
          >
            <title>fail</title>
            <path d="M264 456Q210 456 164 429 118 402 91 356 64 310 64 256 64 202 91 156 118 110 164 83 210 56 264 56 318 56 364 83 410 110 437 156 464 202 464 256 464 310 437 356 410 402 364 429 318 456 264 456ZM264 288L328 352 360 320 296 256 360 192 328 160 264 224 200 160 168 192 232 256 168 320 200 352 264 288Z" />
          </svg>

          <div className="text-center">
            <h3 className="md:text-2xl text-base text-black font-semibold text-center">
              Payment Failed!
            </h3>
            <p className="text-gray-500 my-2">
              We are sorry, but your payment did not go through.
            </p>
            <p>Please try again later.</p>
            <div className="py-10 text-center">
              <Link
                href="/"
                className="p-4 mt-10 w-full bg-gradient01 rounded-md text-[18px] font-medium text-white "
              >
                GO BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status == "success") {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className=" bg-gray-100  shadow-md rounded-lg p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-black font-semibold text-center">
              Payment Done!
            </h3>
            <p className="text-gray-500 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p>Have a great day!</p>
            <div className="py-10 text-center">
              <Link
                href="https://accounts.boardingadmissions.com/"
                className="p-4 mt-10 w-full bg-gradient01 rounded-md text-[18px] font-medium text-white "
              >
                GO To Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}






