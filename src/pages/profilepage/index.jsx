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
import { Link } from "react-router-dom";
import Footer from "./pageModules/Footer";

const ProfilePage = () => {
  return (
    <>
      <div className="container">
        <div className={styles.searchContainer}>
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            className={styles.searchBox}
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
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>1966</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>1979</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>1986 - 1992</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>1989 - 1992</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>1990 - 1992</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>1992</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>1993</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>1998</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>Early 2000s</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>2006</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>2010</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>2017</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>2019-2020</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>2020</span>
                        </div>
                        <div className={styles.timelineYear}>
                          <input type="checkbox" />
                          <span>2024</span>
                        </div>
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
                <h5>EARLY LIFE</h5>
                <div className={styles.profileContent}>
                  <p>
                    Raza Beig, born in Mumbai, India, began his entrepreneurial
                    journey at the age of 13 by tutoring his laundryman's son in
                    exchange for laundry services. 
                  </p>
                  <p>
                    During his college years, he founded 'Raza Classes,' a
                    tutorial service for students rejected by other
                    institutions, and managed it for seven years. 
                  </p>
                  <p>
                    He also invested in a friend's shirt manufacturing factory,
                    laying the foundation for his understanding of fashion and
                    garment quality. Additionally, he acquired a struggling
                    cable business in Bandra, Mumbai, for Rs 3.5 lakh,
                    revitalizing it through direct engagement with customers and
                    effective management.
                  </p>
                </div>
              </div>

              {/* career*/}
              <div className={styles.profileInfo}>
                <h5>CAREER</h5>
                <div className={styles.profileContent}>
                  <p>
                    Raza Classes (1986-1992): While in college, Raza founded
                    'Raza Classes,' a tutorial service catering to students who
                    were rejected by other institutions. He employed his friends
                    as teachers, emphasizing preparation and dedication. He
                    managed this venture for seven years before passing it on to
                    his fellow educators. 
                  </p>
                  <p>
                    Garment Manufacturing Investment (1989-1992): Raza invested
                    in a friend's shirt manufacturing factory, laying the
                    foundation for his understanding of fashion and garment
                    quality. 
                  </p>
                  <p>
                    Cable Business Acquisition (1990-1992): He acquired a
                    struggling cable business in Bandra, Mumbai, for Rs 3.5
                    lakh. Through direct engagement with customers and effective
                    management, he revitalized the business, emphasizing the
                    importance of content, marketing, and
                    relationship-building. 
                  </p>
                  <p>
                    Joining Splash (1993-Present): In 1992, after the Mumbai
                    riots, Raza sought new opportunities and responded to an
                    advertisement for a fashion buyer position at Mothercare,
                    part of the Landmark Group. Without a formal resume, he
                    penned a letter and was subsequently hired as a store
                    manager. Within two months, he became the first fashion
                    buyer for Splash, a nascent brand at the time. Over the
                    years, he ascended through various roles, including General
                    Manager and Managing Director, before being appointed CEO in
                    2006. 
                  </p>
                  <p>
                    Expansion and Leadership: Under Raza's leadership, Splash
                    expanded from a single store in Sharjah in 1993 to 200
                    stores and 55 brand stores across 13 countries. He also
                    played a pivotal role in establishing Lifestyle, the
                    department chain in India, in 1998. Additionally, he
                    oversees ICONIC, a youth fashion destination with 34 stores
                    across KSA, UAE, Kuwait, and Qatar. 
                  </p>
                  <p>
                    Fashion and Retail Expertise: Raza's hands-on experience in
                    various facets of retail—from buying to visual
                    merchandising, budgeting, and operations—has equipped him
                    with a comprehensive understanding of the industry. He
                    remains actively involved in the creation of Splash’s
                    seasonal collections, traveling with design and buying teams
                    to major international fashion shows to stay abreast of
                    global trends. 
                  </p>
                  <p>
                    Sustainability Initiatives: Raza has been instrumental in
                    steering Splash towards sustainable fashion. The brand has
                    adopted a 360-degree approach to sustainability, focusing on
                    eco-friendly fabrics, recycling initiatives, and reducing
                    plastic waste. Splash is the largest user of recycled
                    polyester in the region, recycling 28 million bottles
                    annually. 
                  </p>
                </div>
              </div>

              {/* FUTURE PLANS */}
              <div className={styles.profileInfo}>
                <h5>FUTURE PLANS </h5>
                <div className={styles.profileContent}>
                  <p>
                    Raza Classes (1986-1992): While in college, Raza founded
                    'Raza Classes,' a tutorial service catering to students who
                    were rejected by other institutions. He employed his friends
                    as teachers, emphasizing preparation and dedication. He
                    managed this venture for seven years before passing it on to
                    his fellow educators. 
                  </p>
                  <p>
                    Garment Manufacturing Investment (1989-1992): Raza invested
                    in a friend's shirt manufacturing factory, laying the
                    foundation for his understanding of fashion and garment
                    quality. 
                  </p>
                </div>
              </div>

              {/* VIDEOS */}
              <div className={styles.profileInfo}>
                <h5>VIDEOS</h5>
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
