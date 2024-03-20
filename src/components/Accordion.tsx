import React, {useState} from 'react';

type AccordionType = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = ({
                              titleValue,
                              collapsed
                          }: AccordionType) => {
    const [editMode, setEditMode] = useState(collapsed)

    function onCLickHandler() {
        setEditMode(!editMode)
    }

    return (
        <div>
            <h3 onClick={onCLickHandler}>{titleValue}</h3>
            {!editMode ?
                <ul>
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                </ul>
                :
                <span>pusto</span>
            }

        </div>
    );
};