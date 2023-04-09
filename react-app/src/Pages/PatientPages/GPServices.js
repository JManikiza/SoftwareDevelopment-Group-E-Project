import {Table, Link, Heading, Main, 
        SectionBreak, Pagination} from 'govuk-react';

import { useNavigate } from "react-router-dom";


function GPServices() {

  const navigate = useNavigate();

  return (
    <div>



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