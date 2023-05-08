import React, { useState, useEffect } from 'react';
import { Button, H2, MultiChoice, Radio } from 'govuk-react';
import $ from 'jquery';

function DRTab() {
  const [confirm, setConfirm] = useState(true);
  const [nhsNumber, setNhsNumber] = useState('');

  useEffect(() => {
    setNhsNumber(localStorage.getItem('nhsNo'));
  }, []);

  const handleConfirmClick = () => {
    if (confirm) {
      if (window.confirm("Once you confirm, it cannot be undone and you will have to register again. Are you truly sure you would like to de-register from our GP?")) {
        if (window.confirm("'Understand this... things are in motion now, that cannot be undone.' -- Mithrandir, The Grey Pilgrim")) {
          console.log(`cancelling appointment nhs_number=${nhsNumber}`);

          $.ajax({
            url: 'http://localhost:4000/GPS_De-Reg.php',
            type: 'POST',
            data: {
              nhs_number: nhsNumber
            },
            success: function (data) {
              alert(data.message);
              // redirect to login page or do any other necessary actions
            },
            error: (xhr, status, error) => {
              alert(`Error deleting appointments: ${error}`);
            }
          });
        }
      }
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
      <Button onClick={() => handleConfirmClick()}>Confirm</Button>
    </div>
  );
}

export default DRTab;
