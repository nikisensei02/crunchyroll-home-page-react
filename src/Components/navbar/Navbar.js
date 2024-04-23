import React, { useState } from 'react';
import Crunchyroll_Logo from './Crunchyroll_Logo.png'

export default function Navbar() {
  //browse menu
  const [showBrowse, hideBrowse] = useState(0);
  const [bgcolor,setbgcolor] = useState(0);

  const showBrowseMenu=()=>{
    hideBrowse(showBrowse=>!showBrowse);
    setbgcolor(bgcolor => !bgcolor);
  }
  let toggleBrowse = showBrowse?'flex':'hidden';
  let backcolor = bgcolor?'bg-[#141414]':'bg-[#23252b]';


  //News menu
  const [showNews, hideNews] = useState(0);
  const [bgNewsColor,setbgNewscolor] = useState(0);
  const showNewsMenu=()=>{
    hideNews(showNews=>!showNews);
    setbgNewscolor(bgNewsColor => !bgNewsColor);
  }
  let toggleNews = showNews?'flex':'hidden';
  let backnewscolor = bgNewsColor?'bg-[#141414]':'bg-[#23252b]';


  //small device


  //medium menu
  const [showMediumMenu, hideMediumMenu] = useState(0);
  const MediumMenu=()=>{
    hideMediumMenu(showMediumMenu=>!showMediumMenu);
  }
  let toggleMediumMenu = showMediumMenu?'flex':'hidden';
 



  //medium menu Genere
  const [showMedMenu, hideMedMenu] = useState(0);
  const [rotateArrow, setArrow] = useState(0);
  const showMed=()=>{
    hideMedMenu(showMedMenu=>!showMedMenu);
    setArrow(rotateArrow=>!rotateArrow);
  }
  let arrowRotate = rotateArrow?'rotate-180':'rotate-0';
  let toggleMedMenu = showMedMenu?'flex':'hidden';

  //medium menu news
  const [showMedMenuNews, hideMedMenuNews] = useState(0);
  const [rotateArrowNews, setArrowNews] = useState(0);
  const showMedNews=()=>{
    console.log("hello");
    hideMedMenuNews(showMedMenuNews=>!showMedMenuNews);
    setArrowNews(rotateArrowNews=>!rotateArrowNews);
  }
  let arrowRotateNews = rotateArrowNews?'rotate-180':'rotate-0';
  let toggleMedMenuNews = showMedMenuNews?'block':'hidden';


  return (
    <nav className=''>
      <div className="flex h-16 w-full bg-[#23252b] text-white fixed z-10">
        <ul className="flex w-full justify-between h-14">
          <li className='w-[60%]'>
            <ul className='flex h-16 '>
              <li className={`flex py-5 lg:mx-4 mx-2 lg:hidden`}>
              <span onClick={MediumMenu} className="material-symbols-outlined">menu</span>
              </li>
              <li className="flex mx-6 cursor-pointer py-4   lg:ml-[5rem]">
                <div className='h-8 w-8 py-1 hover:fill-white'>
                  <img  src={Crunchyroll_Logo} alt="Crunchyroll_Logo"/>
                </div>
                <span className='text-xl text-orange-500 hover:text-white  font-semibold hidden sm:block'>crunchyroll</span>
                </li>
              <li onClick={showBrowseMenu} className={`${backcolor} hidden sm:flex px-6 items-center hover:bg-[#141414] cursor-pointer`}>
                <span className=" hidden lg:block">Browse</span>
                <span className="material-symbols-outlined hidden lg:block">arrow_drop_down</span>
              </li>
              <li className="sm:flex items-center px-6   hover:bg-[#141414] cursor-pointer">
                <span className='hidden lg:block'>Games</span>
              </li>
              <li onClick={showNewsMenu} className={`${backnewscolor} hidden sm:flex items-center px-6  hover:bg-black cursor-pointer`}>
                <span className=" hidden lg:block">News</span>
                <span className="material-symbols-outlined hidden lg:block">arrow_drop_down</span>
              </li>
            </ul>
          </li>



          <li>
            <ul className='flex items-center px-2 lg:mx-12 h-16'>
              <li className='flex items-center px-4 cursor-pointer hover:bg-[#141414] h-16'>
                <div className=''>
                  <svg className="fill-[#fab818] w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-t="premium-filled-svg" aria-labelledby="premium-filled-svg" aria-hidden="true" role="img"><title id="premium-filled-svg">Premium</title><path d="M2.419 13L0 4.797 4.837 6.94 8 2l3.163 4.94L16 4.798 13.581 13z"></path></svg>
                </div>
                <div className='flex flex-col text-[0.65rem] font-semibold my-0'>
                  <span className="text-yellow-500 hidden sm:block">
                    TRY FREE
                  </span>
                  <span className="hidden sm:block">
                    PREMIUM
                  </span>
                </div>
              </li>
              <li className='flex items-center cursor-pointer hover:bg-black h-16'>
                <span className="material-symbols-outlined mx-4">search</span>
              </li>
              <li className='flex items-center cursor-pointer hover:bg-black h-16'>
                <span className="material-symbols-outlined mx-4 hidden sm:block">bookmark</span>
              </li>
              <li className='flex items-center cursor-pointer hover:bg-black h-16'>
                <span className="material-symbols-outlined mx-4">account_circle</span>
              </li>
            </ul>
          </li>
          
        </ul>
      </div>
      <div className={`${toggleBrowse} BrowseItems flex fixed z-10 bg-[#141414] text-white my-16 py-2 left-[14.8rem]`}>
        <div className="menu border-r-2 border-gray-800">
          <ul>
            <li className="py-[0.75rem] pl-4 pr-12 text-sm cursor-pointer hover:bg-[#23252b]"><span>Popular</span></li>
            <li className="py-[0.75rem] pl-4 pr-12 text-sm cursor-pointer hover:bg-[#23252b]"><span>New</span></li>
            <li className="py-[0.75rem] pl-4 pr-12 text-sm cursor-pointer hover:bg-[#23252b]"><span>Alphabetical</span></li>
            <li className="py-[0.75rem] pl-4 pr-12 text-sm cursor-pointer hover:bg-[#23252b]"><span>Simulcast Season</span></li>
            <li className="py-[0.75rem] pl-4 pr-12 text-sm cursor-pointer hover:bg-[#23252b]"><span>Release Calender</span></li>
            <li className="py-[0.75rem] pl-4 pr-12 text-sm cursor-pointer hover:bg-[#23252b]"><span>Music Videos & Concerts</span></li>
          </ul>
        </div>
        <div className="genres">
          <div className="text-sm text-gray-400 pl-4 pt-2">
            <span>GENRES</span>
          </div>
          <ul className="gridGenres grid grid-cols-3 list-none mt-[1rem]">
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Action</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Music</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Shonen</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Adventure</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Romance</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Slice of life</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Comedy</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Sci-Fi</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Sports</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Drama</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Seinen</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Supernatural</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Fantasy</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Shojo</span></li>
            <li className="pl-4 mr-4 pr-24 py-[0.75rem] text-sm cursor-pointer text-gray-200 hover:bg-[#23252b]"><span>Thriller</span></li>
          </ul>
        </div>
      </div>
      <div className={`${toggleNews} flex-col Newsbar fixed z-10 mt-16 ml-[28.5rem] bg-[#141414] text-gray-200`}>
        <ul className="my-2">
          <li className="pl-5 py-[0.75rem] pr-32 text-sm"><span>All News</span></li>
          <li className="pl-5 py-[0.75rem] pr-32 text-sm"><span>Anime Award</span></li>
          <li className="pl-5 py-[0.75rem] pr-32 text-sm"><span>Crunchyroll Expo</span></li>
          <li className="pl-5 py-[0.75rem] pr-32 text-sm"><span>Anime Movie Night</span></li>
        </ul>
      </div>


      <div className={`${toggleMediumMenu} flex-col mediumNavbar fixed mt-16 bg-[#141414] text-white  sm:w-[18rem] w-full`}>
        <ul>
          <li>
            <div className="pt-2 pl-4 text-gray-500">
              <span>Browse</span>
            </div>
            <ul className="border-b-2 border-gray-800">
              <li className="py-4 pl-4 cursor-pointer hover:bg-gray-900"><span>Popular</span></li>
              <li className="py-4 pl-4 cursor-pointer hover:bg-gray-900"><span>New</span></li>
              <li className="py-4 pl-4 cursor-pointer hover:bg-gray-900"><span>Alphabetical</span></li>
              <li className="py-4 pl-4 cursor-pointer hover:bg-gray-900"><span>Simulcast Season</span></li>
              <li className="py-4 pl-4 cursor-pointer hover:bg-gray-900"><span>Release Calender</span></li>
              <li className="py-4 pl-4 cursor-pointer hover:bg-gray-900"><span>Music Videos & Concerts</span></li>
              <li onClick={showMed} className="py-4 pl-4 cursor-pointer flex justify-between pr-4">
                <span className=''>Genres</span>
                <span className={`${arrowRotate} material-symbols-outlined`}>expand_more</span>
              </li>
              <li className={`${toggleMedMenu} bg-[#23252b]` }>
                <ul className="bg-[#23252b]">
                  <li className="pl-8 py-4 cursor-pointer "><span>Action</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Music</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Shonen</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Adventure</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Romance</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Slice of life</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Comedy</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Sci-Fi</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Sports</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Drama</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Seinen</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Supernatural</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Fantasy</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Shojo</span></li>
                  <li className="pl-8 py-4 cursor-pointer "><span>Thriller</span></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="py-2 ">
            <div className="py-4 pl-4">
              <span>Games</span>
            </div>
            <div onClick={showMedNews} className="py-4 flex justify-between pr-4 pl-4">
              <span>News</span>
              <span className={`${arrowRotateNews} material-symbols-outlined`}>expand_more</span>
            </div>
            <ul className={`${toggleMedMenuNews} bg-[#23252b]`}>
              <li className="pl-8 py-4 cursor-pointer"><span>All News</span></li>
              <li className="pl-8 py-4 cursor-pointer"><span>Anime Award</span></li>
              <li className="pl-8 py-4 cursor-pointer"><span>Crunchyroll Expo</span></li>
              <li className="pl-8 py-4 cursor-pointer"><span>Anime Movie Night</span></li>
            </ul>
          </li>
        </ul>
      </div>

    </nav>
  )
}
