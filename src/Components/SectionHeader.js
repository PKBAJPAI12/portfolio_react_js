import React from 'react';
import '../App.css';
function SectionHeader(props){
    return(
        <div className="sectionheader">
        <hr/>
          <a name="experience"><h1>{props.title}</h1></a>   
        <hr/>


    </div>
    )
}
export default SectionHeader;