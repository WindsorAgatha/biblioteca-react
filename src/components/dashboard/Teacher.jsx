import { useState } from "react";

function CreateTeacher() {


    const [teacher, setTeacher] = useState({
        id: 0,  //
        name: '',
        cpf: '',
        registrationNumber: '',
        address: '',
        isActive: true, //
        role: 0, //
        classRoomIds: [  //
            0
        ],
        classRoomsDto: [ //
            {
                id: 0,
                description: '',
                shift: '',
            }
        ]

    })



    return (
        <form>
            <label id="" className="">Nome</label>
            <input id="" className=""></input>
        </form>
    )
}

export default CreateTeacher

// [
//   {
//     "id": 0,
//     "name": "string",
//     "cpf": "17560522610",
//     "registrationNumber": "string",
//     "address": "string",
//     "address": "string",
//     "isActive": true,
//     "role": 0,
//     "classRoomIds": [
//       0
//     ],
//     "classRoomsDto": [
//       {
//         "id": 0,
//         "description": "string",
//         "shift": "string"
//       }
//     ]
//   }
// ]: