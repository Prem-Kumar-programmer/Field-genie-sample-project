import React from 'react'
import {StudentDisplay} from './StudentDisplay';

export function Students({students}) {
    return (
        <div>
            {students.map(student => 
                <StudentDisplay name={student.name} address={student.address}  />
            )}
        </div>
    );
}