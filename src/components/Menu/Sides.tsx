import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Salsa/Pico',
    meta: '$0.50',
    color: 'orange',
  },
  {
    header: 'Pickled Jalapenos',
    meta: '$0.50',
    color: 'orange',
  },
  {
    header: 'Peppers and Onions',
    meta: '$1.00',
    color: 'orange',
  },
  {
    header: 'Rice',
    meta: '$1.00',
    color: 'orange',
  },
  {
    header: 'Beans',
    meta: '$1.00',
    color: 'orange',
  },
  {
    header: 'Corn',
    meta: '$1.00',
    color: 'orange',
  },
  {
    header: 'Queso',
    meta: '$1.00',
    color: 'orange',
  },
  {
    header: 'Box of Chips',
    meta: '$3.00',
    color: 'orange',
  },
  {
    header: 'Chips with Queso',
    meta: '$5.00',
    color: 'orange',
   },
   {
    header: 'Elotes',
    meta: '$4.00',
    color: 'orange',
   },

]

const TacoSidesCardGroup = () => <Card.Group centered items={items} itemsPerRow='4' stackable/>

export default TacoSidesCardGroup