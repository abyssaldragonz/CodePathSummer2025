import React from "react";
import Event from './Event'

export default function Calendar() {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8am</td>
                        <td></td>
                        <Event event='Gym 💪' color ='pink' location='PowerRangers'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue' location="The Bean Cult Cafe"/>
                    </tr>
                    <tr>
                        <td className="time">10am</td>
                        <td></td>
                        <td></td>
                        <Event event='Open Net 🏐' color ='green' location='PowerRangers'/>
                        <td></td>
                        <td></td>
                        <Event event='Open Net 🏐' color ='green' location='PowerRangers'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11am</td>
                        <td></td>
                        <Event event='Practice 🏸' color ='pink' location='Birdies'/>
                        <td></td>
                        <td></td>
                        <Event event='CEO Meeting 📄' color ='blue'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12pm</td>
                        <td></td>
                        <Event event='Tourny 🏸' color ='green' location='Birdies'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Interview 🎙️' color ='blue' location='DreamCore'/>
                        <Event event='Gym 💪' color ='pink' location='PowerRangers'/>
                        <td></td>
                        <Event event='Appointment 🩺' color ='pink' location='HealthFirst'/>
                    </tr>
                    <tr>
                        <td className="time">2pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Friend Date 🍩' color ='blue' location='Donuts & Coffee'/>
                        <td></td>
                        <Event event='Yoga 🙏' color ='pink' location='PowerRangers'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Tourny 🏸' color ='green' location='Birdies'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Hangout ⛲' color ='blue' location='Town Square'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Movie Date 🍿" color="blue" />
                    </tr>
                    <tr>
                        <td className="time">5pm</td>
                        <td></td>
                        <Event event='Game Night 🎮' color ='pink' location='Tavern Eats'/>
                        <td></td>
                        <Event event='CodePath 📜' color ='green' location='Zoom'/>
                        <td></td>
                        <Event event='Fancy Dinner 🎩' color ='green' location='Maple & Ash'/>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}