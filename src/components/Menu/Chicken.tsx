import React from 'react'
import { Table } from 'semantic-ui-react'


const MenuPricingTableChicken= () => (

    <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Market Items</Table.HeaderCell>
                <Table.HeaderCell>Price Per Pound</Table.HeaderCell>
            </Table.Row>
        </Table.Header> 
        <Table.Body>   
            <Table.Row>
                <Table.Cell>bnls, sknls, crescent breast </Table.Cell>
                <Table.Cell>$4.29</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>crescent drums sknls </Table.Cell>
                <Table.Cell>$2.49</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>crescent drums w/skin </Table.Cell>
                <Table.Cell>$1.99</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>crescent leg qrt sknls </Table.Cell>
                <Table.Cell>$1.99</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>crescent leg qrt w/skin  </Table.Cell>
                <Table.Cell>$1.69</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>crescent thigh bnls sknls</Table.Cell>
                <Table.Cell>$3.29</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>crescent wings </Table.Cell>
                <Table.Cell>$3.49</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>whole chicken crescent</Table.Cell>
                <Table.Cell>$2.09</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>crescent whole sknls cut  </Table.Cell>
                <Table.Cell>$3.29</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>cresent chicken tenders  </Table.Cell>
                <Table.Cell>$4.99</Table.Cell>
            </Table.Row>            
        </Table.Body> 
    </Table>
)
export default MenuPricingTableChicken