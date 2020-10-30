import React from 'react'
import { Table } from 'semantic-ui-react'

const MenuPricingTableBeef= () => (
    <Table unstackable color={'orange'}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Market Items</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Price Per Pound</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>   
            <Table.Row>
                <Table.Cell>Beef Eye of Round Roast</Table.Cell>
                <Table.Cell textAlign="center">$6.99</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Beef Liver</Table.Cell>
                <Table.Cell textAlign="center">$2.99</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Beef mix</Table.Cell>
                <Table.Cell textAlign="center">$4.59</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Beef NY Strip bnls </Table.Cell>
                <Table.Cell textAlign="center">$7.49</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Beef rib-eye steak bnls </Table.Cell>
                <Table.Cell textAlign="center">$7.49</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Beef rib-eye steak bone in </Table.Cell>
                <Table.Cell textAlign="center">$5.99</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Beef top sirloin steak </Table.Cell>
                <Table.Cell textAlign="center">$7.49</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Fajitas</Table.Cell>
                <Table.Cell textAlign="center">$4.99</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Ground beef 80/20 </Table.Cell>
                <Table.Cell textAlign="center">$4.99</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Halal beef stew </Table.Cell>
                <Table.Cell textAlign="center">$6.99</Table.Cell>
            </Table.Row>            
            <Table.Row>
                <Table.Cell>Hand shank bone in  </Table.Cell>
                <Table.Cell textAlign="center">$5.99</Table.Cell>
            </Table.Row>  
            <Table.Row>
                <Table.Cell>Hand shank boneless </Table.Cell>
                <Table.Cell textAlign="center">$6.49</Table.Cell>
            </Table.Row>  
            <Table.Row>
                <Table.Cell>Shoulder </Table.Cell>
                <Table.Cell textAlign="center">$4.99</Table.Cell>
            </Table.Row>  
            <Table.Row>
                <Table.Cell>Black Angus NY Strip bnls </Table.Cell>
                <Table.Cell textAlign="center">$14.99</Table.Cell>
            </Table.Row>  
            <Table.Row>
                <Table.Cell>Black Angus Rib-eye bnls </Table.Cell>
                <Table.Cell textAlign="center">$14.99</Table.Cell>
            </Table.Row>  
            <Table.Row>
                <Table.Cell>Black Angus Rib-eye bone in </Table.Cell>
                <Table.Cell textAlign="center">$11.99</Table.Cell>
            </Table.Row>  

        </Table.Body> 
    </Table>
)
export default MenuPricingTableBeef