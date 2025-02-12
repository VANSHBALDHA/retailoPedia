import styles from "./styles.module.css";
import searchIcon from "../../assets/images/Search.svg";
import profileImage from "../../assets/images/profileImage.png";
import instagram from "../../assets/images/Instagram.png";
import linkedin from "../../assets/images/LinkedIn.png";
import facebook from "../../assets/images/Facebook.png";
import downArrow from "../../assets/images/downArrow.svg";
import upArrow from "../../assets/images/upArrow.svg";
import { Link } from "react-router-dom";
import Footer from "./pageModules/Footer";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import photoGallery1 from "../../assets/images/photoGallery1.png";
import photoGallery2 from "../../assets/images/photoGallery2.png";
import photoGallery3 from "../../assets/images/photoGallery3.png";
import photoGallery4 from "../../assets/images/photoGallery4.png";
import photoGallery5 from "../../assets/images/photoGallery5.png";
import photoGallery6 from "../../assets/images/photoGallery6.png";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import articleImage from "../../assets/images/ArticleImg.png";
import gulfNews from "../../assets/images/gulfNews.png";
import leftArrow from "../../assets/images/leftArrow.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import Header from "./pageModules/Header";
import { useQuery } from "@tanstack/react-query";

import profileIcon from "../../assets/images/profileMenu1.svg";
import profileIcon1 from "../../assets/images/profileImageName2.svg";
import profileIcon2 from "../../assets/images/profileImageName3.svg";
import profileIcon3 from "../../assets/images/profileImageName4.svg";
import profileIcon4 from "../../assets/images/profileImageName5.svg";
import profileIcon5 from "../../assets/images/profileImageName6.svg";
import profileIcon6 from "../../assets/images/profileImageName7.svg";
import profileIcon7 from "../../assets/images/profileImageName8.svg";
import profileIcon8 from "../../assets/images/profileImageName2.svg";
import profileIcon9 from "../../assets/images/profileImageName2.svg";

import profileServices from "../../services/Profile";

const imagePathURL = process.env.REACT_APP_IMAGE;

const profileMenu = [
  {
    id: "profile",
    name: "PROFILE",
    image: profileIcon,
  },
  {
    id: "early-life",
    name: "EARLY LIFE",
    image: profileIcon9,
  },
  {
    id: "career",
    name: "CAREER",
    image: profileIcon9,
  },
  {
    id: "achievement-recognitions",
    name: "ACHIEVEMENT & RECOGNITIONS",
    image: profileIcon2,
  },
  {
    id: "philosophy",
    name: "PHILOSOPHY",
    image: profileIcon3,
  },
  {
    id: "future-plans",
    name: "FUTURE PLANS",
    image: profileIcon4,
  },
  {
    id: "videos",
    name: "VIDEOS",
    image: profileIcon5,
  },
  {
    id: "articles",
    name: "ARTICLES",
    image: profileIcon6,
  },
  {
    id: "social-media",
    name: "SOCIAL MEDIA",
    image: profileIcon7,
  },
];

