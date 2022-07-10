import React, { FC } from "react";
import { Link } from "react-router-dom";
import NextPrev from "shared/NextPrev/NextPrev";
import NcImage from "shared/NcImage/NcImage";
import Avatar from "shared/Avatar/Avatar";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import LikeButton from "components/LikeButton";
import ItemTypeVideoIcon from "components/ItemTypeVideoIcon";
import { nftsLargeImgs } from "contains/fakeData";
import TimeCountDown from "./TimeCountDown";
import collectionPng from "images/nfts/collection.png";
import VerifyIcon from "components/VerifyIcon";

export interface CardLarge1Props {
  className?: string;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  isShowing?: boolean;
  featuredImgUrl?: string;
}

const CardLarge1: FC<CardLarge1Props> = ({
  className = "",
  isShowing = true,
  onClickNext = () => {},
  onClickPrev = () => {},
  featuredImgUrl = nftsLargeImgs[0],
}) => {
  const randomTitle = [
    "Marbella House ",
   
  ];
  return (
    <div
      className={`nc-CardLarge1 nc-CardLarge1--hasAnimation relative flex flex-col-reverse lg:flex-row justify-end  ${className}`}
    >
      <div className="lg:absolute z-10 lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 -mt-2 lg:mt-0 sm:px-5 lg:px-0 w-full lg:max-w-lg ">
        <div className="nc-CardLarge1__left p-4 sm:p-8 xl:py-14 md:px-10 bg-white dark:bg-neutral-900 shadow-lg rounded-3xl space-y-3 sm:space-y-8 ">
          {/* TITLE */}
          <h2 className="text-2xl lg:text-3xl 2xl:text-5xl font-semibold ">
            <Link to={"/nft-detailt"} title="Walking On Air">
              {randomTitle[Math.floor(Math.random() * randomTitle.length)]}
            </Link>
          </h2>

          {/* AUTHOR AND COLLECTION */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-12">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <Avatar sizeClass="w-10 h-10"  imgUrl="https://s3-alpha-sig.figma.com/img/d075/2a37/a482da893f13dce46a1b6e1fded79ca0?Expires=1658102400&Signature=YS9XCLHnHFFt8Vxwb8s~pj4WlEX9ekEAEuWxWXALM8hKwo6WR0WIdqzR4rZa8YJPBEB8TEt45w1cxsmOZfeIq6G2iQvKFZHMya3EX0NY6vQ8FHx1kokDulpmCQpKqqHfNfP~6V1Ltxlan1ja~-WLM~WnnFr51fLTeVIjLyuNiPxfDif8m2Fh~1iQn5-OGX3V6XWh~zuikw4i3RdsbcxTCPWBdDGsVITFjo1w5ELXpyG5lywg~0~hZ7YG-Mese7sZbN101fUY8HF0cQ32~Nbwd7uAs5Lmm1lOyb8rLSAvK1PBiblVKHKW75BBAZanF4WltLFNQkH60DMEoYJfj8R6qA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
              </div>
              <div className="ml-3">
                <div className="text-xs dark:text-neutral-400">Creator</div>
                <div className="text-sm font-semibold flex items-center">
                  <span>Velas</span>
                  <VerifyIcon />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
               <Avatar sizeClass="w-10 h-10" imgUrl="https://s3-alpha-sig.figma.com/img/d075/2a37/a482da893f13dce46a1b6e1fded79ca0?Expires=1658102400&Signature=YS9XCLHnHFFt8Vxwb8s~pj4WlEX9ekEAEuWxWXALM8hKwo6WR0WIdqzR4rZa8YJPBEB8TEt45w1cxsmOZfeIq6G2iQvKFZHMya3EX0NY6vQ8FHx1kokDulpmCQpKqqHfNfP~6V1Ltxlan1ja~-WLM~WnnFr51fLTeVIjLyuNiPxfDif8m2Fh~1iQn5-OGX3V6XWh~zuikw4i3RdsbcxTCPWBdDGsVITFjo1w5ELXpyG5lywg~0~hZ7YG-Mese7sZbN101fUY8HF0cQ32~Nbwd7uAs5Lmm1lOyb8rLSAvK1PBiblVKHKW75BBAZanF4WltLFNQkH60DMEoYJfj8R6qA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" /> 
              </div>
              <div className="ml-3">
                <div className="text-xs dark:text-neutral-400">Collection</div>
                <div className="text-sm font-semibold ">Velas Smart City</div>
              </div>
            </div>
          </div>

          {/* PRICE */}
          <div className="pt-6">
            <div className="flex flex-col sm:flex-row items-baseline p-6 border-2 border-green-500 rounded-xl relative">
              <span className="block absolute bottom-full translate-y-1.5 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400 ring ring-offset-0 ring-white dark:ring-neutral-900">
                Current Bid
              </span>
              <span className="text-3xl xl:text-4xl font-semibold text-green-500">
                3.470.000 VLX
              </span>
              {/* <span className="text-lg text-neutral-400 sm:ml-3.5">
                (≈ $3,,254,221.22)
              </span> */}
            </div>
          </div>

          {/* AUTION TIME */}
          <TimeCountDown />

          <div className="w h-[1px] bg-neutral-100 dark:bg-neutral-700"></div>

          {/* DESCRIPTION */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <ButtonPrimary href={"/nft-detailt"} className="flex-1">
              Place a bid
            </ButtonPrimary>
            <ButtonSecondary href={"/nft-detailt"} className="flex-1">
              View item
            </ButtonSecondary>
          </div>
        </div>
        <div className="p-4 sm:pt-8 sm:px-10 ">
          <NextPrev
            btnClassName="w-11 h-11 text-xl"
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
          />
        </div>
      </div>

      <div className="w-full lg:w-[64%] relative ">
        <div className="nc-CardLarge1__right ">
          <Link to={"/nft-detailt"}>
            <NcImage
              containerClassName="aspect-w-1 aspect-h-1 relative"
              className="absolute inset-0 object-cover rounded-3xl sm:rounded-[40px] border-4 sm:border-[14px] border-white dark:border-neutral-800"
              // src={featuredImgUrl}
              src=" https://i.ibb.co/4dn3Fx3/e01f2812cb65c4b5627872252909bbab.jpg"
              alt={"title"}
            />
          </Link>

          {/* META TYPE */}
          <ItemTypeVideoIcon className="absolute w-8 h-8 md:w-10 md:h-10 left-3 bottom-3 sm:left-7 sm:bottom-7 " />

          {/* META FAVORITES */}
          <LikeButton className="absolute right-3 top-3 sm:right-7 sm:top-7" />
        </div>
      </div>
    </div>
  );
};

export default CardLarge1;
