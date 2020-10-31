import React from "react";
import { Table } from "semantic-ui-react";

const MenuPricingTableChicken = () => (
  <Table unstackable color={"orange"} textAlign="center">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Market Items</Table.HeaderCell>
        {/* <Table.HeaderCell textAlign="center">Price Per Pound</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Crescent Breast Bnls/Sknls </Table.Cell>
        {/* <Table.Cell textAlign="center">$4.29</Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Crescent Drums Sknls </Table.Cell>
        {/* <Table.Cell textAlign="center"> $2.49</Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Crescent Drums w/Skin </Table.Cell>
        {/* <Table.Cell textAlign="center">$1.99</Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Crescent Leg Qrt Sknls </Table.Cell>
        {/* <Table.Cell textAlign="center">$1.99</Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Crescent Leg Qrt w/Skin </Table.Cell>
        {/* <Table.Cell textAlign="center">$1.69</Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Crescent Thigh Bnls Sknls</Table.Cell>
        {/* <Table.Cell textAlign="center">$3.29</Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Crescent Wings </Table.Cell>
        {/* <Table.Cell textAlign="center">$3.49</Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Whole Chicken Crescent</Table.Cell>
        {/* <Table.Cell textAlign="center">$2.09</Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Crescent Whole Sknls Cut </Table.Cell>
        {/* <Table.Cell textAlign="center">$3.29</Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cresent Chicken Tenders </Table.Cell>
        {/* <Table.Cell textAlign="center">$4.99</Table.Cell> */}
      </Table.Row>
    </Table.Body>
  </Table>
);
export default MenuPricingTableChicken;
