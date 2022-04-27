import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import img1 from '../images/6b5590c781f1a1bfd84a13c0abd71029.jpg'
import img2 from '../images/math.jpg'
import english from '../images/english.jpg'
import writing from '../images/writting.webp'
import chemistry from '../images/chemistry.webp'
function ClassSelection() {
  return (
    <div>
      <PhysicsClassCardView />
      <MathClassCardView />
      <EnglishClassCardView />
      <WrittingClassCardView />
      <ChemistryClassCardView />
    </div>
  )
}
const PhysicsClassCardView = () => (
    <div id="classCardContainer" style={{ margin: 20}}>
      <Card id="card">
      <img class="border bg-white p1 border-gray circle square-100 lazyload" 
                        id="classImage"src={img1} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
        <Card.Content id="cardContent">
          <Card.Header id="classHeadings"><h3>Physics Classes</h3></Card.Header>
          {/* <Card.Meta>
            <span className='description'>DESCRIPTION</span>
          </Card.Meta> */}
          <Card.Description id="description">
            <p class="meduim_size_font">
                Add description here
            </p>
          </Card.Description>
          <Card.Content extra id="buttonContainer">
            <Button class="selectButton" basic color="greenyellow">Select</Button>
            {/* <button class="ui red button">Red</button> */}
          </Card.Content>
        </Card.Content>
      </Card>
    </div>
)
const MathClassCardView = () => (
  <div id="classCardContainer" style={{ margin: 20}}>
    <Card id="card">
    <img class="border bg-white p1 border-gray circle square-100 lazyload" 
                      id="classImage"src={img2} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
      <Card.Content id="cardContent">
        <Card.Header id="classHeadings"><h3>Math Classes</h3></Card.Header>
        {/* <Card.Meta>
          <span className='description'>DESCRIPTION</span>
        </Card.Meta> */}
        <Card.Description id="description">
          <p class="meduim_size_font">
              Add description here
          </p>
        </Card.Description>
        <Card.Content extra id="buttonContainer">
          <Button class="selectButton" basic color="greenyellow">Select</Button>
      </Card.Content>
      </Card.Content>
    </Card>
  </div>
)
const EnglishClassCardView = () => (
  <div id="classCardContainer" style={{ margin: 20}}>
    <Card id="card">
    <img class="border bg-white p1 border-gray circle square-100 lazyload" 
                      id="classImage"src={english} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
      <Card.Content id="cardContent">
        <Card.Header id="classHeadings"><h3>English Classes</h3></Card.Header>
        {/* <Card.Meta>
          <span className='description'><h4>DESCRIPTION:</h4></span>
        </Card.Meta> */}
        <Card.Description id="description">
          <p class="meduim_size_font">
              Add description here
          </p>
        </Card.Description>
        <Card.Content extra id="buttonContainer">
          <Button class="selectButton" basic color="greenyellow">Select</Button>
      </Card.Content>
      </Card.Content>
    </Card>
  </div>
)
const WrittingClassCardView = () => (
  <div id="classCardContainer" style={{ margin: 20}}>
    <Card id="card">
    <img class="border bg-white p1 border-gray circle square-100 lazyload" 
                      id="classImage"src={writing} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
      <Card.Content id="cardContent">
        <Card.Header id="classHeadings"><h3>Writting Classes</h3></Card.Header>
        {/* <Card.Meta>
          <span className='description'>DESCRIPTION</span>
        </Card.Meta> */}
        <Card.Description id="description">
          <p class="meduim_size_font">
              Add description here
          </p>
        </Card.Description>
        <Card.Content extra id="buttonContainer">
          <Button class="selectButton" basic color="greenyellow">Select</Button>
      </Card.Content>
      </Card.Content>
    </Card>
  </div>
)
const ChemistryClassCardView = () => (
  <div id="classCardContainer" style={{ margin: 20}}>
    <Card id="card">
    <img class="border bg-white p1 border-gray circle square-100 lazyload" 
                      id="classImage"src={chemistry} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
      <Card.Content id="cardContent">
        <Card.Header id="classHeadings"><h3>Chemistry Classes</h3></Card.Header>
        {/* <Card.Meta>
          <span className='description'>DESCRIPTION</span>
        </Card.Meta> */}
        <Card.Description id="description">
          <p class="meduim_size_font">
              Add description here
          </p>
        </Card.Description>
        <Card.Content extra id="buttonContainer">
          <Button class="selectButton" basic color="greenyellow">Select</Button>
      </Card.Content>
      </Card.Content>
    </Card>
  </div>
)

export default ClassSelection