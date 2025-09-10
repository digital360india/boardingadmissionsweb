"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="h-full bg-gradient03 hidden  lg:block">
        <div className=" text-white  ">
          <div className=" pt-[48px] px-[24px] md:flex md:justify-between md:px-[70px]    lg:flex lg:justify-between  lg:px-[100px]">
            <div className="space-y-5">
              <Image
                src="/icons/Boardinglogo.svg"
                width={223}
                height={84}
                alt="course1"
              />
              <h1 className="text-[14px] md:mr-6 md:w-[28vw] lg:mr-8  font-light lg:w-[30vw] md:text-[18px] md:text-[#FFFFFF]">
                No Secrets, Just Boarding Admissions
              </h1>
              <div className="flex flex-col space-y-4  font-bold justify-between md:w-[250px] md:[10px] lg:w-[350px] text-[8px] lg:text-[16px]">
                <div className="flex gap-3">
                  <Image
                    src="/icons/location.svg"
                    width={20}
                    height={24}
                    alt="course1"
                  />
                  <div>
                    <p>
                      {" "}
                      B 36, Nehru colony, Near Sanatan Dharm Mandir, Dehradun{" "}
                    </p>
                  </div>
                </div>
                <div className="flex  gap-3">
                  <Image
                    src="/icons/mail.svg"
                    width={20}
                    height={24}
                    alt="course1"
                  />

                  <div>
                    <a
                      href="mailto:info@boardingadmission.com"
                      className="cursor-pointer"
                    >
                      <h1>info@boardingadmission.com</h1>
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="/icons/call.svg"
                    width={20}
                    height={24}
                    alt="course1"
                  />
                  <h1>+91 9760548360 </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-20 text-[14px]  md:w-[340px] md:text-[16px] md:text-[#FFFFFF] lg:w-[380px]  ">
              <div className="space-y-3 lg:pr-14 xl:pr-28">
                <h1>SITE MAP</h1>
                <Link href="/">
                  {" "}
                  <h1 className="pt-3">Home</h1>
                </Link>
                <Link href="/courses">
                  <h1 className="pt-2">Courses</h1>
                </Link>
                <h1>Package</h1>
                <h1>Boarding Compatibility Test</h1>
                <Link
                  href="https://blog.boardingadmissions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className=" cursor-pointer">Blogs</p>
                </Link>
              </div>

              <div className="space-y-3 pr-20 md:text-[16px] md:text-[#FFFFFF]  ">
                <h1>Resources</h1>
                <h1>Demo Classes</h1>
                <h1>Sample Test Paper</h1>
              </div>

              <div className="space-y-3 mr-40 md:text-[16px] md:text-[#FFFFFF]">
                <h1>FOLLOW US</h1>
                <h1 className="flex gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                      />
                    </svg>
                  </div>{" "}
                  <div>
                    <Link href="https://www.facebook.com/profile.php?id=100093512793631">
                      Facebook
                    </Link>{" "}
                  </div>
                </h1>
                <h1 className="flex gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15l5-3l-5-3z" />
                      </g>
                    </svg>
                  </div>
                  <Link href="https://www.youtube.com/channel/UCDXg7LwxBc_375I7EgEhY2g">
                    {" "}
                    <div>YouTube</div>
                  </Link>
                </h1>
                <h1 className="flex gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        fill-rule="evenodd"
                        d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <Link href="https://www.instagram.com/boarding_admissions/">
                      Instagram
                    </Link>{" "}
                  </div>
                </h1>
              </div>

              <div className="space-y-5 text-[10px] md:text-[16px] lg:text-[16px] md:hidden  lg:hidden">
                <h1 className="text-[16px] text-[#FFFFFF] cursor-pointer">
                  Copyright © 2024
                </h1>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <div>
                  <Link href="/refundPolicy">
                    <p>Refund Policy</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:justify-between md:py-[40px] md:px-[90px] lg:flex lg:justify-between  lg:py-[48px] lg:px-[100px]">
            <div>
              <h1 className="text-[16px] text-[#FFFFFF] cursor-pointer">
                Copyright © 2024
              </h1>
            </div>
            <div className="flex justify-between w-[450px]">
              <div>
                <Link href="/termsandconditions">
                  <h1 className="cursor-pointer">Terms & Conditions</h1>
                </Link>
              </div>
              <div>
                <Link href="/privacypolicy">
                  <h1 className="cursor-pointer">Privacy Policy</h1>
                </Link>
              </div>
              <div>
                <Link href="/refundPolicy">
                  <p>Refund Policy</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile  */}
      <div className="bg-primary02  lg:hidden">
        <div className="flex justify-center items-center pt-8">
          <div>
            <Image
              src="/icons/Boardinglogo.svg"
              width={180}
              height={62}
              alt="logo"
            />
          </div>
        </div>

        <div className="flex justify-between items-center p-4 mt-6">
          <div>
            <div className="flex gap-2">
              <Image
                src="/icons/location.svg"
                width={14}
                height={14}
                alt="location"
              />
              <p className="text-white text-[0.75rem]">
                B 36, Nehru colony, Near Sanatan Dharm Mandir, Dehradun
              </p>
            </div>

            <div className="flex gap-2 mt-2">
              <Image src="/icons/mail.svg" width={14} height={14} alt="mail" />

              <div>
                <a
                  href="mailto:info@boardingadmission.com"
                  className="text-white text-[0.75rem] cursor-pointer"
                >
                  <p>info@boardingadmission.com</p>
                </a>
              </div>
            </div>
            <div className="flex gap-2 py-2 lg:hidden">
              <Image src="/icons/call.svg" width={14} height={14} alt="call" />
              <p className="text-white text-[0.75rem]">+91 9149057322</p>
            </div>
          </div>

          <div className="hidden lg:flex gap-2 pb-5">
            <Image src="/icons/call.svg" width={14} height={14} alt="call" />
            <p className="text-white text-[0.75rem]">+91 9149057322</p>
          </div>
        </div>

        <div className="grid grid-cols-2 text-white text-[0.875rem] p-4 gap-3">
          {/* <div>
            <h1 className="font-semibold pb-2">COMPANY</h1>
            <Link href="/contact">
              <h1 className="font-light cursor-pointer">Contact</h1>
            </Link>
           
          </div> */}

          <div className="space-y-2">
            <p className="font-semibold pb-2">SITE MAP</p>
            <p className="font-light">
              <Link href="/">Home</Link>
            </p>
            <p className="font-light">Shop</p>
            <p className="font-light">Consult</p>
            <p className="font-light">
              <Link href="/aboutus">About Us</Link>
            </p>
            <p className="font-light cursor-pointer">
              <Link href="/contact">Contact</Link>
            </p>
            <Link
              href="https://blog.boardingadmissions.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className=" cursor-pointer">Blogs</p>
            </Link>
          </div>

          <div>
            <h1 className="font-semibold pb-1">FOLLOW US</h1>
            <div className="flex items-center gap-2 mt-2">
              <Image
                src="/icons/fb2.svg"
                width={20}
                height={20}
                alt="Facebook logo"
              />
              <Link href="https://www.facebook.com/profile.php?id=100093512793631">
                {" "}
                <h1 className="font-light cursor-pointer">Facebook</h1>
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Image
                src="/icons/youtube.svg"
                width={20}
                height={20}
                alt="YouTube logo"
              />
              <Link href="https://www.youtube.com/channel/UCDXg7LwxBc_375I7EgEhY2g">
                {" "}
                <h1 className="font-light cursor-pointer">YouTube</h1>
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Image
                src="/icons/insta.svg"
                width={20}
                height={20}
                alt="Instagram logo"
              />
              <Link href="https://www.instagram.com/boarding_admissions/">
                {" "}
                <h1 className="font-light cursor-pointer">Instagram</h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between lg:justify-start text-white text-[0.75rem] p-4 gap-3  font-light">
          <Link href="/termsandconditions">
            <h1 className="cursor-pointer">Terms & Conditions</h1>
          </Link>

          <Link href="/privacypolicy">
            <h1 className="cursor-pointer">Privacy Policy</h1>
          </Link>

          <Link href="/refundPolicy">
            <p>Refund Policy</p>
          </Link>
        </div>

        <h1 className="text-white text-[0.75rem] text-center pb-8">
          Copyright © 2024
        </h1>
      </div>
    </>
  );
};

export default Footer;