const ProfilePage = () => {
  const videoSec = useRef(null);
  const articleSec = useRef(null);
  const [activeLink, setActiveLink] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [checkedYears, setCheckedYears] = useState([]);
  const [openSections, setOpenSections] = useState({
    earlyLife: true,
    career: true,
    major: true,
    future: true,
  });

  const handleToggle = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (year) => {
    setCheckedYears((prevCheckedYears) => {
      if (prevCheckedYears.includes(year)) {
        return prevCheckedYears.filter((checkedYear) => checkedYear !== year);
      } else {
        return [...prevCheckedYears, year];
      }
    });
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["profileData"],
    queryFn: () =>
      profileServices.profileData({
        peopleId: "18",
      }),
    keepPreviousData: true,
    onError: (err) => {
      console.log("Error fetching profileData:", err);
    },
  });

  const relatedCompanyList = data?.relatedCompanies || [];
  const similarProfileList = data?.similarProfile || [];
  const peopleDataList = data?.peopleData || [];

  if (isLoading && !data?.length)
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );

  return (
    <>
      <Header />

      <div className={styles.profileSection}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className={styles.profileLeft}>
                <img
                  src={profileImage}
                  alt=""
                  className={styles.profileImagePhoto}
                />
                <div className={styles.profileMenu}>
                  {profileMenu?.map((item, index) => (
                    <div
                      key={item.id}
                      className={`${styles.profileMenuName} ${
                        activeLink === item.id ? styles.active : ""
                      }`}
                      onClick={() => setActiveLink(item.id)}
                    >
                      <a
                        href={`#${item?.id}`}
                        className={`${
                          activeLink === item.id ? styles.active : ""
                        }`}
                      >
                        <img
                          src={item?.image}
                          alt={item?.name}
                          className={styles.profileIcons}
                        />
                        <h4>{item?.name}</h4>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              {/* PROFILEINFO */}
              <div className={styles.profileInfo} id="profile">
                <h1>{peopleDataList?.name}</h1>
                <div className={styles.companyName}>
                  <div>
                    <span>CEO & Founding Director</span>
                    <h3>Splash</h3>
                  </div>
                </div>
                <div className={styles.directorName}>
                  <span>Director</span>
                  <h3>Centrepoint</h3>
                  <h3>Landmark Group</h3>
                </div>
                <div className={styles.companyLocation}>
                  <div className={styles.location}>
                    <h4>LOCATION: DUBAI, UAE</h4>
                  </div>
                  <div className={styles.location}>
                    <h4>YEARS ACTIVE 1992 - PRESENT</h4>
                  </div>
                </div>
                <div className={styles.profileContent}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: peopleDataList?.about,
                    }}
                  />
                </div>
              </div>

              {/* TIMELINE*/}
              <div className={styles.profileInfo}>
                <h5>TIMELINE</h5>
                <div className={styles.profileContent}>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className={styles.timeline}>
                        {peopleDataList?.timeLine?.map((year) => (
                          <div className={styles.csmCheckbox} key={year?.year}>
                            <input
                              type="checkbox"
                              id={year?.year}
                              checked={checkedYears.includes(year?.year)}
                              onChange={() => handleCheckboxChange(year?.year)}
                            />
                            <label htmlFor={year?.year}>{year?.year}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-12">
                      <div className={styles.yearWiseContent}>
                        {peopleDataList?.timeLine?.map((data) => {
                          return (
                            <>
                              <div className={styles.timeLineContent}>
                                <h3>{data?.year}</h3>
                                <span>{data?.description}</span>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EARLY LIFE*/}
              <div className={styles.profileInfo} id="early-life">
                <div
                  className={styles.toggleImg}
                  onClick={() => handleToggle("earlyLife")}
                >
                  <h5>EARLY LIFE</h5>
                  <img
                    src={openSections.earlyLife ? upArrow : downArrow}
                    alt="up-arrow"
                  />
                </div>
                {openSections.earlyLife && (
                  <>
                    <div className={styles.profileContent}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: peopleDataList?.earlyLife,
                        }}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* CAREER*/}
              <div className={styles.profileInfo} id="career">
                <div
                  className={styles.toggleImg}
                  onClick={() => handleToggle("career")}
                >
                  <h5>CAREER</h5>
                  <img
                    src={openSections.career ? upArrow : downArrow}
                    alt="up-arrow"
                  />
                </div>
                {openSections.career && (
                  <>
                    <div className={styles.profileContent}>
                      <p>
                        Raza Classes (1986-1992): While in college, Raza founded
                        'Raza Classes,' a tutorial service catering to students
                        who were rejected by other institutions. He employed his
                        friends as teachers, emphasizing preparation and
                        dedication. He managed this venture for seven years
                        before passing it on to his fellow educators. 
                      </p>
                      <p>
                        Garment Manufacturing Investment (1989-1992): Raza
                        invested in a friend's shirt manufacturing factory,
                        laying the foundation for his understanding of fashion
                        and garment quality. 
                      </p>
                      <p>
                        Cable Business Acquisition (1990-1992): He acquired a
                        struggling cable business in Bandra, Mumbai, for Rs 3.5
                        lakh. Through direct engagement with customers and
                        effective management, he revitalized the business,
                        emphasizing the importance of content, marketing, and
                        relationship-building. 
                      </p>
                      <p>
                        Joining Splash (1993-Present): In 1992, after the Mumbai
                        riots, Raza sought new opportunities and responded to an
                        advertisement for a fashion buyer position at
                        Mothercare, part of the Landmark Group. Without a formal
                        resume, he penned a letter and was subsequently hired as
                        a store manager. Within two months, he became the first
                        fashion buyer for Splash, a nascent brand at the time.
                        Over the years, he ascended through various roles,
                        including General Manager and Managing Director, before
                        being appointed CEO in 2006. 
                      </p>
                      <p>
                        Expansion and Leadership: Under Raza's leadership,
                        Splash expanded from a single store in Sharjah in 1993
                        to 200 stores and 55 brand stores across 13 countries.
                        He also played a pivotal role in establishing Lifestyle,
                        the department chain in India, in 1998. Additionally, he
                        oversees ICONIC, a youth fashion destination with 34
                        stores across KSA, UAE, Kuwait, and Qatar. 
                      </p>
                      <p>
                        Fashion and Retail Expertise: Raza's hands-on experience
                        in various facets of retail—from buying to visual
                        merchandising, budgeting, and operations—has equipped
                        him with a comprehensive understanding of the industry.
                        He remains actively involved in the creation of Splash’s
                        seasonal collections, traveling with design and buying
                        teams to major international fashion shows to stay
                        abreast of global trends. 
                      </p>
                      <p>
                        Sustainability Initiatives: Raza has been instrumental
                        in steering Splash towards sustainable fashion. The
                        brand has adopted a 360-degree approach to
                        sustainability, focusing on eco-friendly fabrics,
                        recycling initiatives, and reducing plastic waste.
                        Splash is the largest user of recycled polyester in the
                        region, recycling 28 million bottles annually. 
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* MAJOR ACHIEVEMENTS AND RECOGNITIONS*/}
              <div className={styles.profileInfo} id="achievement-recognitions">
                <div
                  className={styles.toggleImg}
                  onClick={() => handleToggle("major")}
                >
                  <h5>MAJOR ACHIEVEMENTS AND RECOGNITIONS</h5>
                  <img
                    src={openSections.major ? upArrow : downArrow}
                    alt="up-arrow"
                  />
                </div>
                {openSections.major && (
                  <>
                    <div className={styles.profileContent}>
                      <div className="row">
                        <div className={styles.award}>
                          <div className={styles.awardText}>
                            <h5>European CEO Awards 2017</h5>
                            <span>
                              Best CEO in the Fashion Retailing Industry.
                              Recognized for his exceptional leadership in
                              fashion retail.
                            </span>
                          </div>
                          <div className={styles.news}>
                            <h6>Arab News</h6>
                          </div>
                        </div>
                        <div className={styles.award}>
                          <div className={styles.awardText}>
                            <h5>IMAGES RetailME Awards</h5>
                            <span>
                              Under his leadership, Splash has received the
                              coveted IMAGES RetailME Awards also known as the
                              #OscarsOfRetail multiple times over the years,
                              highlighting the brand' s prominence in the fast
                              fashion sector. 
                            </span>
                          </div>
                          <div className={styles.news}>
                            <h6>Milestone</h6>
                            <h6>Magazine Images</h6>
                            <h6>Retail ME</h6>
                          </div>
                        </div>
                        <div className={styles.award}>
                          <div className={styles.awardText}>
                            <h5>European CEO Awards 2017</h5>
                            <span>
                              Best CEO in the Fashion Retailing Industry.
                              Recognized for his exceptional leadership in
                              fashion retail.
                            </span>
                          </div>
                          <div className={styles.news}>
                            <h6>Arab News</h6>
                          </div>
                        </div>
                        <div className={styles.award}>
                          <div className={styles.awardText}>
                            <h5>IMAGES RetailME Awards</h5>
                            <span>
                              Under his leadership, Splash has received the
                              coveted IMAGES RetailME Awards also known as the
                              #OscarsOfRetail multiple times over the years,
                              highlighting the brand' s prominence in the fast
                              fashion sector. 
                            </span>
                          </div>
                          <div className={styles.news}>
                            <div className={styles.news}>
                              <h6>Milestone</h6>
                              <h6>Magazine Images</h6>
                              <h6>Retail ME</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* FUTURE PLANS */}
              <div className={styles.profileInfo} id="future-plans">
                <div
                  className={styles.toggleImg}
                  onClick={() => handleToggle("future")}
                >
                  <h5>FUTURE PLANS </h5>
                  <img
                    src={openSections.future ? upArrow : downArrow}
                    alt="up-arrow"
                  />
                </div>

                {openSections.future && (
                  <>
                    <div className={styles.profileContent}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: peopleDataList?.futureOutlook,
                        }}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* PHOTO GALLERY */}
              <div className={styles.profileInfo}>
                <h5>PHOTO GALLERY</h5>
                <div className={styles.profileContent}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className={styles.galleryGrid}>
                        {[
                          photoGallery1,
                          photoGallery2,
                          photoGallery3,
                          photoGallery4,
                          photoGallery5,
                          photoGallery6,
                        ].map((src, index) => (
                          <img
                            key={index}
                            src={src}
                            alt={`photo-gallery-${index + 1}`}
                            className={styles.galleryImage}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* VIDEOS */}
              <div className={styles.profileInfo} id="videos">
                <h5>VIDEOS</h5>
                <div
                  className={`${styles.profileContent} ${styles.articleSection}`}
                >
                  <div>
                    <img
                      src={leftArrow}
                      alt="left-arrow"
                      className={`${styles.arrowImg} ${styles.left}`}
                      onClick={() => videoSec?.current?.slidePrev()}
                    />
                    <img
                      src={rightArrow}
                      alt="right-arrow"
                      className={`${styles.arrowImg} ${styles.right}`}
                      onClick={() => videoSec?.current?.slideNext()}
                    />
                  </div>
                  <Swiper
                    modules={[Autoplay]}
                    onSwiper={(swiper) => (videoSec.current = swiper)}
                    breakpoints={{
                      0: { slidesPerView: 1, spaceBetween: 20 },
                      768: { slidesPerView: 1, spaceBetween: 40 },
                      1199: { slidesPerView: 2, spaceBetween: 40 },
                    }}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{
                      clickable: true,
                      el: ".swiper-pagination",
                    }}
                  >
                    {peopleDataList?.videoLinks?.map((data, index) => (
                      <SwiperSlide key={index}>
                        <div className={styles.videoSlider}>
                          <div className={styles.videoWrapper}>
                            <iframe
                              width="280"
                              height="200"
                              src={`https://www.youtube.com/embed/${
                                data.split("v=")[1]
                              }`}
                              title="YouTube video"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <h4>Raza Beig on importance of leadership</h4>
                          <span>Lorem Ipsum dolor mit</span>
                          <p>Source: Lorem Ipsum dolor mit</p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* ARTICLES */}
              <div className={styles.profileInfo} id="articles">
                <h5>ARTICLES</h5>
                <div
                  className={`${styles.profileContent} ${styles.articleSection}`}
                >
                  <div>
                    <img
                      src={leftArrow}
                      alt="left-arrow"
                      className={`${styles.arrowImg} ${styles.left}`}
                      onClick={() => articleSec?.current?.slidePrev()}
                    />
                    <img
                      src={rightArrow}
                      alt="right-arrow"
                      className={`${styles.arrowImg} ${styles.right}`}
                      onClick={() => articleSec?.current?.slideNext()}
                    />
                  </div>
                  <Swiper
                    modules={[Autoplay]}
                    breakpoints={{
                      0: { slidesPerView: 1, spaceBetween: 20 },
                      768: { slidesPerView: 1, spaceBetween: 40 },
                      1199: { slidesPerView: 2, spaceBetween: 40 },
                    }}
                    loop={true}
                    onSwiper={(swiper) => (articleSec.current = swiper)}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      el: ".swiper-pagination",
                    }}
                  >
                    {Array(4)
                      .fill()
                      .map((_, index) => (
                        <SwiperSlide key={index} className={styles.swiperImg}>
                          <div className={styles.articleBox}>
                            <img
                              src={articleImage}
                              alt="currency"
                              className="w-100"
                            />
                            <div className={styles.articleSlider}>
                              <h4>
                                Raza Beig: Making a splash in sustainable
                                fashion
                              </h4>
                              <img src={gulfNews} alt="gulf-news" />
                            </div>
                            <span>
                              Raza Beig, CEO of Splash, tells more of the
                              company’s award-winning sustainability programmes.
                              From a single store in Sharjah that opened in 1993
                              to more than 200 now spread across the GCC ...
                            </span>
                            <p>November 1, 2020 </p>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div className={styles.profileInfo} id="social-media">
                <h5>SOCIAL MEDIA</h5>
                <div className={styles.socialIcon}>
                  <Link to="#">
                    <img src={linkedin} alt="linkedin" />
                  </Link>
                  <Link to="#">
                    <img src={instagram} alt="instagram" />
                  </Link>
                  <Link to="#">
                    <img src={facebook} alt="facebook" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12">
              <div className={styles.profileCompany}>
                {/* RELATED COMPANIES */}
                <div className={styles.companyBox}>
                  <div className={styles.relatedCompany}>
                    <h3>RELATED COMPANIES</h3>
                  </div>
                  {relatedCompanyList?.map((logo, index) => (
                    <div className={styles.companyLogos}>
                      <img
                        key={index}
                        src={`${imagePathURL + logo?.companyImage}`}
                        alt={`Company logo ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>

                {/* SIMILAR PROFILES */}
                <div className={styles.similarProfile}>
                  <div className={styles.relatedCompany}>
                    <h3>SIMILAR PROFILES</h3>
                  </div>
                  <div>
                    {similarProfileList
                      .slice(0, showMore ? similarProfileList.length : 5)
                      .map((profile, index) => (
                        <div key={index} className={styles.companyNames}>
                          <div className={styles.companyRow}>
                            <h3>{profile.name}</h3>
                            <span>{profile.designation}</span>
                            <h4>{profile.company}</h4>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div
                    className={styles.seeMore}
                    onClick={() => setShowMore(!showMore)}
                  >
                    <h3>{showMore ? "See Less" : "See More"}</h3>
                    <img
                      src={showMore ? upArrow : downArrow}
                      alt="toggle-arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ProfilePage;
