import React from 'react'

const Section3 = () => {
  return (
    <>
<article className='section3'>
        <div>
        <div>
          <span>Gender</span>
          <span>Female</span>
        </div>
        <div>
          <span>Birthday</span>
          <span>Feb 24th, 1997</span>
        </div>
        <div>
          <span>Phone Number</span>
          <span>(239)555-0108</span>
        </div>
        <div>
          <span>Registered Date</span>
          <span>Feb 24th,1997</span>
        </div>
        </div>
        <br></br>
        <div>
        <div>
          <span>Street Address</span>
          <span>JL.Diponegoro No.21</span>
        </div>
        <div>
          <span>City</span>
          <span>Cilacap</span>
        </div>
        <div>
          <span>Zip Code</span>
          <span>655849</span>
        </div>
        <div>
          <span>Member Status</span>
          <span>Active Member</span>
        </div>
        </div>
        <div className='appointments'>
          <button>Upcoming Appointments</button>
          <button>Past Appointments</button>
          <button>Medical Records</button>
        </div>
        <div>
          <p>
            <span>Root Canal Treatment</span>
            <button>Show Previous Treatments</button>
          </p>
          <div>
            <div><h1>26 Nov'19</h1><span>09.00 - 10.00</span></div>
            <div><span>Treatment</span><span>Open Access</span></div>
            <div><span>Dentist</span><span>Drg.Adam H.</span></div>
            <div><span>Nurse</span><span>Jessicamila</span></div>
            <button><img src='https://cdn3.iconfinder.com/data/icons/experimental-volume-2-1/512/note-512.png' alt='' width={20}></img>Note</button>
          </div>
          <div>
            <div><h1>12 Nov'19</h1><span>09.00 - 10.00</span></div>
            <div><span>Treatment</span><span>Root Canal</span></div>
            <div><span>Dentist</span><span>Drg.Adam H.</span></div>
            <div><span>Nurse</span><span>Jessicamila</span></div>
            <button><img src='https://cdn3.iconfinder.com/data/icons/experimental-volume-2-1/512/note-512.png' alt='' width={20}></img>Note</button>
          </div>
        </div>

      </article>
    </>
  )
}

export default Section3