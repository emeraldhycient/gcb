import { atom } from "jotai";

const carddatas = atom(
    [
        { cvv: '321', expires: '11/22', numbers: '4110 1212 2323 3454' },
        { cvv: '321', expires: '10/22', numbers: '6510 1212 2323 3454' },
        { cvv: '321', expires: '09/22', numbers: '3710 1212 2323 3454' },
    ]

)


export default carddatas