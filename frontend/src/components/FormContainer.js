import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function FormContainer({children}) {
  return (
      <div>
          <Container>
              <Row className='justify-content-md-center'>
                  <Col xs = {12} md = {6}>{children}</Col>
              </Row>
          </Container>
    </div>
  )
}

export default FormContainer