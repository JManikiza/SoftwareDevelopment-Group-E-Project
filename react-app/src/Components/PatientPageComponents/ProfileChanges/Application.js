import { Main,Pagination, Panel } from "govuk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../Navigation";
function Application(){

    const navigate = useNavigate();

    useEffect(() => {
    const title = 'Application';
    document.title = title;
  })

    return (

        <div>
                                    <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

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