/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Main, Heading, SectionBreak, Breadcrumbs, Paragraph, MultiChoice, Radio } from "govuk-react";


function NameChangeDetails(){

    return (
        <div>
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