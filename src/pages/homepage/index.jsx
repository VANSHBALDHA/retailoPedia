import MainLayoutFooter from "../../components/layout/MainLayoutFooter";
import MainLayoutHeader from "../../components/layout/MainLayoutHeader";
import EmpoweringJourneySection from "./pageModules/EmpoweringJourneySection";
import HeroSection from "./pageModules/HeroSection";
import SectionTemplate from "./pageModules/SectionTemplate";
import styles from './pageModules/SharedSectionStyles.module.css';
import WhoIsRetailopediaFor from "./pageModules/WhoIsRetailopediaFor";


const HomePage = ()=>{

    const industryInsights = {
        content:[{
            title : "Explore Industry Insights", 
            description:"Uncover the latest trends and transformative ideas with AI-powered articles. Experts collaborate to share actionable knowledge in these categories",
        }],
        tags:["People", "Companies", "Retailers", "Retail Enablers", "Shopping Centers", "Consultants"]
    };

    const peopleConst = {
        content:[{
            title : "People", 
            description:"Showcasing, documenting and immortalizing the journeys, achievements, philosophies and legacies of retail leaders and professionals to inspire and empower future generations.",
        }],
        tags:["Retail Icons", "CEOs", "Women Leaders", "CIOs"],
    };

    const compsBrands = {
        content:[
            {
                title : "Companies", 
                description:"Explore the essence of retail powerhouses—diversified retail companies shaping industries through their vast portfolios, visionary leadership, scale and global reach.",
            },
            {
                title : "Brands", 
                description:"Explore the world of retail brands—tracing their origins, growth and influence. From strategies to global footprints and campaigns, uncover what defines their journey and enduring impact.",
            }
        ],
        tags:["Food", "Fashion", "Health", "Beauty", "Entertainment", "Others"],
    };


    const retailEnabler = {
        content:[{
            title : "Retail Enablers", 
            description:"Discover the definitive directory of retail enablers—showcasing their innovations and solutions driving the industry forward, from technology and design to logistics, marketing and beyond.",
        }],
        tags:["Tech Enablers", "Retail Tech Solutions", " Payment Solutions Providers", "Data Analytics and AI Providers", "Customer Experience (CX) Solutions Providers", "Retail Security and Loss Prevention Providers", "Other Retail Enablers", "Retail Real Estate Retail", "Design and Store Fixture Manufacturers", "Sustainable Packaging Suppliers", "Supply Chain and Logistics Providers", "FMCG Manufacturers", "Marketing and Advertising Agencies", "Sustainable Solution Providers"],
    };

    const shoppingCenters = {
        content:[{
            title : "Shopping Centers", 
            description:"Explore the ultimate directory of shopping centers—capturing their scale, categories and global presence, offering insights into the spaces where retail comes to life.",
        }],
        tags:["Super-Regional Mall", "Regional Mall", " Community Center", "Neighborhood Center", "Strip/Convenience", "Power Center", "LIfestyle", "Factory Outlet"],
    };

    const consultantsArr = {
        content:[{
            title : "Consultants", 
            description:"Discover and connect with the leading industry consultants—experts in their fields, showcasing their specializations, experience, project roles, geographic reach, and the impact they’ve made through client success stories.",
        }],
        tags:["Industry", "Areas of Specialization", "Experience", "Project Roles", "Geographic Reach", "Client Testimonials"],
    };


    return (
        <>
        <MainLayoutHeader />
        <HeroSection />

        <SectionTemplate
            content={industryInsights.content}
            tags={industryInsights.tags}
            backgroundStyle={styles.defaultBackground}
            tagColumns={3}
        />

        <SectionTemplate
            content={peopleConst.content}
            tags={peopleConst.tags}
            backgroundStyle={styles.lightBackground}
            tagColumns={2}
        />


        <SectionTemplate
            content={compsBrands.content}
            tags={compsBrands.tags}
            backgroundStyle={styles.defaultBackground}
            tagColumns={3}
        />

        <SectionTemplate
            content={retailEnabler.content}
            tags={retailEnabler.tags}
            backgroundStyle={styles.lightBackground}
            tagColumns={2}
        />

        <SectionTemplate
            content={shoppingCenters.content}
            tags={shoppingCenters.tags}
            backgroundStyle={styles.defaultBackground}
            tagColumns={3}
        />

        <SectionTemplate
            content={consultantsArr.content}
            tags={consultantsArr.tags}
            backgroundStyle={styles.lightBackground}
            tagColumns={3}
        />

        <WhoIsRetailopediaFor />
        <EmpoweringJourneySection />

        <MainLayoutFooter />
        </>

    );
}
export default HomePage;