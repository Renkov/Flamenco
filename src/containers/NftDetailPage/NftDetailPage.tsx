import React, { FC } from "react";
import Avatar from "shared/Avatar/Avatar";
import Badge from "shared/Badge/Badge";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import NcImage from "shared/NcImage/NcImage";
import LikeSaveBtns from "./LikeSaveBtns";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import VerifyIcon from "components/VerifyIcon";
import { nftsLargeImgs, personNames } from "contains/fakeData";
import TimeCountDown from "./TimeCountDown";
import TabDetail from "./TabDetail";
import collectionPng from "images/nfts/collection.png";
import ItemTypeVideoIcon from "components/ItemTypeVideoIcon";
import LikeButton from "components/LikeButton";
import AccordionInfo from "./AccordionInfo";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";

export interface NftDetailPageProps {
  className?: string;
  isPreviewMode?: boolean;
}

const NftDetailPage: FC<NftDetailPageProps> = ({
  className = "",
  isPreviewMode,
}) => {
  const renderSection1 = () => {
    return (
      <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
        {/* ---------- 1 ----------  */}
        <div className="pb-9 space-y-5">
          <div className="flex justify-between items-center">
            <Badge name="Virtual Worlds" color="green" />
            <LikeSaveBtns />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Formentera #3636
          </h2>

          {/* ---------- 4 ----------  */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="flex items-center ">
              <Avatar
              imgUrl="https://s3-alpha-sig.figma.com/img/d075/2a37/a482da893f13dce46a1b6e1fded79ca0?Expires=1658102400&Signature=YS9XCLHnHFFt8Vxwb8s~pj4WlEX9ekEAEuWxWXALM8hKwo6WR0WIdqzR4rZa8YJPBEB8TEt45w1cxsmOZfeIq6G2iQvKFZHMya3EX0NY6vQ8FHx1kokDulpmCQpKqqHfNfP~6V1Ltxlan1ja~-WLM~WnnFr51fLTeVIjLyuNiPxfDif8m2Fh~1iQn5-OGX3V6XWh~zuikw4i3RdsbcxTCPWBdDGsVITFjo1w5ELXpyG5lywg~0~hZ7YG-Mese7sZbN101fUY8HF0cQ32~Nbwd7uAs5Lmm1lOyb8rLSAvK1PBiblVKHKW75BBAZanF4WltLFNQkH60DMEoYJfj8R6qA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              sizeClass="h-9 w-9" radius="rounded-full" />
              <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                <span className="text-sm">Creator</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                  {/* <span>{personNames[1]}</span> */}
                  <span>{"Velas"}</span>
                  <VerifyIcon iconClass="w-4 h-4" />
                </span>
              </span>
            </div>
            <div className="hidden sm:block h-6 border-l border-neutral-200 dark:border-neutral-700"></div>
            <div className="flex items-center">
              <Avatar
                imgUrl="https://s3-alpha-sig.figma.com/img/d075/2a37/a482da893f13dce46a1b6e1fded79ca0?Expires=1658102400&Signature=YS9XCLHnHFFt8Vxwb8s~pj4WlEX9ekEAEuWxWXALM8hKwo6WR0WIdqzR4rZa8YJPBEB8TEt45w1cxsmOZfeIq6G2iQvKFZHMya3EX0NY6vQ8FHx1kokDulpmCQpKqqHfNfP~6V1Ltxlan1ja~-WLM~WnnFr51fLTeVIjLyuNiPxfDif8m2Fh~1iQn5-OGX3V6XWh~zuikw4i3RdsbcxTCPWBdDGsVITFjo1w5ELXpyG5lywg~0~hZ7YG-Mese7sZbN101fUY8HF0cQ32~Nbwd7uAs5Lmm1lOyb8rLSAvK1PBiblVKHKW75BBAZanF4WltLFNQkH60DMEoYJfj8R6qA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                
                
                sizeClass="h-9 w-9"
                radius="rounded-full"
              />
              <span className="ml-2.5 text-neutral-500 dark:text-neutral-400 flex flex-col">
                <span className="text-sm">Owned</span>
                <span className="text-neutral-900 dark:text-neutral-200 font-medium flex items-center">
                  <span>{"Velas Smart City"}</span>
                  <VerifyIcon iconClass="w-4 h-4" />
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* ---------- 6 ----------  */}
        <div className="py-9">
          <TimeCountDown />
        </div>

        {/* ---------- 7 ----------  */}
        {/* PRICE */}
        <div className="pb-9 pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1 flex flex-col sm:flex-row items-baseline p-6 border-2 border-green-500 rounded-xl relative">
              <span className="absolute bottom-full translate-y-1 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400">
                Price
              </span>
              <span className="text-3xl xl:text-4xl font-semibold text-green-500">
                3.750.000 VLX
              </span>
              <span className="text-lg text-neutral-400 sm:ml-5">
                ( ≈ $150,000)
              </span>
            </div>

            <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-5 mt-2 sm:mt-0 sm:ml-10">
              [10 in stock]
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <ButtonPrimary href={"/connect-wallet"} className="flex-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 12H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-2.5">Place a bid</span>
            </ButtonPrimary>
            <ButtonSecondary href={"/connect-wallet"} className="flex-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.57007 15.27L15.11 8.72998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.98001 10.3699C9.65932 10.3699 10.21 9.81923 10.21 9.13992C10.21 8.46061 9.65932 7.90991 8.98001 7.90991C8.3007 7.90991 7.75 8.46061 7.75 9.13992C7.75 9.81923 8.3007 10.3699 8.98001 10.3699Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.52 16.0899C16.1993 16.0899 16.75 15.5392 16.75 14.8599C16.75 14.1806 16.1993 13.6299 15.52 13.6299C14.8407 13.6299 14.29 14.1806 14.29 14.8599C14.29 15.5392 14.8407 16.0899 15.52 16.0899Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-2.5"> Make offer</span>
            </ButtonSecondary>
          </div>
        </div>

        {/* ---------- 9 ----------  */}
        <div className="pt-9">
          <TabDetail />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-NftDetailPage  ${className}`}
      data-nc-id="NftDetailPage"
    >
      {/* MAIn */}
      <main className="container mt-11 flex ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {/* CONTENT */}
          <div className="space-y-8 lg:space-y-10">
            {/* HEADING */}
            <div className="relative">
              <NcImage
                // src={nftsLargeImgs[0]}
                src=" https://i.ibb.co/VJgDj1m/c3ef40d71b08fc867fcca11d6c3ae6c2.jpg"
                containerClassName="aspect-w-11 aspect-h-12 rounded-3xl overflow-hidden"
              />
              {/* META TYPE */}
              <ItemTypeVideoIcon className="absolute left-3 top-3  w-8 h-8 md:w-10 md:h-10" />

              {/* META FAVORITES */}
              <LikeButton className="absolute right-3 top-3 " />
            </div>

            <AccordionInfo />
          </div>

          {/* SIDEBAR */}
          <div className="pt-10 lg:pt-0 xl:pl-10 border-t-2 border-neutral-200 dark:border-neutral-700 lg:border-t-0">
            {renderSection1()}
          </div>
        </div>
      </main>

      {/* OTHER SECTION
      {!isPreviewMode && (
        <div className="container py-24 lg:py-32">
          SECTION 1
          <div className="relative py-24 lg:py-28">
            <BackgroundSection />
            <SectionSliderCategories />
          </div>

          SECTION
          <SectionBecomeAnAuthor className="pt-24 lg:pt-32" />
        </div>
      )} */}
    </div>
  );
};

export default NftDetailPage;
