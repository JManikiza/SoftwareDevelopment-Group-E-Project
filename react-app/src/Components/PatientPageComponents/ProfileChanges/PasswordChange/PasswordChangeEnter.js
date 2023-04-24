
import React from "react";
import { InputField, Link } from "govuk-react";

function PasswordChangeEnter(){
    
    return(
        <div>
            <Main>

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
                
                <InputField
                    hint="Keep it secret. Keep it safe. We recommend using three random words, some digits and special characters.<br>Example - Cushion1Statue!Mirror4"
                    input={{
                        autoComplete: 'new password',
                        name: 'password',
                        type: 'password'
                    }}
                >
                    New password
                </InputField>

              <Link onClick={() => navigate("/ForgottenPassword")} children="Forgotten My Password!"/>

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