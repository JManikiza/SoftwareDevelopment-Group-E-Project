/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useState } from 'react';
import { Button, H2, MultiChoice, Radio } from 'govuk-react';
import $ from 'jquery';

function DRTab() {
  const [confirm, setConfirm] = useState(true);
  const nhs_number = localStorage.getItem('nhsNo');

  const handleConfirmClick = () => {
    if (confirm) {
      if (window.confirm("Once you confirm, it cannot be undone and you will have to register again. Are you truly sure you would like to de-register from our GP?")) {
        if (window.confirm("'Understand this... things are in motion now, that cannot be undone.' -- Mithrandir, The Grey Pilgrim")) {
          console.log(`cancelling appointment nhs_number=${nhs_number}`);

          $.ajax({
            url: 'http://localhost:4000/GPS_De-Reg.php',
            method: 'POST',
            data: {
              nhs_number: nhs_number
            },
            success: function (data) {
              console.log(data);
              window.location.href = "/";
            },
            error: function (xhr, status, error) {
              console.log(error);
            }
          });
        }
      } else {
        window.location.href = "/";
      }
    } else {
      window.location.reload();
    }
  };

  return (
    <div>
      <br />
      <H2>
        De-Register from GP
      </H2>
      <br />
      <MultiChoice label="Are you sure you would like to leave our GP?">
        <br />
        <Radio inline name="leave" checked={!confirm} onChange={() => setConfirm(false)}>No</Radio>
        <Radio inline name="leave" checked={confirm} onChange={() => setConfirm(true)}>Yes</Radio>
      </MultiChoice>
      <br />
      <Button onClick={handleConfirmClick}>Confirm</Button>
    </div>
  );
}

export default DRTab;
