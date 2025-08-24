import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { supabase } from '../client'

import '../App.css'
import Crewmate from '../components/Crewmate';

export default function CrewmateGallery(props) {
    const [posts, setPosts] = useState([])
    const [stats, setStats] = useState({warrior: 0, archer: 0, healer: 0, mage: 0, tank: 0, num: 1})

    useEffect(() => {
        setPosts(props.data)
        fetchCrewmates()
    }, [props])

    const fetchCrewmates = async() => {
        const {data} = await supabase
        .from('Crewmates')
        .select()

        // set state of posts
        setPosts(data)

        var [w, a, h, m, t] = [0, 0, 0, 0, 0]
        data.forEach((item) => {
            if (item.class == "Warrior")
                w++;
            if (item.class == "Archer")
                a++;
            if (item.class == "Healer")
                h++;
            if (item.class == "Mage")
                m++;
            if (item.class == "Tank")
                t++;
        });

        setStats({warrior: w, archer: a, healer: h, mage: m, tank: t, num: data.length})
    }

    return (
        <div>
            <div className="header">
                <Link to="/"><button className="headerBtn"> Create Crewmate 🎨  </button></Link>
                <Link to="/gallery"><button className="headerBtn"> Crewmate Gallery 🏆 </button></Link>
            </div>

            <h2>Crewmate Gallery 🏆</h2>
            <hr />
            <div className='stats'>
                <h2>SUMMARY 👑: </h2>
                <h3>Warriors: <span className='cardText'>{stats.warrior}</span> — {stats.warrior / stats.num * 100} %</h3>
                <h3>Archers: <span className='cardText'>{stats.archer}</span>  — {stats.archer / stats.num * 100} %</h3>
                <h3>Healers: <span className='cardText'>{stats.healer}</span>  — {stats.healer / stats.num * 100} %</h3>
                <h3>Mages: <span className='cardText'>{stats.mage}</span>  — {stats.mage / stats.num * 100} %</h3>
                <h3>Tanks: <span className='cardText'>{stats.tank}</span>  — {stats.tank / stats.num * 100} %</h3>
            </div>

            <div className='gallery'>
                {
                    posts && posts.length > 0 ?
                    [...posts]
                    .sort((a, b) => a.id - b.id)
                    .map((post, index) => 
                        <Crewmate key={index} crewmate={post} />
                    ) : <h2 style={{backgroundColor:'red', padding: '1rem', borderRadius: '2rem'}}>{'No Crewmates Yet ☠️'}</h2>
                }
            </div>
        </div>
    )
}