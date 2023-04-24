/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import {Link, Heading, Main, 
        SectionBreak, Pagination} from 'govuk-react';
import Navigation from '../../Components/Navigation';
import { useNavigate } from "react-router-dom";


function GPServices() {

  const navigate = useNavigate();

  return (
    <div>

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

 

      </Main>

    </div>
  );
}

export default GPServices;