import React, { useState } from 'react';
import './Contact.css';
import AddressTag from './AddressTag';
import ContactForm from './ContactForm';

const icons = {
    linkedin: require('../images/linkedin.png'),
    linkedinHover: require('../images/linkedinHover.png'),
    gitHubProfile: require('../images/gitHubProfile.png'),
    gitHubProfileHover: require('../images/gitHubProfileHover.png'),
    gmail: require('../images/gmail.png'),
    gmailHover: require('../images/gmailHover.png'),
    discord: require('../images/discord.png'),
    discordHover: require('../images/discordHover.png')
  };

export const Contact = () => {
    const [ gmailHover, setGmailHover ] = useState(false);
    const [ gitHubHover, setGitHubHover ] = useState(false);
    const [ linkedinHover, setLinkedinHover ] = useState(false);
    const [ discordHover, setDiscordHover ] = useState(false);

    return (
        <div id='contact'>
            <div className='contactbox'>
                <div className='contactheader'>
                    <h2>Let's discuss your project!</h2>
                    <p>Let's work together to turn your vision into reality! I am available to discuss your project and provide insights on how we can bring it to life.</p>
                </div>
                <div className='contactcolumns'>
                    <div className='leftcolumn'>
                        <AddressTag
                            imgUrl='gmail'
                            description='Email'
                            info='jessicalaurendowning@gmail.com'
                        />
                        <AddressTag
                            imgUrl='phone'
                            description='Phone'
                            info='(760) 504-1793'
                        />
                        <AddressTag
                            imgUrl='location'
                            description='Address'
                            info='Salt Lake City, Utah 84108'
                        />
                        <div className='contacticonscontainer'>
                            <div className='iconcontainer'>
                                <img 
                                    alt='Gmail icon' 
                                    src={gmailHover ? icons['gmailHover'] : icons['gmail']} 
                                    onMouseEnter={() => setGmailHover(true)}
                                    onMouseLeave={() => setGmailHover(false)}
                                    onClick={() => window.open("mailto: jessicalaurendowning@gmail.com", '_blank')}
                                />
                            </div>
                            <div className='iconcontainer'>
                                <img 
                                    alt='Github icon' 
                                    src={gitHubHover ? icons['gitHubProfileHover'] : icons['gitHubProfile']} 
                                    onMouseEnter={() => setGitHubHover(true)}
                                    onMouseLeave={() => setGitHubHover(false)}
                                    onClick={() => window.open('https://github.com/jessdownin9', '_blank')}
                                />
                            </div>
                            <div className='iconcontainer'>
                                <img 
                                    alt='Linkedin icon' 
                                    src={linkedinHover ? icons['linkedinHover'] : icons['linkedin']} 
                                    onMouseEnter={() => setLinkedinHover(true)}
                                    onMouseLeave={() => setLinkedinHover(false)}
                                    onClick={() => window.open('https://www.linkedin.com/in/jessica-downing-183b62243/', '_blank')}
                                />
                            </div>
                            <div className='iconcontainer'>
                                <img 
                                    alt='Discord icon' 
                                    src={discordHover ? icons['discordHover'] : icons['discord']} 
                                    onMouseEnter={() => setDiscordHover(true)}
                                    onMouseLeave={() => setDiscordHover(false)}
                                    onClick={() => window.open('https://discordapp.com/channels/@me/jessica__downing#4609/', '_blank')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='rightcolumn'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;
