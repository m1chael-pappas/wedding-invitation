"use client";

import React from 'react';

import Image from 'next/image';
import {
  Parallax,
  ParallaxProvider,
} from 'react-scroll-parallax';

import {
  AnimatedText,
  FadeInSection,
} from '@/components/ui/animation-components';
import RSVPForm from '@/components/ui/RSVPForm';

const WeddingInvitation = () => {
  return (
    <ParallaxProvider>
      <div className="flex flex-col items-center bg-white text-gray-800 min-h-screen max-w-full overflow-x-hidden">
        {/* First section - Main invite with names and date */}
        <div className="w-full max-w-5xl mx-auto bg-zinc-50 flex flex-col items-center text-center px-3 py-12">
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center">
              <span className="mr-2">🇦🇺</span>
              English
            </span>
          </div>

          <FadeInSection direction="down" delay={1}>
            <div className="mt-16 mb-8">
              {/* Stylized monogram/signature */}
              <Image
                src="/mj_logo.png"
                alt="Monogram"
                width={500}
                height={500}
                className="w-80 h-24"
              />
            </div>
          </FadeInSection>
          <AnimatedText
            text="MICHALI & JEONGHA"
            className="text-4xl  font-lustria tracking-tighter w-fit mt-8 mb-4 p-1"
            delay={1}
          />

          <AnimatedText
            text="20 FEB 2026"
            className="text-3xl font-lustria w-fit  mb-8 "
            delay={1}
          />

          <FadeInSection direction="up" delay={1}>
            {/* Decorative candles */}
            <div className="flex justify-center mt-8 ">
              <Image
                src="/candles.png"
                alt="Candles"
                width={600}
                height={600}
                className="w-30 h-50 ml-50"
              />
            </div>
          </FadeInSection>
        </div>

        {/* Second section - Photo with venue and details */}
        <div className="w-full bg-zinc-50 max-w-5xl mx-auto relative">
          <Parallax translateY={[5, 0]} className="w-full">
            <div className="w-full  bg-gray-200">
              {/* This would be replaced with an actual image */}
              <Image
                src="/wedding_bg.png"
                alt="couple"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </Parallax>

          <div className="absolute inset-0 flex items-center justify-center">
            <FadeInSection direction="up" delay={0.3}>
              <div className="bg-[url(/textbox.png)] p-10 w-80 h-60 mt-80 text-center">
                <h2 className="text-3xl font-lustria mb-2 text-gray-700">
                  Lauriston House
                </h2>
                <h3 className="text-3xl font-lustria mb-4  text-gray-700">
                  Sydney
                </h3>
                <p className="text-xl font-lustria mb-1">20th February 2026</p>
                <p className="text-xl font-lustria mb-1">Friday, 6:00 PM</p>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Third section - Announcement with couple details */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center px-8 py-10 bg-[url(/bg.png)]  text-gray-700 text-center">
          <FadeInSection direction="down" delay={0.2}>
            <div className="mb-6">
              <Image
                src="/ribbon.png"
                alt="Ribbon"
                width={1000}
                height={1000}
                className="w-20 mt-3 h-auto object-cover"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <h2 className="text-3xl font-lustria mb-4">
              We are getting married!
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <p className="text-xl mb-3 font-lustria">
              Please come celebrate this special moment with us as we begin a
              new chapter together.
            </p>
            <p className="text-xl mb-8 font-lustria">
              Even if distance keeps us apart, your love and warm wishes mean
              the world to us.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-2 gap-8 w-full  text-gray-700 max-w-md mt-4">
            {/* Groom's photo and details */}
            <FadeInSection direction="left" delay={1}>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-gray-300 mb-2 rounded-lg">
                  <Image
                    src="/michael.png"
                    alt="Groom"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-lustria text-gray-400!">
                  The Groom
                </h3>
                <p className="text-3xl mb-3 font-lustria">Michael Pappas</p>
                <p className="text-xl font-lustria mt-5">From Greece</p>
                <p className="text-xl font-lustria">Software developer</p>
                <p className="text-xl font-lustria">MBTI</p>
                <p className="text-xl font-lustria">Sagittarius</p>
              </div>
            </FadeInSection>

            {/* Bride's photo and details */}
            <FadeInSection direction="right" delay={1}>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-gray-400 mb-2 rounded-lg">
                  <Image
                    src="/jenna.png"
                    alt="Bride"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl text-gray-400! font-lustria">
                  The Bride
                </h3>
                <p className="text-3xl mb-3 font-lustria">Jeongha Lee</p>
                <p className="text-xl font-lustria mt-5">From Korea</p>
                <p className="text-xl font-lustria">UX Designer</p>
                <p className="text-xl font-lustria">MBTI</p>
                <p className="text-xl font-lustria">Aries</p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection direction="up" delay={0.7}>
            <div className="flex flex-col items-center text-xl mt-15">
              <AnimatedText
                text="From two stories to one -"
                className="font-lustria"
                delay={0.1}
              />
              <AnimatedText
                text="This is our shared chapter"
                className="font-lustria"
                delay={0.2}
              />
              <AnimatedText
                text="And our little cat, Dot, is joining our journey as well"
                className="font-lustria"
                delay={0.3}
              />
              <Image
                src="/dot1.png"
                alt="Dot"
                width={500}
                height={500}
                className="w-20 h-15 mt-3 mb-3 object-cover"
              />
            </div>
          </FadeInSection>
        </div>
        {/* Fourth section - Our Story */}
        <div className="w-full max-w-5xl mx-auto bg-zinc-50 flex flex-col items-center px-8 py-12">
          <FadeInSection delay={0.2}>
            <h2 className="text-3xl mb-10 text-center">Our story</h2>
          </FadeInSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300"></div>

            {/* Timeline events */}
            <div className="space-y-5">
              {/* 2021.11 Event */}
              <FadeInSection delay={0.3} direction="up">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="mb-2">
                      <Image
                        src="/mj2021.png"
                        alt="Met in Sydney"
                        width={500}
                        height={500}
                        className="inline-block w-32 h-32 object-cover rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center z-10">
                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="w-1/2 pl-8 text-xl">
                    <p className=" mb-3">2021.11</p>
                    <p>We met in Sydney as the world slowly reopened.</p>
                  </div>
                </div>
              </FadeInSection>

              {/* 2022.09 Event */}
              <FadeInSection delay={0.4} direction="up">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right text-xl">
                    <p className=" mb-3">2022.09</p>
                    <p>
                      We traveled to Greece, and shortly after, we moved in
                      together.
                    </p>
                  </div>
                  <div className="flex flex-col items-center z-10">
                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="mb-2">
                      <Image
                        src="/mj2022.png"
                        alt="Trip to Greece"
                        width={500}
                        height={500}
                        className="inline-block w-32 h-32 object-cover rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* 2023.07 Event */}
              <FadeInSection delay={0.5} direction="up">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="mb-2">
                      <Image
                        src="/mj2023.png"
                        alt="Our first home"
                        width={500}
                        height={500}
                        className="inline-block w-32 h-32 object-cover rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center z-10">
                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="w-1/2 pl-8 text-xl">
                    <p className=" mb-3">2023.07</p>
                    <p>We decided to buy our first home.</p>
                  </div>
                </div>
              </FadeInSection>

              {/* 2024.05 Event */}
              <FadeInSection delay={0.6} direction="up">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right text-xl">
                    <p className="mb-3">2024.05</p>
                    <p>
                      We got engaged with full hearts and shared dreams.{" "}
                      <span className="inline-flex items-center">
                        (and{" "}
                        <Image
                          src="/dot_face.png"
                          alt="Dot"
                          width={500}
                          height={500}
                          className="w-4 h-4 mx-1 inline-block"
                        />{" "}
                        joined)
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center z-10">
                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="mb-2">
                      <Image
                        src="/mj2024.png"
                        alt="Engagement"
                        width={500}
                        height={500}
                        className="inline-block w-32 h-32 object-cover rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* 2026.02 Event */}
              <FadeInSection delay={0.7} direction="up">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="mb-2">
                      <Image
                        src="/mj2026_rings.png"
                        alt="Wedding rings"
                        width={500}
                        height={500}
                        className="inline-block w-32 h-32 object-cover rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center z-10">
                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="w-1/2 pl-8 text-xl">
                    <p className="mb-3">2026.02</p>
                    <p>
                      We&lsquo;re Getting Married - and can&apos;t wait to
                      celebrate with you.
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>

        {/* About our wedding section */}
        <div className="w-full max-w-5xl mx-auto flex text-2xl flex-col items-center px-8 py-12 bg-[url(/bg.png)] relative">
          {/* Decorative pocket watch */}
          <FadeInSection direction="right" delay={0.1}>
            <div className="absolute -top-14 right-3">
              <Image src="/clock.png" alt="about" width={110} height={110} />
            </div>
          </FadeInSection>

          {/* Section heading */}
          <FadeInSection delay={0.2}>
            <h2 className="text-3xl font-medium mt-15 mb-6 pb-1 inline-block">
              About our wedding
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <p className="mb-8 text-xl text-center">
              We&apos;re so excited to share this special day with
              <br />
              you in our own unique way: a blend of
              <br />
              our Korean, Greek, and Australian ways. Here&apos;s what you can
              expect:
            </p>
          </FadeInSection>

          {/* The Ceremony */}
          <FadeInSection delay={0.4} direction="up">
            <div className="w-full mb-8 flex flex-col items-center text-center">
              <h3 className="flex items-center mb-3">
                <span className="mr-1">💍</span>
                The Ceremony
              </h3>
              <p className="text-xl">
                The ceremony will begin at 6:00 PM in the garden
                <br />
                (Or inside the venue if it rains)
              </p>
            </div>
          </FadeInSection>

          {/* Dress Code */}
          <FadeInSection delay={0.5} direction="up">
            <div className="w-full mb-8 flex flex-col items-center text-center">
              <h3 className="font-medium flex items-center mb-3">
                <span className="mr-1">👗</span>
                Dress Code
              </h3>
              <p className="text-xl">
                We&apos;d love for you to join us in cocktail attire
              </p>
            </div>
          </FadeInSection>

          {/* The Reception */}
          <FadeInSection delay={0.6} direction="up">
            <div className="w-full mb-8 flex flex-col items-center text-center">
              <h3 className="font-medium flex items-center mb-3">
                <span className="mr-1">🍰</span>
                The Reception
              </h3>
              <p className="text-xl">
                Following the ceremony, we&apos;ll move right into the
                <br />
                reception at the same venue. There will be
                <br />
                delicious food and drinks, followed by some classic
                <br />
                wedding moments such as cake cutting, speeches
                <br />
                and, of course, a time to dance and enjoy music
                <br />
                with us!
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* RSVP Section */}
        <div className="w-full max-w-5xl mx-auto bg-zinc-50 px-8 py-12 flex flex-col items-center relative">
          {/* Envelope image at the top */}
          <FadeInSection direction="left" delay={0.1}>
            <div className="absolute top-2 left-12 transform -translate-x-1/2 z-10">
              <Image
                src="/envelop.png"
                alt="Envelope"
                width={120}
                height={120}
                className="w-40 h-40"
              />
            </div>
          </FadeInSection>

          {/* Main content with border */}
          <FadeInSection delay={0.3} direction="up">
            <div className="w-full mt-16 p-8 border border-[#f3bdaf] rounded-3xl bg-white relative">
              {/* Heading with border */}
              <div className="flex justify-center mb-10">
                <h2 className="text-3xl font-medium text-center px-4 py-2">
                  Will You Be Joining Us?
                </h2>
              </div>

              <div className="text-center text-xl space-y-8">
                <FadeInSection delay={0.4}>
                  <p>
                    It would be our honour to have you with us
                    <br />
                    on our wedding day.
                  </p>
                </FadeInSection>

                <FadeInSection delay={0.5}>
                  <p>
                    As the ceremony will have assigned seating,
                    <br />
                    please kindly let us know your attendance
                    <br />
                    by 30 November 2025 through the RSVP
                    <br />
                    form below.
                  </p>
                </FadeInSection>

                {/* RSVP Button */}
                <FadeInSection delay={0.6}>
                  <div className="flex justify-center mt-10">
                    <RSVPForm />
                  </div>
                </FadeInSection>
              </div>

              {/* Quill and paper decoration */}
              <FadeInSection direction="right" delay={0.7}>
                <div className="absolute -bottom-20 -right-19 z-10">
                  <Image
                    src="/letter.png"
                    alt="Quill and paper"
                    width={150}
                    height={150}
                    className="w-40 h-40"
                  />
                </div>
              </FadeInSection>
            </div>
          </FadeInSection>
        </div>

        {/* Getting There Section */}
        <div className="w-full max-w-5xl mx-auto px-4 py-12 bg-[url(/bg.png)] relative border  rounded-md">
          {/* Section heading with border */}
          <div className="flex justify-center mb-8">
            <h2 className="text-2xl font-medium text-center border border-blue-100 border-dashed px-8 py-2">
              Getting there
            </h2>
          </div>

          {/* Venue information */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-medium mb-2">
              Lauriston House Function Centre
            </h3>
            <p className="text-gray-400! text-xl">
              146 Marsden Rd, Dundas Valley NSW 2117
            </p>
          </div>

          {/* Map container */}
          <div className="w-full h-64 bg-gray-200 mb-8 border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6631.235659176057!2d151.06216007658986!3d-33.796365915312286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a46953f78dfd%3A0xd2374006a24ca3e6!2sLauriston%20House%20Function%20Centre!5e0!3m2!1sen!2sau!4v1747473406762!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Public Transport */}
          <div className="mb-6 text-xl">
            <h3 className="flex items-center text-2xl font-medium mb-2">
              <span className="mr-2">🚌</span> Public Transport
            </h3>
            <p className="ml-2 mb-1">Closest train station: Eastwood</p>
            <p className="ml-2">
              From Eastwood, take Bus 545 (10 mins) or Uber
            </p>
          </div>

          {/* Parking */}
          <div className="mb-6 text-xl">
            <h3 className="flex items-center text-2xl font-medium mb-2">
              <span className="mr-2">🚗</span> Parking
            </h3>
            <p className="ml-2 mb-1">
              There is no parking on the venue grounds, but guests can be
              dropped off.
            </p>
            <p className="ml-2 mb-1">Nearby parking spots are available.</p>
            <p className="ml-2">See the parking map for details.</p>
          </div>

          {/* Chariot image */}
          <div className="absolute -bottom-6 right-4">
            <Image
              src="/carriage.png"
              alt="Vintage Chariot"
              width={150}
              height={150}
              className="w-32 h-25"
            />
          </div>
        </div>

        {/* Closing Signature Section */}
        <div className="w-full max-w-5xl mx-auto bg-zinc-50 flex flex-col items-center overflow-hidden">
          {/* Signature heading */}
          <div className="w-full px-8 py-10 flex flex-col items-center ">
            {/* With love text in dashed border */}
            <div className=" px-6 py-3 mb-8">
              <h2 className="text-4xl font-medium text-center">
                With love,
                <br />
                Michael & Jenna
              </h2>
            </div>

            {/* Monogram/signature */}
            <div className=" px-6 py-3">
              <Image
                src="/mj_logo.png"
                alt="Signature"
                width={500}
                height={500}
                className="h-30 w-180"
              />
            </div>
          </div>

          {/* Traditional attire photo */}
          <div className="w-full">
            <Image
              src="/hanbok.png"
              alt="Michael and Jenna in traditional Korean attire"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default WeddingInvitation;
