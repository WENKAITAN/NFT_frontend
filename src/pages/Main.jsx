import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { MdAccountCircle, MdAnnouncement, MdSchool } from "react-icons/md";
function Main() {

  return (

    <div>
        <Container>
          <Row >
            <Col md={4} style={{marginTop:"10px"}}>
              <Card onClick={()=> window.location.href='/studentcenter'}>
                <Card.Body>
                  <Card.Title>Student Center</Card.Title>
                  <MdAccountCircle size={70}/>

                </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginTop:"10px"}}>
              <Card onClick={()=> window.location.href='/announcement'}>
                <Card.Body>
                  <Card.Title>Announcements</Card.Title>
                  <MdAnnouncement size={70}/>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginTop:"10px"}}>
              <Card onClick={()=> window.location.href='/'}>
                <Card.Body>
                  <Card.Title>Apply To MetaUniversity</Card.Title>
                  <MdSchool size={70}/>
                </Card.Body>
              </Card>
            </Col>
          </Row>


        </Container>

    </div>
  )
}

export default Main
