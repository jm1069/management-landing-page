import React from 'react'
import './Hero.css'
import HeroImage from '../assets/undraw_team_collaboration_re_ow29.svg'

const Hero = () => {
  return (
    <div className='HeroContainer'>
        <div className='HeroContainerLeft'>
            <h1>Operate the team by organizing the task</h1>
            <p>Cranbery is built for every member of your project team
               to plan, manage, track and release great results.</p>
            <div className='RegisterForm'>
                <input type='email'></input><button className='StartNowButton' type='submit'>Start Now</button>
            </div>

            <div className='OurClients'>
                <h2>Our top clients</h2>
                <br />
                <div className='LogoContainer'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/2560px-Amazon_Prime_Video_logo.svg.png' alt='amazon'></img>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png' alt='spotify'></img>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png' alt='netflix'></img>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png' alt='tiktok'></img>
                </div>
            </div>
        </div>

        <div className='HeroContainerRight'>
            <img src={HeroImage} alt='illustration'></img>
        </div>
    </div>
  )
}

export default Hero