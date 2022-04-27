import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { MdAccountCircle, MdAnnouncement, MdSchool } from "react-icons/md";
import { useNavigate} from 'react-router-dom'
function Main() {

  let navigate = useNavigate();

  return (

    <div>
        <Container>
          <Row >
            <Col md={4} style={{marginTop:"10px"}}>
              <Card onClick={()=> navigate('/studentcenter')}>
                <Card.Body>
                  <Card.Title>Student Center</Card.Title>
                  <MdAccountCircle size={70}/>

                </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginTop:"10px"}}>
              <Card onClick={()=> navigate('/announcement')}>
                <Card.Body>
                  <Card.Title>Announcements</Card.Title>
                  <MdAnnouncement size={70}/>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} style={{marginTop:"10px"}}>
              <Card onClick={()=> navigate('/')}>
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
