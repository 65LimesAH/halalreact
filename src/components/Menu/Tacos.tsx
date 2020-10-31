import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Ground Beef Taco',
    description:
      'Served with onions, cilantro, lime',
    meta: '$2.25 or 3 for $6.00',
    color: 'orange',
  },
  {
    header: 'Chicken Taco',
    description:
      'Served with onions, cilantro, lime',
    meta: '$2.25 or 3 for $6.00',
    color: 'orange',
  },
  {
    header: 'Pulled Beef Taco',
    description:
      'Served with onions, cilantro, lime',
    meta: '$2.25 or 3 for $6.00',
    color: 'orange',
  },
  {
    header: 'Fish Taco',
    description:
      'Served with onions, cilantro, lime',
    meta: '$2.25 or 3 for $6.00',
    color: 'orange',
  },
  {
    header: 'Vegetarian Taco',
    description:
      'Served with onions, cilantro, lime',
    meta: '$2.25 or 3 for $6.00',
    color: 'orange',
  },
  {
    header: 'Steak Taco',
    description:
      'Served with onions, cilantro, lime',
    meta: '$3.25 or 3 for $9.00',
    color: 'orange',
  },
  {
    header: 'Shrimp Taco',
    description:
      'Served with onions, cilantro, lime',
    meta: '$3.25 or 3 for $9.00',
    color: 'orange',
  },
  {
    header: 'Quesdilla',
    description:
      'Served with Cheese, Onions, Peppers',
    meta: '$8.00',
    color: 'orange',
  },
  {
    header: 'Loaded Nachos',
    description:
      'Served with onions, cilantro, cheese',
    meta: '$8.00',
    color: 'orange',
   },

]

const TacoCardGroup = () => <Card.Group centered items={items}/>

export default TacoCardGroup
