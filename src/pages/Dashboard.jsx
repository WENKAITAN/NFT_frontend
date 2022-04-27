import React from 'react'
import {useState, useEffect} from 'react'
import '../index.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Cover from '../images/Cover.png'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate} from 'react-router-dom'
function Dashboard() {


  const [university, setUniversity] = useState(null)
  let navigate = useNavigate();
  const handleOnClick = (uniId) => {
    console.log(uniId)
    setUniversity(uniId)

    //redirect to /enroll page
    window.location.href='/enroll'
  }


  const { isAuthenticated } = useAuth0();
  
  if(isAuthenticated){

   navigate("/home")
  }
  return (
    <>
      <section className="heading">

        <h3>University</h3>
        <Container>
          <Row >
            <Col sm={12} lg={4} style={{marginTop:"10px"}}>
              <Card >
                <Card.Img variant="top" src={Cover} />
                <Card.Body>
                  <Card.Title>University A</Card.Title>
                  <Card.Text>
                  4-Year Degree, Graduate Degree, Continuing Education
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleOnClick("a")}>Enroll</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4} style={{marginTop:"10px"}}>
              <Card >
                <Card.Img variant="top" src={Cover} />
                <Card.Body>
                  <Card.Title>University B</Card.Title>
                  <Card.Text>
                  2-Year Degree, Continuing Education
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleOnClick("b")}>Enroll</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4} style={{marginTop:"10px"}}>
              <Card>
                  <Card.Img variant="top" src={Cover} />
                  <Card.Body>
                    <Card.Title>University C</Card.Title>
                    <Card.Text>
                    4-Year Degree, Graduate Degree, Continuing Education
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleOnClick("c")}>Enroll</Button>
                  </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={4} style={{marginTop:"10px"}}>
              <Card>
                <Card.Img variant="top" src={Cover} />
                <Card.Body>
                  <Card.Title>University D</Card.Title>
                  <Card.Text>
                  4-Year Degree, Graduate Degree, Continuing Education
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleOnClick("d")}>Enroll</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4} style={{marginTop:"10px"}}>
              <Card>
                <Card.Img variant="top" src={Cover} />
                <Card.Body>
                  <Card.Title>University E</Card.Title>
                  <Card.Text>
                  2-Year Degree, Continuing Education
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleOnClick("e")}>Enroll</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4} style={{marginTop:"10px"}}>
              <Card >
                  <Card.Img variant="top" src={Cover} />
                  <Card.Body>
                    <Card.Title>University F</Card.Title>
                    <Card.Text>
                    4-Year Degree, Graduate Degree, Continuing Education
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleOnClick("f")}>Enroll</Button>
                  </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col sm={12} lg={4} style={{marginTop:"10px"}}>
              <Card>
                <Card.Img variant="top" src={Cover} />
                <Card.Body>
                  <Card.Title>University G</Card.Title>
                  <Card.Text>
                  4-Year Degree, Graduate Degree, Continuing Education
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleOnClick("g")}>Enroll</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4} style={{marginTop:"10px"}}>
              <Card>
                <Card.Img variant="top" src={Cover} />
                <Card.Body>
                  <Card.Title>University H</Card.Title>
                  <Card.Text>
                  2-Year Degree, Continuing Education
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleOnClick("h")}>Enroll</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={4} style={{marginTop:"10px"}}>
              <Card>
                  <Card.Img variant="top" src={Cover} />
                  <Card.Body>
                    <Card.Title>University Q</Card.Title>
                    <Card.Text>
                    4-Year Degree, Graduate Degree, Continuing Education
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleOnClick("q")}>Enroll</Button>
                  </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </section>
    </>
  )
}

export default Dashboard
