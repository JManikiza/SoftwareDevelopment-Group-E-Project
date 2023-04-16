/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
//import test
import { Table, Main } from "govuk-react";
import { useLocation, Link, useNavigate } from "react-router-dom";

function DetailsSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  //catch the state values passed from previous pages
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;
  const sName = location.state.sName;
  const date = location.state.date;
  const gender = location.state.gender;
  const email = location.state.email;
  const phoneNumber = location.state.phoneNumber;
  const address1 = location.state.address1;
  const address2 = location.state.address2;
  const townCity = location.state.townCity;
  const county = location.state.county;
  const postCode = location.state.postCode;

  //this method will transfer the states back to the previous pages if customer devices to presse the anchor "change"
  const handleSubmit = (path) => (e) => {
    e.preventDefault();
    navigate(path, {
      state: {
        nhsNumber,
        fName,
        sName,
        gender,
        email,
        phoneNumber,
        address1,
        address2,
        townCity,
        county,
        postCode,
      },
    });
  };

  return (
    <div>
      <Main>
        <Table>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}>Name</span>
            </Table.Cell>
            <Table.Cell>{fName}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/FirstName")}>Change</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}>Surname</span>
            </Table.Cell>
            <Table.Cell>{sName}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/Surname")}>Change</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}>Date of birth</span>
            </Table.Cell>
            <Table.Cell>
              {date}/{date}/{date}
            </Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/DateOFBirth")}>Change</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}>NHS Number</span>
            </Table.Cell>
            <Table.Cell>{nhsNumber}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/NhsNumber")}>Change</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}>Gender</span>
            </Table.Cell>
            <Table.Cell>{gender}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/Gender")}>Change</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}>Contact Detail</span>
            </Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/Contact")}>Change</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}></span>
            </Table.Cell>
            <Table.Cell>{phoneNumber}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/Contact")}>Change</Link>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}>Address Detail</span>
            </Table.Cell>
            <Table.Cell>{address1}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/Address")}>Change</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}></span>
            </Table.Cell>
            <Table.Cell>{address2}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/Address")}>Change</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}></span>
            </Table.Cell>
            <Table.Cell>{townCity}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/Address")}>Change</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}></span>
            </Table.Cell>
            <Table.Cell>{county}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/Address")}>Change</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span style={{ fontWeight: "bold" }}></span>
            </Table.Cell>
            <Table.Cell>{postCode}</Table.Cell>
            <Table.Cell>
              <Link onClick={handleSubmit("/Address")}>Change</Link>
            </Table.Cell>
          </Table.Row>
        </Table>
      </Main>
    </div>
  );
}
export default DetailsSummary;
