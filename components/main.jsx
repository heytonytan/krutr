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
  mixins: [ReactFireMixin],
  getInitialState: function(){
      return {user: 0};
  },
  componentWillMount: function() {
    var firebaseRef = new Firebase("https://radiant-fire-9112.firebaseio.com/users/tony");
    this.bindAsObject(firebaseRef, "user");
  },
  render: function(){
    console.log("Hi");
    console.log(this.state.user);

    this.state.user.slides.map(function(slide){
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