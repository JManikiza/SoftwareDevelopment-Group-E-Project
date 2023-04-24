/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import {Link, Heading, Main, Table, H2,
        SectionBreak, Pagination, Button, Tabs} from 'govuk-react';

import { useNavigate } from "react-router-dom";


function GPServices() {

  const navigate = useNavigate();

  return (
    <div>

      <Main>
 
        <Pagination>
            <Pagination.Anchor onClick={() => navigate("/Patient")} previousPage>
                Back to start
            </Pagination.Anchor>
            <Pagination.Anchor onClick={() => navigate("/Profile")} nextPage>
                Profile
            </Pagination.Anchor>
        </Pagination>

        <Heading>GP Services</Heading>

        <SectionBreak level="SMALL" visible={false}/>

<Tabs>
  <Tabs.List>
    <Tabs.Tab href="#0" selected >
      Doctors Available
    </Tabs.Tab>
    <Tabs.Tab href="#1">
      Request Appointment
    </Tabs.Tab>
    <Tabs.Tab href="#2">
      View/Cancel Appointments
    </Tabs.Tab>
    <Tabs.Tab href="#3">
      De-Register from GP
    </Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="0" selected >
    <H2>
      Doctors here at the GP
    </H2>
    <Table head={<Table.Row><Table.CellHeader>Doctor name</Table.CellHeader><Table.CellHeader>Doctor Bio</Table.CellHeader><Table.CellHeader>Doctor Specialization</Table.CellHeader></Table.Row>}>
      <Table.Row>
        <Table.Cell>
          David Francis
        </Table.Cell>
        <Table.Cell>
          I'm a good doctor
        </Table.Cell>
        <Table.Cell>
          Pediatrics
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Paul Farmer
        </Table.Cell>
        <Table.Cell>
          I'm a better doctor
        </Table.Cell>
        <Table.Cell>
          Bone & Tissue 
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Rita Patel
        </Table.Cell>
        <Table.Cell>
          I'm the best doctor
        </Table.Cell>
        <Table.Cell>
          Ear & Eyes
        </Table.Cell>
      </Table.Row>
    </Table>
  </Tabs.Panel>
  <Tabs.Panel id="1">
    <H2>
      Past week
    </H2>
    <Table head={<Table.Row><Table.CellHeader>Case manager</Table.CellHeader><Table.CellHeader>Cases opened</Table.CellHeader><Table.CellHeader>Cases closed</Table.CellHeader></Table.Row>}>
      <Table.Row>
        <Table.Cell>
          David Francis
        </Table.Cell>
        <Table.Cell>
          24
        </Table.Cell>
        <Table.Cell>
          18
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Paul Farmer
        </Table.Cell>
        <Table.Cell>
          16
        </Table.Cell>
        <Table.Cell>
          20
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Rita Patel
        </Table.Cell>
        <Table.Cell>
          24
        </Table.Cell>
        <Table.Cell>
          27
        </Table.Cell>
      </Table.Row>
    </Table>
  </Tabs.Panel>
  <Tabs.Panel id="1">
    <H2>
      Past month
    </H2>
    <Table head={<Table.Row><Table.CellHeader>Case manager</Table.CellHeader><Table.CellHeader>Cases opened</Table.CellHeader><Table.CellHeader>Cases closed</Table.CellHeader></Table.Row>}>
      <Table.Row>
        <Table.Cell>
          David Francis
        </Table.Cell>
        <Table.Cell>
          98
        </Table.Cell>
        <Table.Cell>
          95
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Paul Farmer
        </Table.Cell>
        <Table.Cell>
          122
        </Table.Cell>
        <Table.Cell>
          133
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Rita Patel
        </Table.Cell>
        <Table.Cell>
          126
        </Table.Cell>
        <Table.Cell>
          142
        </Table.Cell>
      </Table.Row>
    </Table>
  </Tabs.Panel>
  <Tabs.Panel id="1">
    <H2>
      Past year
    </H2>
    <Table head={<Table.Row><Table.CellHeader>Case manager</Table.CellHeader><Table.CellHeader>Cases opened</Table.CellHeader><Table.CellHeader>Cases closed</Table.CellHeader></Table.Row>}>
      <Table.Row>
        <Table.Cell>
          David Francis
        </Table.Cell>
        <Table.Cell>
          1380
        </Table.Cell>
        <Table.Cell>
          1472
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Paul Farmer
        </Table.Cell>
        <Table.Cell>
          1129
        </Table.Cell>
        <Table.Cell>
          1083
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Rita Patel
        </Table.Cell>
        <Table.Cell>
          1539
        </Table.Cell>
        <Table.Cell>
          1265
        </Table.Cell>
      </Table.Row>
    </Table>
  </Tabs.Panel>
</Tabs>

      </Main>

    </div>
  );
}

export default GPServices;