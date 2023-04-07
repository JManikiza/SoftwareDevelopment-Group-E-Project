import { Select, Heading, Button, Main } from "govuk-react";
import { useNavigate } from "react-router-dom";
function Gender() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <Heading>Gender</Heading>
        <Select
          input={{
            name: "group1",
            onChange: function noRefCheck() {},
          }}
        >
          <option value="0">option 1</option>
          <option value="1">option 2</option>
          <option value="2">option 3</option>
        </Select>
        <br />
        <Button onClick={() => navigate("/Contact")} start>
          Save and Continue
        </Button>
      </Main>
    </div>
  );
}
export default Gender;
