import Navigation from "../Navigation";
import { Main,H1, Panel } from "govuk-react";

function RegistrationComplete(){
    return(
        <div>
            <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>
            <Main>
                <Panel title="Registration Complete">
        <div>
        Your reference number<br/><strong>HDJ2123F</strong>
        </div>
        </Panel>
        </Main>
        </div>
    )
}

export default RegistrationComplete;