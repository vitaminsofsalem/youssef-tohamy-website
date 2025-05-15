import React from "react";
import Button from "./ui/Button";
import Form from "next/form";
import Image from "next/image";
import fakeJoePointing from "@/assets/images/profile/fake-joe-pointing-right.png";

const Contact: React.FC = () => {
  return (
    <div className="relative flex flex-1 flex-col gap-16 items-center justify-center w-full h-auto overflow-hidden">
      {/* HEADER SECTION */}
      <div className="relative flex flex-col flex-1 justify-start items-start gap-8 md:gap-16 w-full 2xl:p-48">
        <span className="bg-number">05</span>
        <div className="flex flex-col md:flex-row w-full justify-between md:items-center pt-[clamp(4rem,6vw,6rem)] pl-[clamp(4rem,3vw,9rem)]">
          <h1 className="title flex flex-1">LEAVE A NOTE</h1>

          <div className="relative flex flex-1">
            <p className="hidden md:block text font-extralight opacity-50 italic">
              Whether it&apos;s a thought, a project, or just a hello — I&apos;d
              <br />
              love to hear from you. This space is open for ideas,
              <br />
              conversations, and unexpected connections.
            </p>
          </div>
        </div>

        {/* TODO: Add validation to form data, integrate smtp server/sendgrid like service 
        to send to email */}
        <div className="flex w-full">
          <div className="flex justify-center items-center flex-1 p-8">
            <Form
              action="/submit"
              className="flex flex-col gap-8 h-fit w-full p-8 border-2 border-golden"
            >
              <div className="flex flex-col gap-8">
                <input
                  name="query"
                  type="text"
                  className="h-14 text-2xl border-b-1 border-golden p-2"
                  placeholder="Name"
                />
                <input
                  name="query"
                  type="email"
                  className="h-14 text-2xl border-b-1 border-golden p-2"
                  placeholder="Email"
                />
                <textarea
                  name="query"
                  className="h-14 text-2xl border-1 border-golden p-2 min-h-50 max-h-120"
                  placeholder="Message"
                />
              </div>
              <Button type="submit" className="self-end">
                Submit
              </Button>
            </Form>
          </div>
          <div className="hidden md:flex relative flex-1 justify-start items-start h-[clamp(25rem,50vw,70rem)] bg-contact-gradient-dynamic">
            <Image
              src={fakeJoePointing}
              alt="logo"
              priority
              fill
              className="object-cover 
              [mask-image:var(--mask-fade-bottom)] 
    q         [-webkit-mask-image:var(--mask-fade-bottom)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
