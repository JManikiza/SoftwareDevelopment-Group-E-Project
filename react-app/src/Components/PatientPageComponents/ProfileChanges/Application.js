import { Main } from "govuk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Application(){

    const navigate = useNavigate();

    return (

        <div>
            <Main>

                <Panel title="Application Confirmation">
                  <p>No. (number ++)</p>
                </Panel>

            </Main>
        </div>

    );
    
}

export default Application;