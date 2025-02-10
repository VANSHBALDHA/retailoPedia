import styles from "./styles.module.css";
import searchIcon from "../../assets/images/Search.svg";
import profileImage from "../../assets/images/profileImage.png";
import companyLogo1 from "../../assets/images/companyLogo1.png";
import companyLogo2 from "../../assets/images/companyLogo2.png";
import companyLogo3 from "../../assets/images/companyLogo3.png";
import instagram from "../../assets/images/Instagram.png";
import linkedin from "../../assets/images/LinkedIn.png";
import facebook from "../../assets/images/Facebook.png";
import downArrow from "../../assets/images/downArrow.png";
import upArrow from "../../assets/images/upArrow.png";
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
import leftArrow from "../../assets/images/leftArrow.png";
import rightArrow from "../../assets/images/rightArrow.png";
import Header from "./pageModules/Header";

const ProfilePage = () => {
  const videoSec = useRef(null);
  const articleSec = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
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

  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.searchContainer}>
          {!searchTerm && <img src={searchIcon} alt="search-icon" />}
          <input
            type="text"
            className={styles.searchBox}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search with name/company/area/position"
          />
        </div>
      </div>

      <div className={styles.profileSection}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className={styles.profileLeft}>
                <img src={profileImage} alt="" className="w-100" />
                <div className={styles.profileMenu}>
                  <div className={styles.profileMenuName}>
                    <Link to="/profile">
                      <h4>PROFILE</h4>
                    </Link>
                  </div>
                  <div className={styles.profileMenuName}>
                    <Link to="/profile">
                      <h4>EARLY LIFE</h4>
                    </Link>
                  </div>
                  <div className={styles.profileMenuName}>
                    <Link to="/profile">
                      <h4>CAREER</h4>
                    </Link>
                  </div>
                  <div className={styles.profileMenuName}>
                    <Link to="/profile">
                      <h4>ACHIEVEMENT & RECOGNITIONS</h4>
                    </Link>
                  </div>
                  <div className={styles.profileMenuName}>
                    <Link to="/profile">
                      <h4>PHILOSOPHY</h4>
                    </Link>
                  </div>
                  <div className={styles.profileMenuName}>
                    <Link to="/profile">
                      <h4>FUTURE PLANS</h4>
                    </Link>
                  </div>
                  <div className={styles.profileMenuName}>
                    <Link to="/profile">
                      <h4>VIDEOS</h4>
                    </Link>
                  </div>
                  <div className={styles.profileMenuName}>
                    <Link to="/profile">
                      <h4>ARTICLES</h4>
                    </Link>
                  </div>
                  <div className={styles.profileMenuName}>
                    <Link to="/profile">
                      <h4>SOCIAL MEDIA</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className={styles.profileInfo}>
                <h1>RAZA BEIG</h1>
                <div className={styles.companyName}>
                  <div>
                    <span>CEO & Founding Director</span>
                    <h3>Splash</h3>
                  </div>
                  <div>
                    <span>Director</span>
                    <h3>Landmark Group</h3>
                  </div>
                </div>
                <div className={styles.directorName}>
                  <span>Director</span>
                  <h3>Centrepoint</h3>
                </div>
                <div className={styles.companyLocation}>
                  <div className={styles.location}>
                    <h4>LOCATION:</h4>
                    <span>Dubai, UAE</span>
                  </div>
                  <div className={styles.location}>
                    <h4>YEARS ACTIVE:</h4>
                    <span>1992 - Present</span>
                  </div>
                </div>
                <div className={styles.profileContent}>
                  <p>
                    Raza Beig is the CEO of Splash and ICONIC, leading fashion
                    brands under the Landmark Group. He has been instrumental in
                    expanding Splash to over 200 stores across 13 countries.
                  </p>
                  <p>
                    When Splash was launched in 1993, Raza Beig was involved in
                    almost every aspect of the business from buying to visual
                    merchandising, budgeting and retail operations. Over the
                    past three decades, Beig’s strong dedication and passion
                    guided Splash to become a category leader and a core brand
                    within the Landmark Group’s portfolio.
                  </p>
                  <p>
                    Since the inception of Splash, Beig has been actively
                    involved with the overall business development and retail
                    buying for the brand. In 1998, he helped set up Lifestyle, a
                    department chain in India.
                  </p>
                  <p>
                    Sometime in early 2000, he was appointed Managing Director
                    of Splash and was invited to be part of the Board of
                    Directors of Landmark Group. Eventually, in 2006 he was
                    appointed the CEO of Splash.
                  </p>
                  <p>
                    Along with Splash, Beig heads ICONIC. Launched in February
                    2010, it is one of the fastest growing brands of Landmark
                    Group with over 38 stores in 5 countries, UAE, KSA, Kuwait,
                    Qatar and Oman.
                  </p>
                  <p>
                    Recently, Baig co-founded Artfi, a platform integrating art
                    and blockchain technology, aiming to democratize art
                    ownership.
                  </p>
                </div>
              </div>

              {/* TIMELINE*/}
              <div className={styles.profileInfo}>
                <h5>TIMELINE</h5>
                <div className={styles.profileContent}>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className={styles.timeline}>
                        {[
                          "1966",
                          "1979",
                          "1986 - 1992",
                          "1989 - 1992",
                          "1990 - 1992",
                          "1992",
                          "1993",
                          "1998",
                          "Early 2000s",
                          "2006",
                          "2010",
                          "2017",
                          "2019-2020",
                          "2020",
                          "2024",
                        ].map((year) => (
                          <div className={styles.csmCheckbox} key={year}>
                            <input
                              type="checkbox"
                              id={year}
                              checked={checkedYears.includes(year)}
                              onChange={() => handleCheckboxChange(year)}
                            />
                            <label htmlFor={year}>{year}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-12">
                      <div className={styles.yearWiseContent}>
                        <div className={styles.timeLineContent}>
                          <h3>1966</h3>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                          </span>
                        </div>
                        <div className={styles.timeLineContent}>
                          <h3>1979</h3>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </span>
                        </div>
                        <div className={styles.timeLineContent}>
                          <h3>1986-1992</h3>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </span>
                        </div>
                        <div className={styles.timeLineContent}>
                          <h3>1966</h3>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                          </span>
                        </div>
                        <div className={styles.timeLineContent}>
                          <h3>1979</h3>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </span>
                        </div>
                        <div className={styles.timeLineContent}>
                          <h3>1986-1992</h3>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </span>
                        </div>
                        <div className={styles.timeLineContent}>
                          <h3>1966</h3>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                          </span>
                        </div>
                        <div className={styles.timeLineContent}>
                          <h3>1979</h3>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </span>
                        </div>
                        <div className={styles.timeLineContent}>
                          <h3>1986-1992</h3>
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EARLY LIFE*/}
              <div className={styles.profileInfo}>
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
                      <p>
                        Raza Beig, born in Mumbai, India, began his
                        entrepreneurial journey at the age of 13 by tutoring his
                        laundryman's son in exchange for laundry services. 
                      </p>
                      <p>
                        During his college years, he founded 'Raza Classes,' a
                        tutorial service for students rejected by other
                        institutions, and managed it for seven years. 
                      </p>
                      <p>
                        He also invested in a friend's shirt manufacturing
                        factory, laying the foundation for his understanding of
                        fashion and garment quality. Additionally, he acquired a
                        struggling cable business in Bandra, Mumbai, for Rs 3.5
                        lakh, revitalizing it through direct engagement with
                        customers and effective management.
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* career*/}
              <div className={styles.profileInfo}>
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
              <div className={styles.profileInfo}>
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
              <div className={styles.profileInfo}>
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
                    </div>
                  </>
                )}
              </div>

              {/* photo gallery */}
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

              {/* videos */}
              <div className={styles.profileInfo}>
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
                    {Array(4)
                      .fill()
                      .map((_, index) => (
                        <SwiperSlide key={index}>
                          <div className={styles.videoSlider}>
                            <img
                              src={articleImage}
                              alt="currency"
                              className="w-100"
                            />
                            <h4>Raza Beig on importance of leadership</h4>
                            <span>Lorem Ipsum dolor mit</span>
                            <p>Source: Lorem Ipsum dolor mit</p>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>

              {/* articles */}
              <div className={styles.profileInfo}>
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
                      delay: 4000000,
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

              {/* social media */}
              <div className={styles.profileInfo}>
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

            {/* RELATED COMPANIES */}
            <div className="col-lg-3 col-md-12 col-12">
              <div className={styles.profileCompany}>
                <div>
                  <div className={styles.relatedCompany}>
                    <h3>RELATED COMPANIES</h3>
                  </div>
                  <div className={styles.companyLogos}>
                    <img src={companyLogo1} alt="" />
                  </div>
                  <div className={styles.companyLogos}>
                    <img src={companyLogo2} alt="" />
                  </div>
                  <div className={styles.companyLogos}>
                    <img src={companyLogo3} alt="" />
                  </div>
                </div>
                <div className={styles.similarProfile}>
                  <div className={styles.relatedCompany}>
                    <h3>SIMILAR PROFILES</h3>
                  </div>
                  <div className={styles.companyNames}>
                    <div className={styles.companyRow}>
                      <h3>MARK TESSEYMAN</h3>
                      <span>CEO</span>
                      <h4>Liwa Trading Enterprises LLC</h4>
                    </div>
                  </div>
                  <div className={styles.companyNames}>
                    <div className={styles.companyRow}>
                      <h3>MARK TESSEYMAN</h3>
                      <span>CEO</span>
                      <h4>Liwa Trading Enterprises LLC</h4>
                    </div>
                  </div>
                  <div className={styles.companyNames}>
                    <div className={styles.companyRow}>
                      <h3>MARK TESSEYMAN</h3>
                      <span>CEO</span>
                      <h4>Liwa Trading Enterprises LLC</h4>
                    </div>
                  </div>
                  <div className={styles.companyNames}>
                    <div className={styles.companyRow}>
                      <h3>MARK TESSEYMAN</h3>
                      <span>CEO</span>
                      <h4>Liwa Trading Enterprises LLC</h4>
                    </div>
                  </div>
                  <div className={styles.companyNames}>
                    <div className={styles.companyRow}>
                      <h3>MARK TESSEYMAN</h3>
                      <span>CEO</span>
                      <h4>Liwa Trading Enterprises LLC</h4>
                    </div>
                  </div>
                  <div className={styles.companyNames}>
                    <div className={styles.companyRow}>
                      <h3>MARK TESSEYMAN</h3>
                      <span>CEO</span>
                      <h4>Liwa Trading Enterprises LLC</h4>
                    </div>
                  </div>
                  <div className={styles.companyNames}>
                    <div className={styles.companyRow}>
                      <h3>MARK TESSEYMAN</h3>
                      <span>CEO</span>
                      <h4>Liwa Trading Enterprises LLC</h4>
                    </div>
                  </div>
                  <div className={styles.companyNames}>
                    <div className={styles.companyRow}>
                      <h3>MARK TESSEYMAN</h3>
                      <span>CEO</span>
                      <h4>Liwa Trading Enterprises LLC</h4>
                    </div>
                  </div>
                  <div className={styles.seeMore}>
                    <h3>See More</h3>
                    <img src={downArrow} alt="arrow-down" />
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
