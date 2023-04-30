import Hero from './Hero';

const AboutView = () => {
    return (

      <>
        <Hero text="About Us" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
                <p className="lead">
                  lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                </p>
            </div>
          </div>
        </div>
        
      </>
      
    );
  };

  export default AboutView;
