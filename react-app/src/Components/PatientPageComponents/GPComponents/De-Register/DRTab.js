
import { H2, Button, Radio, MultiChoice } from "govuk-react";
import { useNavigate } from "react-router-dom";
function DRTab(){

  const navigate = useNavigate();
  
    return(

    <div>
          <br/>
    <H2>
      De-Register from GP
    </H2>

    <br/>

    <MultiChoice label="Are you sure you would like to leave our GP?">
      <br/>
      <Radio inline name="leave">Yes</Radio>
      <Radio inline name="leave" selected>No</Radio>
    </MultiChoice>
    <br/>
    <Button onClick={() => navigate("/DRConfirm")} >Confirm</Button>
  </div>
    
    
    )};

export default DRTab;