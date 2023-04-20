import { Button } from "govuk-react";
import { CurrentContext } from "../../Pages/Temp";

import jq from "jquery";

function MyBtn(props) {
  function getPatientData() {
    var patientData = {
      nhsNo: CurrentContext.nhsNo,
    };

    jq.ajax({
      type: "POST",
      url: "http://localhost:4000/getpatientdata.php",
      mode: "no-core",
      data: patientData,
      success(data) {
        console.log(data);
        if (data === "no patients") {
          alert("no patients")
        } else {
          alert(data);
          var json = jq.parseJSON(data);
          alert(json[0].Postcode);
        }
      },
    });
  }

  return <Button onClick={getPatientData}> Submit </Button>;
}

export default MyBtn;
