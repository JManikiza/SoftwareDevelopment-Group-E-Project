/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Main, Heading, SectionBreak, Breadcrumbs } from "govuk-react";


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

                <span>National Health Services number: </span>
                <span>(props NHS number here)</span>

                <SectionBreak size="XL"></SectionBreak>
                <span>dggd</span>
            </Main>
        </div>
    );

}

export default NameChangeDetails;