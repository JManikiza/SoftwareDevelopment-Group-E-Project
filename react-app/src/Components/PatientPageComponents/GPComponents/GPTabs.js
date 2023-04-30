import { Tabs,Table,H2 } from 'govuk-react';
import { useState } from 'react';
import BookTab from './BookAppointment/BookTab';
import DRTab from './De-Register/DRTab';
import DoctorTab from './DoctorsAvailable/DoctorTab';
import ViewTab from './ViewAppointment/ViewTab';

function GPTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <Tabs>
        <Tabs.Title>Contents</Tabs.Title>
        <Tabs.List>
          <Tabs.Tab
            selected={selectedTab === 0}
            onClick={() => handleTabChange(0)}
          >
            Doctors at GP
          </Tabs.Tab>
          <Tabs.Tab
            selected={selectedTab === 1}
            onClick={() => handleTabChange(1)}
          >
            Book Appointment
          </Tabs.Tab>
          <Tabs.Tab
            selected={selectedTab === 2}
            onClick={() => handleTabChange(2)}
          >
            View/Cancel Appointment
          </Tabs.Tab>
          <Tabs.Tab
            selected={selectedTab === 3}
            onClick={() => handleTabChange(3)}
          >
            De-Register
          </Tabs.Tab>
        </Tabs.List>

        <div hidden={selectedTab !== 0}>
          <DoctorTab />
        </div>

        <div hidden={selectedTab !== 1}>
          <BookTab />
        </div>

        <div hidden={selectedTab !== 2}>
          <ViewTab />
        </div>

        <div hidden={selectedTab !== 3}>
          <DRTab />
        </div>
      </Tabs>

    </div>
    
    
    );
}

export default GPTabs;