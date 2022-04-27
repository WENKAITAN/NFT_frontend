import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import "/NFT_frontend-main/NFT_frontend/src/style/classesViewCard.css"

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
                        id="classImage"src={require("/NFT_frontend-main/NFT_frontend/src/images/6b5590c781f1a1bfd84a13c0abd71029.jpg")} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
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
                      id="classImage"src={require("NFT_frontend-main/NFT_frontend/src/images/math.jpg")} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
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
                      id="classImage"src={require("NFT_frontend-main/NFT_frontend/src/images/english.jpg")} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
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
                      id="classImage"src={require("/NFT_frontend-main/NFT_frontend/src/images/writting.webp")} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
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
                      id="classImage"src={require("/NFT_frontend-main/NFT_frontend/src/images/chemistry.webp")} /> {/**style={{width: 500, height: 300, borderRadius: 10}} */}
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