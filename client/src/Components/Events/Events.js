import React, { Component } from 'react'
import "./Events.css";
var moment = require('moment');


class Events extends Component {
  render() {
    
    let events = this.props.events.map((item, i) =>
      <div className='event' key={i}> 
        <div className='eventTitle'>
            {item.image && <img src={item.image.url} alt='event'/>}
            <a href={item.url}>
              <span>{item.title}</span>
            </a>
        </div>
            
            {/* <button onClick=>More Info Below 'arrow'</button>
            <span className='eventDate'>{item.description}</span> */}
            <br/>
            <span className='eventInfo'>
            {/* {moment(item.start_time).format()} */}
            {item.start_time}
                at 
                <a href={item.venue_url} alt='venut'>
                  {item.venue_name}
                </a>
            </span>
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
