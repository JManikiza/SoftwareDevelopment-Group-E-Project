/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Heading, Main,
        SectionBreak, Pagination} from 'govuk-react';
import Navigation from '../../Components/Navigation';
import { useNavigate } from "react-router-dom";
import GPTabs from '../../Components/PatientPageComponents/GPComponents/GPTabs';
import { Routes, Route } from "react-router-dom";
import DRTab from '../../Components/PatientPageComponents/GPComponents/De-Register/DRTab';
import BookTab from '../../Components/PatientPageComponents/GPComponents/BookAppointment/BookTab';
import ViewTab from '../../Components/PatientPageComponents/GPComponents/ViewAppointment/ViewTab';
import DoctorTab from '../../Components/PatientPageComponents/GPComponents/DoctorsAvailable/DoctorTab';


function GPServices() {

  const navigate = useNavigate();

  return (
    <div>

      <Routes>
        <Route path="/Doctors-available" element={<DoctorTab />} />
        <Route path="/BookTab" element={<BookTab />} />
        <Route path="/View-or-cancel-appointments" element={<ViewTab />} />
        <Route path="/De-register" element={<DRTab />} />
      </Routes>

<Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>


      <Main>
 
        <Pagination>
            <Pagination.Anchor onClick={() => navigate("/Patient")} previousPage>
                Back to start
            </Pagination.Anchor>
            <Pagination.Anchor onClick={() => navigate("/Profile")} nextPage>
                Profile
            </Pagination.Anchor>
        </Pagination>

        <Heading>GP Services</Heading>

        <SectionBreak level="SMALL" visible={false}/>

      <GPTabs />

      </Main>

    </div>
  );
}

export default GPServices;