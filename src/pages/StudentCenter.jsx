import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { MdAccountCircle, MdAnnouncement, MdSchool, MdAccountBox, MdTask, MdSchedule, MdOutlineAppRegistration, MdFiberSmartRecord, MdAttachMoney,MdPaid } from "react-icons/md";
import {FaUserGraduate} from "react-icons/fa"
import {CgTranscript} from "react-icons/cg"
function StudentCenter() {
  return (
    <div>
        <h3>Student Center</h3>
        <Container>
            <Row>
                <Col sm={12} md={8} lg={6}style={{marginTop:"10px"}}>
                <Card onClick={()=> window.location.href='/announcement'}>
                    <Card.Body>
                    <Card.Title>Student Announcements</Card.Title>
                    <MdAnnouncement size={70}/>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/Profile'}>
                        <Card.Body>
                        <Card.Title>Student Profile</Card.Title>
                        <MdAccountBox size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/task'}>
                        <Card.Body>
                        <Card.Title>Tasks and Holds</Card.Title>
                        <MdTask size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/schedulebuilder'}>
                        <Card.Body>
                        <Card.Title>Schedule Builder</Card.Title>
                        <MdSchedule size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/registerClass'}>
                        <Card.Body>
                        <Card.Title>Couese Enrollment</Card.Title>
                        <MdOutlineAppRegistration size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/academicRecord'}>
                        <Card.Body>
                        <Card.Title>Academic Record</Card.Title>
                        <MdFiberSmartRecord size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/deposit'}>
                        <Card.Body>
                        <Card.Title>Direct Deposit</Card.Title>
                        <MdAttachMoney size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/financialaccount'}>
                        <Card.Body>
                        <Card.Title>Financial Account</Card.Title>
                        <MdAccountCircle size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/financialaid'}>
                        <Card.Body>
                        <Card.Title>Financial Aid</Card.Title>
                        <MdPaid size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/graduate'}>
                        <Card.Body>
                        <Card.Title>Graduation</Card.Title>
                        <FaUserGraduate size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/transcript'}>
                        <Card.Body>
                        <Card.Title>Transcript</Card.Title>
                        <CgTranscript size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={4} lg={3} style={{marginTop:"10px"}}>
                    <Card onClick={()=> window.location.href='/'}>
                        <Card.Body>
                        <Card.Title>Apply to MetaUniversity</Card.Title>
                        <MdSchool size={70}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row> */}
        </Container>
    </div>
  )
}

export default StudentCenter