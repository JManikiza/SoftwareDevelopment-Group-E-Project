/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Checkbox, Heading, Main, Button, SectionBreak, Breadcrumbs } from "govuk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
function NameChangeCircumstances(){

    const navigate = useNavigate();
   
    return(
        <div>
            <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link>Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link>Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link>Start</Breadcrumbs.Link>
                </Breadcrumbs>

                <Heading>Change of circumstances</Heading>

                <Heading size="SMALL">Types of change you wish to notify</Heading>

                <Checkbox>Change of name</Checkbox>
                <Checkbox>Change of marital or civil partnership status</Checkbox>
                <Checkbox>Change of title</Checkbox>

                <Button onClick={() => navigate("/NameChangeDetails")}>
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

export default NameChangeCircumstances;