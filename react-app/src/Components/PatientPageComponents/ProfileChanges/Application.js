/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Main,Pagination, Panel } from "govuk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../../LoginComponents/Logout";
import Navigation from "../../Navigation";

function Application(){

    const navigate = useNavigate();

    useEffect(() => {
    const title = 'Application';
    document.title = title;
  })

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let randomizer = '';
for (let i = 0; i < 15; i++) {
  randomizer += characters.charAt(Math.floor(Math.random() * characters.length));
}
randomizer = randomizer.toUpperCase();

    return (

        <div>
      <Navigation pageLink1="/" PageName1="Home"/><Logout />

            <Main>

                <Pagination>

                    <Pagination.Anchor onClick={() => navigate("/Profile")} previousPage>
                        Profile
                    </Pagination.Anchor>

                    <Pagination.Anchor onClick={() => navigate("/GPServices")} nextPage>
                        GP Services
                    </Pagination.Anchor>

                </Pagination>

                <Panel title="Application Confirmation">
                  <p>No. {randomizer}</p>
                </Panel>

            </Main>
        </div>

    );
    
}

export default Application;