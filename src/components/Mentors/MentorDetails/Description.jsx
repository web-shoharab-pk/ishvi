import React, { useState } from 'react';

const Description = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className="description">
        <h2>Discription</h2>
        {
            isCollapsed ? (
                <React.Fragment>
                    <p className="highlight">Informally the role of teacher may be taken on by anyone. In some countries, teaching young people of school age may be carried out in an informal setting.......
                        <span className="more_link" onClick={()=> setIsCollapsed(!isCollapsed)}>More</span>
                    </p>

                </React.Fragment>
            ) : (
                <React.Fragment>
                    <p className="highlight"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex sunt hic saepe et itaque? Corrupti praesentium reiciendis veniam, voluptatum illo quibusdam, minus deleniti quos nobis nihil ut facere labore.
                        <span className="more_link" onClick={()=> setIsCollapsed(!isCollapsed)}>less</span>
                    </p>

                </React.Fragment>
            )
        }

    </div>
    );
};

export default Description;