import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PackageCard from './Packages/PackageCard';
import { Link } from 'react-router-dom';
import Overview from './Overview';
import MeetGuides from './MeetGuides';


const TnTGuideSection = ({ packages }) => {
    return (
        <div className='flex justify-center items-center mt-6'>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <Overview/>
                </TabPanel>
                <TabPanel>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            {
                                packages?.map(pack => <PackageCard
                                    key={pack._id}
                                    pack={pack}
                                ></PackageCard>)
                            }
                        </div>
                        <div className='flex justify-center items-center'>
                            <Link to='/allPackages' className='btn bg-green-500 text-red-600 text-xl font-bold'>See All Packages</Link>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <MeetGuides/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TnTGuideSection;