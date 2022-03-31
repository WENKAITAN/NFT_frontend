import React from 'react'

// Emmanuel 03-29-2022
import { Card, Icon, Image } from 'semantic-ui-react'
function Grade() {
  return (
    <div id="detailsContainer">
      <GradeCardView />
    </div>
  )
}
const GradeCardView = () => (
  <div id="gradeCardContainer" style={{ margin: 20}}>
    <Card>
      <Card.Content style={{ width: "100%"}}>
        {/* There is no need to have the is seperate header because we have a gloal navbar */}
        {/* <Card.Header id="grades">Grades  Dashboard</Card.Header> */}
        <div id="organize">
        <Card.Meta>
          <span className='total'>Total</span>
        </Card.Meta>
        <Card.Description className="inserTotalGrade">
          ...
        </Card.Description>
        <Card.Meta>
          <span className='finalGradeToDate'>Final Grade To Date</span>
        </Card.Meta>
        <Card.Description className="insertFinalGradeToDate">
          ...
        </Card.Description>
        <Card.Meta>
          <span className='homeworkPartOfFinalGrade'>Homework Part Of Final Grade</span>
        </Card.Meta>
        <Card.Description className="inserHomeworkPartOfFinalGrade">
          ...
        </Card.Description>
        <Card.Meta>
          <span className='quizPartOfFinalGrade'>Quiz Part Of Final Grade</span>
        </Card.Meta>
        <Card.Description className="insertquizPartOfFinalGrade">
          ...
        </Card.Description>
        <Card.Meta>
          <span className='labReflectionOfTheGrade'>Labs</span>
        </Card.Meta>
        <Card.Description className="insertlabReflectionOfTheGrade">
          ...
        </Card.Description>
        <Card.Meta>
          <span className='finalGradeRevised'>Final Grade Revised</span>
        </Card.Meta>
        <Card.Description className="insertfinalGradeRevised">
          ...
        </Card.Description>
        <Card.Meta>
          <span className='projectMilestonesOneAndTwo'>Projects Milestones 1 and 2</span>
        </Card.Meta>
        <Card.Description className="insertProjectMilestonesOneAndTwo">
          ...
        </Card.Description>
        <Card.Meta>
          <span className='projectMilestonesOneTwoAndThree'>Projects Milestones 1, 2, and 3</span>
        </Card.Meta>
        <Card.Description className="inserlabReflectionOfTheGrade">
          ...
        </Card.Description>
        </div>
      </Card.Content>
    </Card>
  </div>
)
export default Grade