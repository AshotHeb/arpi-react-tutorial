import { useState } from 'react'
import './styles.css'

const getRotationCorrectValue = (rotateDeg) => {
    const countOfCicle = Math.trunc(rotateDeg / 360)

    if (countOfCicle >= 1) {
        return rotateDeg - countOfCicle * 360
    }

    return rotateDeg
}

export const DivRotation = () => {
    const [rotation, setRotation] = useState(0)
    const [divColor, setDivColor] = useState('aqua')



    const handleChange = (event) => {
        const value = getRotationCorrectValue(+event.target.value)

        //this.setState({rotation:value})
        setRotation(value)

        /*Chagning div background color*/
        if (value >= 90 && value < 180) {
            setDivColor('red')
            return
        }

        if (value >= 180 && value < 270) {
            setDivColor('blue')
            return
        }

        if (value >= 270 && value < 360) {
            setDivColor('orange')
        } else {
            setDivColor('aqua')
        }
    }

    const handleFocus = (event) => {
        const value = +event.target.value
        if (!value) {
            event.target.value = ''
        }
    }

    const rotationDivClassName = ['rotatable-div' , divColor]
    
    return (
        <div className='div-rotation-wrapper'>
            <div className='div-cotrol-box'>
                <label htmlFor="rotationInput">Rotation</label>
                <input
                    type="number"
                    className='rotation-control-input'
                    id="rotationInput"
                    defaultValue={rotation}
                    onChange={handleChange}
                    onFocus={handleFocus}
                />
            </div>

            <div
                // className={`rotatable-div ${divColor}}`
                className={rotationDivClassName.join(' ')}
                style={{
                    transform: `rotate(${rotation}deg)`,
                }}

            ></div>

        </div>
    )
}





























/* First Variant*/








// import { useState } from 'react'
// import './styles.css'

// const getRotationCorrectValue = (rotateDeg) => {
//     const countOfCicle = Math.trunc(rotateDeg / 360)

//     if (countOfCicle >= 1) {
//         return rotateDeg - countOfCicle * 360
//     }

//     return rotateDeg
// }

// export const DivRotation = () => {
//     const [rotation, setRotation] = useState(0)
//     const [divColor, setDivColor] = useState('aqua')


//     // state = {
//     //     rotation:0
//     // }

//     const handleChange = (event) => {
//         const value = +event.target.value

//         //this.setState({rotation:value})
//         setRotation(getRotationCorrectValue(value))

//         /*Chagning div background color*/
//         if (value >= 90 && value < 180) {
//             setDivColor('red')
//         }

//         if (value >= 180 && value < 270) {
//             setDivColor('blue')
//         }

//         if (value >= 270 && value < 360) {
//             setDivColor('orange')
//         }
//     }

//     const handleFocus = (event) => {
//         const value = +event.target.value
//         if (!value) {
//             event.target.value = ''
//         }
//     }

//     return (
//         <div className='div-rotation-wrapper'>
//             <div className='div-cotrol-box'>
//                 <label htmlFor="rotationInput">Rotation</label>
//                 <input
//                     type="number"
//                     className='rotation-control-input'
//                     id="rotationInput"
//                     defaultValue={rotation}
//                     onChange={handleChange}
//                     onFocus={handleFocus}
//                 />
//             </div>

//             <div className='rotatable-div'
//                 style={{
//                     transform: `rotate(${rotation}deg)`,
//                     backgroundColor: `${divColor}`
//                 }}

//             ></div>

//         </div>
//     )
// }