import React from 'react'
import './Benifits.css'
import benifitRight from '../assets/benifitRight.png';
import brain from '../assets/brain.svg';
import bulb from '../assets/bulb.svg';
import connect from '../assets/connect.svg';
import guide from '../assets/guide.svg';

export default function Benifits() {
    return (
        <div className='benifits'>
            <div className='heading'>Why to <span>Participate</span></div>
            <div className='row'>
                <div className='col-sm-12 col-md-8 col-lg-6'>
                    <div className='row'>
                        <div className='col-1'>
                            <img src={brain} className='benifits-icon' />
                        </div>
                        <div className='col-10'>
                            <h5 className='benifits-text'>
                                You will learn new skills as well as get an opportunity to
                                brush up on your existing knowledge.
                            </h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'>
                            <img src={bulb} className='benifits-icon' />
                        </div>
                        <div className='col-10'>
                            <h5 className='benifits-text'>
                                You will learn how to develop ideas and build your own projects.
                            </h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'>
                            <img src={connect} className='benifits-icon' />
                        </div>
                        <div className='col-10'>
                            <h5 className='benifits-text'>
                                You will get a lot of exposure and get to connect with new people.
                            </h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1'>
                            <img src={guide} className='benifits-icon' />
                        </div>
                        <div className='col-10'>
                            <h5 className='benifits-text'>
                                You will be provided mentors from whom you can seek guidance.
                            </h5>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-4 col-lg-6'>
                    <img src={benifitRight} alt='' className='benifits-img' />
                </div>
            </div>
        </div>
    )
}
