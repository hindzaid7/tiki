import React from 'react'
import {Card  } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'

function Design({design}) {
  return (
    <Card className='h-100' > 
        <Link to={`/design/${design._id}`}>
            <Card.Img src={design.image}/>
        </Link>
      <Card.Body>
        <Link to={`/design/${design._id}`}>
           <Card.Title as="div">
              <strong>{design.name}</strong>
           </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className='my-3'>
            <Rating value={design.rating} text={`${design.numReviews} reviews`} color={`#ffc107`} />
          </div>
        </Card.Text>
        <Card.Text as="h3">
        ${design.price}
        </Card.Text> 
      </Card.Body>

    </Card>
  )
}

export default Design
