import React, { Component } from 'react'
import "./Events.css";

class Events extends Component {
  render() {
    
    let events = this.props.events.map((item, i) =>
    <div id='event' key={i}> 
      
  
            <a href={item.url}><span className='eventTitle'>{item.title}</span></a>
            <br/>
            <span className='eventDate'>{item.created}</span>
            <br/>
            <span className='eventInfo'>{item.description}</span>
      
    </div>
    
    )
 
    return (
        <div id='events' class='scrollbar'>
            <div id="eventsTitle">Events</div>
            {events}
        </div>
      
    )
  }
}

export default Events;
