var Profile = React.createClass({
  render: function(){
    return ( 
        <Slide />
    );
  }
});
var Pic = React.createClass({
  render: function(){
    return (
      <div className="profilePic">
        <h1>Perk Lim</h1>
        <img src="http://i.ytimg.com/vi/vRyAjF0Hvv4/hqdefault.jpg"/>
      </div>
    );
  }
});
var Slide = React.createClass({
  render: function(){
    return (
      <div className="slide">
        <h2>Loves to dive</h2>
        <img src="http://www.aqua-sport.com/_Uploads/dbsArticles/DivingCourse1.JPG"/>
      </div>
    );
  }
});
React.render(
  <Profile />, document.getElementById('profile')
);