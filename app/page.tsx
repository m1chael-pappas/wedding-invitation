"use client";

import React, { useState } from 'react';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import {
  Parallax,
  ParallaxProvider,
} from 'react-scroll-parallax';

import {
  AnimatedText,
  FadeInSection,
} from '@/components/ui/animation-components';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ParkingModal } from '@/components/ui/parking-modal';
import RSVPForm from '@/components/ui/RSVPForm';

import translationsData from '../lib/translations.json';
import { Translations } from './types/translations';

const getFontClass = (language: string, baseFont: string = "") => {
  const koreanFont = language === "ko" ? "font-yeon-sung" : "";
  return `${baseFont} ${koreanFont}`.trim();
};

const translations = translationsData as Translations;

const languageOptions = [
  { code: "en", name: "English", flag: "🇦🇺" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
];

const WeddingInvitation = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const t = translations[currentLanguage as keyof typeof translations];

  if (!t) {
    return <div>Language not supported</div>;
  }

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
  };

  const currentLanguageOption = languageOptions.find(
    (lang) => lang.code === currentLanguage
  );

  return (
    <ParallaxProvider>
      <div className="flex flex-col items-center bg-white text-gray-800 min-h-screen max-w-full overflow-x-hidden">
        {/* First section - Main invite with names and date */}
        <div className="w-full max-w-5xl mx-auto bg-zinc-50 flex flex-col items-center text-center px-3 py-12">
          <div className=" top-4 right-4 fixed z-50 border border-gray-300 rounded-lg bg-white shadow-md">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-white/80"
                >
                  <span className="text-xl">{currentLanguageOption?.flag}</span>
                  <span
                    className={`font-medium ${getFontClass(currentLanguage)}`}
                  >
                    {currentLanguageOption?.name}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languageOptions.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <span className="text-xl">{language.flag}</span>
                    <span
                      className={`font-medium ${getFontClass(currentLanguage)}`}
                    >
                      {language.name}
                    </span>
                    {currentLanguage === language.code && (
                      <span className="ml-auto text-blue-600">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <FadeInSection direction="down" delay={1}>
            <div className="mt-30 mb-4">
              {/* Stylized monogram/signature */}
              <Image
                src="/mj_logo.png"
                alt="Monogram"
                width={500}
                height={500}
                className="w-120 h-25"
              />
            </div>
          </FadeInSection>
          <div className="w-full flex justify-center overflow-hidden">
            <div className="whitespace-nowrap min-w-max overflow-x-auto pb-2">
              <AnimatedText
                text={t.coupleNames}
                className={`text-5xl xs:text-5xl sm:text-5xl md:text-6xl tracking-tighter mt-8 mb-4 p-1 ${getFontClass(
                  currentLanguage,
                  "font-koulen!"
                )}`}
                delay={1}
              />
            </div>
          </div>

          <AnimatedText
            text={t.weddingDate}
            className={`text-4xl w-fit mb-8 ${getFontClass(
              currentLanguage,
              "font-koulen!"
            )}`}
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
                className="w-50 h-70 ml-30"
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
              <div className="bg-[url(/textbox.png)] p-10 w-80 h-60 md:w-96 md:h-72 lg:w-[30rem] lg:h-80 xl:w-[42rem] xl:h-90 mt-80 text-center">
                <h2
                  className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 text-gray-700 text-nowrap ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.venueName}
                </h2>
                <h3
                  className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-gray-700 ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.venueCity}
                </h3>
                <p
                  className={`text-xl md:text-2xl lg:text-4xl xl:text-5xl mb-1 ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.venueFullDate}
                </p>
                <p
                  className={`text-xl md:text-2xl lg:text-4xl xl:text-5xl mb-1 ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.venueTime}
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Third section - Announcement with couple details */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center px-8 py-10 bg-[#F8F4F3]  text-gray-700 text-center">
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
            <h2
              className={`text-3xl font-black mb-15 ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.weddingAnnouncement}
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <p
              className={`text-lg/snug mb-5 ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.celebrationMessage}
            </p>
            <p
              className={`text-lg/snug mb-18 ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.distanceMessage}
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
                <h3
                  className={`text-base text-gray-400! ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.groomSection.title}
                </h3>
                <p
                  className={`text-xl mb-3 whitespace-nowrap ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.groomSection.name}
                </p>
                <p
                  className={`text-base mt-5 ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.groomSection.origin}
                </p>
                <p
                  className={`text-base ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.groomSection.profession}
                </p>
                <p
                  className={`text-base ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.groomSection.mbti}
                </p>
                <p
                  className={`text-base ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.groomSection.zodiac}
                </p>
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
                <h3
                  className={`text-base text-gray-400! ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.brideSection.title}
                </h3>
                <p
                  className={`text-xl mb-3 ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.brideSection.name}
                </p>
                <p
                  className={`text-base mt-5 ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.brideSection.origin}
                </p>
                <p
                  className={`text-base ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.brideSection.profession}
                </p>
                <p
                  className={`text-base ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.brideSection.mbti}
                </p>
                <p
                  className={`text-base ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.brideSection.zodiac}
                </p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection direction="up" delay={0.7}>
            <div className="flex flex-col items-center text-lg/snug mt-15">
              <AnimatedText
                text={t.fromTwoStoriesToOne}
                className={getFontClass(currentLanguage, "font-lustria")}
                delay={0.1}
              />
              <AnimatedText
                text={t.sharedChapter}
                className={getFontClass(currentLanguage, "font-lustria")}
                delay={0.2}
              />
              <AnimatedText
                text={t.dotJoining}
                className={`pt-5 max-w-52 text-wrap ${getFontClass(
                  currentLanguage,
                  "font-lustria"
                )}`}
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
            <h2
              className={`text-3xl font-black mb-10 text-center ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.ourStory}
            </h2>
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
                    <p
                      className={`mb-3 ${getFontClass(
                        currentLanguage,
                        "font-lustria"
                      )}`}
                    >
                      {t.timelineEvents[2021].date}
                    </p>
                    <p
                      className={`text-base/snug ${getFontClass(
                        currentLanguage,
                        "font-lustria"
                      )}`}
                    >
                      {t.timelineEvents[2021].description}
                    </p>
                  </div>
                </div>
              </FadeInSection>

              {/* 2022.09 Event */}
              <FadeInSection delay={0.4} direction="up">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right text-xl">
                    <p
                      className={`mb-3 ${getFontClass(
                        currentLanguage,
                        "font-lustria"
                      )}`}
                    >
                      {t.timelineEvents[2022].date}
                    </p>
                    <p
                      className={`text-base/snug ${getFontClass(
                        currentLanguage,
                        "font-lustria"
                      )}`}
                    >
                      {t.timelineEvents[2022].description}
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
                    <p
                      className={`mb-3 ${getFontClass(
                        currentLanguage,
                        "font-lustria"
                      )}`}
                    >
                      {t.timelineEvents[2023].date}
                    </p>
                    <p
                      className={`text-base/snug ${getFontClass(
                        currentLanguage,
                        "font-lustria"
                      )}`}
                    >
                      {t.timelineEvents[2023].description}
                    </p>
                  </div>
                </div>
              </FadeInSection>

              {/* 2024.05 Event */}
              <FadeInSection delay={0.6} direction="up">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right text-xl">
                    <p
                      className={`mb-3 ${getFontClass(
                        currentLanguage,
                        "font-lustria"
                      )}`}
                    >
                      {t.timelineEvents[2024].date}
                    </p>
                    <p
                      className={`text-base/snug ${getFontClass(
                        currentLanguage,
                        "font-lustria"
                      )}`}
                    >
                      {t.timelineEvents[2024].description}{" "}
                      <span className="inline-flex items-center">
                        ({t.dotJoinedText}{" "}
                        <Image
                          src="/dot_face.png"
                          alt="Dot"
                          width={500}
                          height={500}
                          className="w-6 h-6 mx-1 inline-block"
                        />{" "}
                        {t.dotJoinedTextEnd})
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
                  <div className="w-1/2 pl-8 pb-7 text-xl">
                    <p
                      className={`mb-3 ${getFontClass(
                        currentLanguage,
                        "font-lustria"
                      )}`}
                    >
                      {t.timelineEvents[2026].date}
                    </p>
                    <p
                      className={`text-base/snug ${getFontClass(
                        currentLanguage,
                        "font-lustria"
                      )}`}
                    >
                      {t.timelineEvents[2026].description}
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
            <h2
              className={`text-3xl font-black mt-15 mb-12 pb-1  inline-block ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.aboutWedding.title}
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <p
              className={`mb-8 text-lg/snug text-center ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.aboutWedding.description}
            </p>
          </FadeInSection>

          {/* The Ceremony */}
          <FadeInSection delay={0.4} direction="up">
            <div className="w-full mb-8 flex flex-col items-center text-center">
              <h3
                className={`flex items-center font-black mb-6 ${getFontClass(
                  currentLanguage,
                  "font-lustria"
                )}`}
              >
                <span className="mr-1 ">💍</span>
                {t.aboutWedding.ceremony.title}
              </h3>
              <p
                className={`text-lg/snug ${getFontClass(
                  currentLanguage,
                  "font-lustria"
                )}`}
              >
                {t.aboutWedding.ceremony.description}
                <br />
                {t.aboutWedding.ceremony.rainPlan}
              </p>
            </div>
          </FadeInSection>

          {/* Dress Code */}
          <FadeInSection delay={0.5} direction="up">
            <div className="w-full mb-8 flex flex-col items-center text-center">
              <h3
                className={`flex font-black items-center mb-6 ${getFontClass(
                  currentLanguage,
                  "font-lustria"
                )}`}
              >
                <span className="mr-1">👗</span>
                {t.aboutWedding.dressCode.title}
              </h3>
              <p
                className={`text-lg/snug ${getFontClass(
                  currentLanguage,
                  "font-lustria"
                )}`}
              >
                {t.aboutWedding.dressCode.description}
              </p>
            </div>
          </FadeInSection>

          {/* The Reception */}
          <FadeInSection delay={0.6} direction="up">
            <div className="w-full mb-8 flex flex-col items-center text-center">
              <h3
                className={`font-black flex items-center mb-6 ${getFontClass(
                  currentLanguage,
                  "font-lustria"
                )}`}
              >
                <span className="mr-1">🍰</span>
                {t.aboutWedding.reception.title}
              </h3>
              <p
                className={`text-lg/snug ${getFontClass(
                  currentLanguage,
                  "font-lustria"
                )}`}
              >
                {t.aboutWedding.reception.description}
                <br /> <br />
                {t.aboutWedding.reception.activities}
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* RSVP Section */}
        <div className="w-full max-w-5xl mx-auto bg-zinc-50 px-8 py-12 flex flex-col items-center relative">
          {/* Envelope image at the top */}
          <FadeInSection direction="left" delay={0.1}>
            <div className="absolute top-3 left-24 transform -translate-x-1/2 z-10">
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
                <h2
                  className={`text-3xl font-black text-center px-4 py-2 ${getFontClass(
                    currentLanguage,
                    "font-lustria"
                  )}`}
                >
                  {t.rsvp.title}
                </h2>
              </div>

              <div className="text-center text-lg/snug space-y-8">
                <FadeInSection delay={0.4}>
                  <p className={getFontClass(currentLanguage, "font-lustria")}>
                    {t.rsvp.honorMessage}
                  </p>
                </FadeInSection>

                <FadeInSection delay={0.5}>
                  <p className={getFontClass(currentLanguage, "font-lustria")}>
                    {t.rsvp.seatingMessage}
                  </p>
                </FadeInSection>

                {/* RSVP Button */}
                <FadeInSection delay={0.6}>
                  <div className="flex justify-center mt-10">
                    <RSVPForm
                      translations={t.rsvp.form}
                      language={currentLanguage}
                    />
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
            <h2
              className={`text-3xl font-black text-center border border-blue-100 border-dashed px-8 py-2 ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.gettingThere.title}
            </h2>
          </div>

          {/* Venue information */}
          <div className="text-center mb-6">
            <h3
              className={`text-xl font-medium mb-2 ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.gettingThere.venueFullName}
            </h3>
            <p
              className={`text-gray-500! text-lg ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.gettingThere.address}
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
          <div className="mb-6 text-lg/snug">
            <h3
              className={`flex items-center text-lg font-black mb-2 ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              <span className="mr-2">🚌</span> {t.gettingThere.transport.title}
            </h3>
            <p
              className={`ml-2 mb-1 ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.gettingThere.transport.station}
            </p>
            <p
              className={`ml-2 ${getFontClass(
                currentLanguage,
                "font-lustria"
              )}`}
            >
              {t.gettingThere.transport.directions}
            </p>
          </div>

          {/* Parking */}
          <div className="mb-6 text-lg/snug">
            <ParkingModal t={t} language={currentLanguage} />
          </div>

          {/* Chariot image */}
          <div className="absolute -bottom-8 right-4">
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
            <div className=" px-6 py-3 ">
              <h2
                className={`text-3xl/relaxed font-medium text-center ${getFontClass(
                  currentLanguage,
                  "font-lustria"
                )}`}
              >
                {t.closing.withLove}
                <br />
                {t.closing.names}
              </h2>
            </div>

            {/* Monogram/signature */}
          </div>
          <div className=" px-6 py-3 mb-15">
            <Image
              src="/mj_logo.png"
              alt="Monogram"
              width={500}
              height={500}
              className="w-120 h-25"
            />
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
