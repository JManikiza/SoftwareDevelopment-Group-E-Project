
import { H2, Button, Radio, MultiChoice } from "govuk-react";
function DRTab(){

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
    <Button>Confirm</Button>
  </div>
    
    
    )};

export default DRTab;