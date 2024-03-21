import React, { useState } from "react";

const Dropdown = () => {
  return (
    <div className="responsive-menu md:hidden lg:fidden xl:hidden 2xl:hidden">
      <select
        name="page_name"
        onchange="location = this.options[this.selectedIndex].value;"
      >
        <option selected="selected">Home</option>
        <option>&nbsp;-Services</option>
        <option>&nbsp;-Gallery</option>
        <option>&nbsp;-About Us</option>
        <option>&nbsp;-Contact Us</option>

        {/* <option>Courses</option>
        <option>&nbsp;-Bouncer</option>
        <option>&nbsp;-Bouncer </option>
        <option>&nbsp;-Bouncer</option>
        <option>&nbsp;-Bouncer</option>
        <option>&nbsp;-Bouncer</option>
        <option>&nbsp;-Bouncer</option>
        <option>&nbsp;-Bouncer</option>
        <option>&nbsp;-Bouncer</option>
        <option>&nbsp;-Bouncer</option>
        <option>&nbsp;- Bouncer </option>
        <option>&nbsp;-Bouncer</option>
        <option>&nbsp;-Bouncer</option>
        <option>&nbsp;-Bouncer</option> */}

        {/* <option>Activities</option>
        <option>&nbsp;-Workshops</option>
        <option>&nbsp;-Outdoor</option>
        <option>&nbsp;-National Art Seminar &amp; Award Show, 2018</option>
        <option>&nbsp;-Media Coverage</option>
        <option>&nbsp;-Judging Art Events</option>
        <option>&nbsp;-Exhibition</option>
        <option>&nbsp;-Daily Activities</option> */}

        {/* <option>Admission</option>
        <option>Art Gallery</option>
        <option>&nbsp;-Work by Kids Level-2</option>
        <option>&nbsp;-Work by Kids Level-1</option>
        <option>&nbsp;-Sketching</option>
        <option>&nbsp;-Paintings done by Students of Level-3</option> */}
      </select>
    </div>
  );
};

export default Dropdown;
