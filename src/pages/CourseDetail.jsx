import React from 'react'

// Emmanuel 03-26-2022
import { Card, Icon, Image } from 'semantic-ui-react'

function CourseDetail() {
  return (
    // <div>CourseDetail</div>
    <div id="detailsContainer">
      <AnnouncementCardView />
      <div id="todoAndtomask">
        <ToDoCardView />
        <ToMaskView />
      </div>
    </div>
  );
};

const AnnouncementCardView = () => (
  <div id="AnnouncementCardContainer" style={{ margin: 20}}>
    <Card>
      <Card.Content>
        <Card.Header id="announcements">Announcements</Card.Header>
        {/* <Card.Meta>
          <span className='date'>Add notifications here.</span>
        </Card.Meta> */}
        <Card.Description>
          ...
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
)

const ToDoCardView = () => (
  <div id="ToDoCardContainer" style={{ margin: 20}}>
    <Card>
      <Card.Content>
        <Card.Header id="todo">To Do</Card.Header>
        {/* <Card.Meta>
          <span className='notification'>Add notifications here.</span>
        </Card.Meta> */}
        <Card.Description>
          ...
        </Card.Description>
        
      </Card.Content>
    </Card>
  </div>
)

const ToMaskView = () => (
  <div id="ToMaskCardContainer" style={{ margin: 20}}>
    <Card>
      <Card.Content>
        <Card.Header id="mask">To Mask</Card.Header>
        {/* <Card.Meta>
          <span className='toMask'>Add notifications here.</span>
        </Card.Meta> */}
        <Card.Description>
          ...
        </Card.Description>
        
      </Card.Content>
    </Card>
  </div>
)

export default CourseDetail