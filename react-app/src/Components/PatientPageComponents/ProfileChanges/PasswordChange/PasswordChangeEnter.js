/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useEffect } from "react";
import { InputField, Link, Main, Button, SectionBreak, InsetText, Breadcrumbs} from "govuk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
import Logout from "../../../LoginComponents/Logout";


function PasswordChangeEnter(){

    const navigate = useNavigate();
    
    useEffect(() => {
    const title = 'Password Change';
    document.title = title;
  })
    
    return(
        <div>
      <Navigation pageLink1="/" PageName1="Home"/><Logout />

            <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link href="/Patient">Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/Profile">Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/PasswordChangeStart">Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/PasswordChangeDetails">Details</Breadcrumbs.Link>
                </Breadcrumbs>

<InsetText>THE PASSWORD CHANGE SECTION IS NOT FINISHED BUT THIS IS A PLACEHOLDER</InsetText>
                <InputField
                    hint="If you have forgotten your password, please use 'Forgotten my password' at the bottom"
                    input={{
                        autoComplete: 'previous password',
                        name: 'password',
                        type: 'password'
                    }}
                >
                    Previous password
                </InputField>

                <SectionBreak level="SMALL" visible={false}/>

                
                <InputField
                    hint="Keep it secret. Keep it safe. We recommend using three random words, some digits and special characters. Example - Cushion1Statue!Mirror4"
                    input={{
                        autoComplete: 'new password',
                        name: 'password',
                        type: 'password'
                    }}
                >
                    New password
                </InputField>

              <Link onClick={() => navigate("/ForgottenPassword")} children="Forgotten My Password!"/>

                 <SectionBreak level="SMALL" visible={false}/>

                
                <Button onClick={() => navigate("/PasswordChangeConfirmation")}>
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

export default PasswordChangeEnter;