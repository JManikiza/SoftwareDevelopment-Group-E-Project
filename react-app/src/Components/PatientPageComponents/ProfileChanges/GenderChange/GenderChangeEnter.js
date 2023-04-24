
import React from "react";
import { MultiChoice } from "govuk-react";

function GenderChangeEnter(){
    
    return(
        <div>
            <Main>
                
                <MultiChoice label="What is your gender?">
                    <Radio inline name="gender">Male</Radio>
                    <Radio inline name="gender">Female</Radio>
                </MultiChoice>

                <Button onClick={() => navigate("/GenderChangeConfirmation")}>
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

export default GenderChangeEnter;