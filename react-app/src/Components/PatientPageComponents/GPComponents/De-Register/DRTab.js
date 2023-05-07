import { H2, Button, Radio, MultiChoice } from "govuk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DRTab(){

  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);

  const handleConfirmClick = () => {
    if(confirm) {
      if(window.confirm("Once you confirm, it cannot be undone and you will have to register again. Are you truly sure you would like to de-register from our GP?")) {
        if(window.confirm("'Understand this... things are in motion now, that cannot be undone.' - Gandalf")) {
          // Execute the de-registration logic
          fetch('http://localhost:4000/GPS_De-Reg.php', { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              // If the response is successful, navigate to the success page
              navigate("/");
            })
            .catch(error => console.error(error));
        }
      }
    } else {
      window.location.reload();
    }
  };
  
  return (
    <div>
      <br/>
      <H2>
        De-Register from GP
      </H2>
      <br/>
      <MultiChoice label="Are you sure you would like to leave our GP?">
        <br/>
        <Radio inline name="leave" checked={!confirm} onChange={() => setConfirm(false)}>No</Radio>
        <Radio inline name="leave" checked={confirm} onChange={() => setConfirm(true)}>Yes</Radio>
      </MultiChoice>
      <br/>
      <Button onClick={handleConfirmClick}>Confirm</Button>
    </div>
  );
}

export default DRTab;
