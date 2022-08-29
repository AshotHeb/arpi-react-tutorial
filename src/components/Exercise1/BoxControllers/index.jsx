import { ButtonControler } from './ButtonControler'
import { RangeSlider } from './RangeSlider'
import { StyleInput } from './StyleInput'
import './styles.css'

export const BoxControllers = () => {
    return (
        <div className='box-controller'>
            <ButtonControler value={'Show'} />
            <StyleInput label={"Rotate"}/>
            <StyleInput label={"Width"}/>
            <StyleInput label={"Height"}/>
            <RangeSlider label={'Opacity'}/>
        </div>
    )
}