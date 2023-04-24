import { Main,Pagination, Panel } from "govuk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Application(){

    const navigate = useNavigate();

    return (

        <div>
            <Main>

                <Pagination>

                    <Pagination.Anchor onClick={() => navigate("/Patient")} previousPage>
                        Profile
                    </Pagination.Anchor>

                    <Pagination.Anchor onClick={() => navigate("/GPServices")} nextPage>
                        GP Services
                    </Pagination.Anchor>

                </Pagination>

                <Panel title="Application Confirmation">
                  <p>No. (number ++)</p>
                </Panel>

            </Main>
        </div>

    );
    
}

export default Application;