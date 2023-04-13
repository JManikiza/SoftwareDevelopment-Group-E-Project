/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
//import test
import { Table, Main } from "govuk-react";
import { useLocation, Link } from "react-router-dom";

function DetailsSummary() {
  const location = useLocation();
  const name = location.state.fName;
  const surname = location.state.sName;
  const date = location.state.date;
  const gender = location.state.gender;
  const email = location.state.email;
  const phoneNumber = location.state.phoneNumber;
  const addressline1 = location.state.address1;
  const addressline2 = location.state.address2;
  const townCity = location.state.townCity;
  const count = location.state.count;
  const postCode = location.state.postCode; 


  return (
    <div>
      <Main>
      <Table>
        
        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}>Name</span>
          </Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>
            <Link to="/FirstName">Change</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}>Surname</span>
          </Table.Cell>
          <Table.Cell>{surname}</Table.Cell>
          <Table.Cell>
            <Link to="/Surname">Change</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}>Date of birth</span>
          </Table.Cell>
          <Table.Cell>{date}/{date}/{date}</Table.Cell>
          <Table.Cell>
            <Link to="/DateOFBirth">Change</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}>Gender</span>
          </Table.Cell>
          <Table.Cell>{gender}</Table.Cell>
          <Table.Cell>
            <Link to="/Gender">Change</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}>Contact Detail</span>
          </Table.Cell>
          <Table.Cell>{email}</Table.Cell>
          <Table.Cell>
            <Link to="/Contact">Change</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}></span>
          </Table.Cell>
          <Table.Cell>{phoneNumber}</Table.Cell>
          <Table.Cell>
            <Link to="/Contact">Change</Link>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}>Address Detail</span>
          </Table.Cell>
          <Table.Cell>{addressline1}</Table.Cell>
          <Table.Cell>
            <Link to="/Contact">Change</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}></span>
          </Table.Cell>
          <Table.Cell>{addressline2}</Table.Cell>
          <Table.Cell>
            <Link to="/Contact">Change</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}></span>
          </Table.Cell>
          <Table.Cell>{townCity}</Table.Cell>
          <Table.Cell>
            <Link to="/Contact">Change</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}></span>
          </Table.Cell>
          <Table.Cell>{count}</Table.Cell>
          <Table.Cell>
            <Link to="/Contact">Change</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span style={{ fontWeight: "bold" }}></span>
          </Table.Cell>
          <Table.Cell>{postCode}</Table.Cell>
          <Table.Cell>
            <Link to="/Contact">Change</Link>
          </Table.Cell>
        </Table.Row>
      </Table>
      </Main>
    </div>
  );
}
export default DetailsSummary;
