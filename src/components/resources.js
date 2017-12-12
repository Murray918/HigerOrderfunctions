import React from 'react';


//this is a basic dumb component that is unaware of its surroundings how ever it being showed to the user is based apon our user being logged in
export default () => {
  return (
    <div>
      Super Special Secret Recipie
      <ul>
        <li>1 tray of Betty Crocker Bownie Mix</li>
        <li>1 cup of canned tuna</li>
        <li>1 jar of Mayo</li>
      </ul>
    </div>
  )
}
