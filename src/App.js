
const Card = (props) => {
  const { img, website, description, price } = props
  return (
    <div className="card-wrapper">
      <img src={img} alt="" />
      <div className="card-description">
        <p className="card-description-website">{website}</p>
        <p className="card-description-description">{description}</p>
        <p className="card-description-price">{price}</p>
      </div>
    </div>
  )
}

const Heading = () => {
  return (
    <div>
      <h1>Artahanum</h1>
    </div>
  )
}

const Body = () => {
  return <div className="cards-wrapper">
    <Card
      img={'https://onex.am/images/deals/2362.png'}
      website={'www.zara.com'}
      description={'Black Dress'}
      price={"15E"}
    />
    <Card
    img={'https://onex.am/images/deals/2361.png'}
    website={' www.asos.com '}
    description={" Man's Pink Shirt "}
    price={"9E"}
    />
    <Card 
    img={'https://onex.am/images/deals/2362.png'}
    website={'www.zara.com'}
    description={'Black Dress'}
    price={"15E"}
    />
  </div>
}


function App() {
  return (
    <div className="App">
      <Heading />
      <Body />
    </div>
  );
}

//React.createElement('div')
//document.creatElement('div')

export default App;
