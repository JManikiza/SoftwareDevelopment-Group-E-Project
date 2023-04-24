/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Main, Heading, SectionBreak, Breadcrumbs,
     Paragraph, MultiChoice, Radio, Button } from "govuk-react";
import { useNavigate } from "react-router-dom";


function NumberChangeDetails(){

    const navigate = useNavigate();

    return (
        <div>
            <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link>Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link>Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link>Start</Breadcrumbs.Link>
                </Breadcrumbs>
                
                <Heading>About you</Heading>

                <Paragraph>NHS number: (Props NHS number here)</Paragraph>
                <Paragraph>First name: (Props First name here)</Paragraph>
                <Paragraph>Last name: (Props Last name here)</Paragraph>

                <Paragraph>Current number: (Props number)</Paragraph>


                <Button onClick={() => navigate("/NumberChangeEnter")}>
                    Continue
                </Button>

                 <SectionBreak level="SMALL" visible={false}/>
                
                <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
                    Cancel
                </Button>                


            </Main>
        </div>
    );

}

export default NumberChangeDetails;