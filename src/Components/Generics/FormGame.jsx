import React from 'react'

const FormGame = () => {
  return (
    <>
        <form>
        <div>
            <label>Name:</label>
            <input type='text'/>
        </div> 
        <div>
            <p>Select your gender</p>
            <input type='radio' id='gender1' name='gender'/>
            <label htmlFor='gender1'>Male</label>
            <input type='radio' id='gender2' name='gender'/>
            <label htmlFor='gender2'>Female</label>
            <input type='radio' id='gender3' name='gender'/>
            <label htmlFor='gender3'>Other</label>
        </div> 
        <div>
            <p>What gender do you identify with? </p>
            <input type='radio' id='genderP1' name='genderPrefer'/>
            <label htmlFor='genderP1'>Male</label>
            <input type='radio' id='genderP2' name='genderPerfer'/>
            <label htmlFor='genderP2'>Female</label>
            <input type='radio' id='genderP3' name='genderPrefer'/>
            <label htmlFor='genderP3'>Genderless</label>
            <input type='radio' id='genderP4' name='genderPrefer'/>
            <label htmlFor='genderP4'>Unknown</label>
        </div> 
        <div>
            <p>What species do you identify with? </p>
            <input type='radio' id='species1' name='species'/>
            <label htmlFor='species1'>Human</label>
            <input type='radio' id='species2' name='species'/>
            <label htmlFor='species2'>Alien</label>
            <input type='radio' id='species3' name='species'/>
            <label htmlFor='species3'>Mythological Creature</label>
            <input type='radio' id='species4' name='species'/>
            <label htmlFor='species4'>Humanoid</label>
            <input type='radio' id='species5' name='species'/>
            <label htmlFor='species5'>Robot</label>
            <input type='radio' id='species6' name='species'/>
            <label htmlFor='species6'>Disease</label>
            <input type='radio' id='species7' name='species'/>
            <label htmlFor='species7'>Cronenberg</label>
        </div> 
        <div>
            <p>Which location is your favorite? </p>
            <input type='radio' id='location1' name='location'/>
            <label htmlFor='location1'>Earth</label>
            <input type='radio' id='location2' name='location'/>
            <label htmlFor='location2'>Out of the earth</label>
        </div>
        <button>Send Answers</button>
        </form>
    </>
  )
}

export default FormGame