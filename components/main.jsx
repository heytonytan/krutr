var Profile = React.createClass({
  render: function(){
    return ( 
      <div className="profile">
        <ProfilePic />
        <SlideDeck />
      </div>
    );
  }
});
var ProfilePic = React.createClass({
  render: function(){
    return (
      <div className="profilePic">
        <h1>Perk Lim</h1>
        <img src="http://i.ytimg.com/vi/vRyAjF0Hvv4/hqdefault.jpg"/>
      </div>
    );
  }
});
var SlideDeck = React.createClass({
  getInitialState: function(){
    return {
      data: [
        {
          id: "4234234",
          description: "Graduated from the University of Pennsylvania with a BSc in Computer Science",
          picture: "http://www.natcom.org/uploadedImages/More_Scholarly_Resources/Doctoral_Program_Resource_Guide/UPenn%20Campus.jpg"
        },
        {
          id: "4234235",
          description: "Presently works at Box",
          picture: "http://hackathon-in-a-box.org/img/box.png"
        },
        {
          id: "4234236",
          description: "Loves Scuba and badminton",
          picture: "http://www.aqua-sport.com/_Uploads/dbsArticles/DivingCourse1.JPG"
        }
      ]
    };
  },
  render: function(){
    this.props.data.map(function(slide){
      return (
        <div className="slide">
          <h2>{slide.description}</h2>
          <img src={slide.picture} />
        </div>
      );
    });
  }
});
React.render(
  <Profile />, document.getElementById('content')
);