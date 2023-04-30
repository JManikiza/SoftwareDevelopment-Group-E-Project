/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Main, Heading, Breadcrumbs, Paragraph, MultiChoice, Radio } from "govuk-react";
import Navigation from "../../../Navigation";

function NameChangeDetails(){

    return (
        <div>
            <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link>Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link>Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link>Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link>Circumstances</Breadcrumbs.Link>
                </Breadcrumbs>
                
                <Heading>About you</Heading>

                <Paragraph>NHS number: (Props NHS number here)</Paragraph>
                <Paragraph>First name: (Props First name here)</Paragraph>
                <Paragraph>Last name: (Props Last name here)</Paragraph>
                <Paragraph>Date of birth: (Props DOB here)</Paragraph>



                <MultiChoice label="What name(s) would you like to change?">
                    <Radio inline name="name">First</Radio>
                    <Radio inline name="name">Last</Radio>
                    <Radio inline name="name">Both</Radio>
                </MultiChoice>




            </Main>
        </div>
    );

}

export default NameChangeDetails;