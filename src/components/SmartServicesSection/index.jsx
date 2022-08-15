import './styles.css'



const SmartServicesSection = () => {
    return (
        <div className='smart-services-section'>
            <Header />
            <Body />
        </div>
    )
}

export default SmartServicesSection

const Header = () => {
    return (
        <div className='smart-services-section-header'>
            <h1 className='smart-services-section-h1 text-center '>
                SMART
                <span> ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</span>
            </h1>
            <p className='smart-services-section-paraparph text-center'>Նախքան առաքանու ԱՄՆ կամ Չինաստանի պահեստ հասնելը դուք կարող եք պատվիրել հետևյալ SMART ծառայությունները</p>
        </div>

    )
}

const Body = ()=>{
    return (
        <div className='smart-services-section-body'>
            <img src="https://onex.am/images/smart-service.svg" alt="" />
            <div className='smart-services-section-body-list'>
                <SmartServicesListItem imgUrl={"https://onex.am/images/smart_services/photo-camera.svg"} text={'ուսանկարել դրսից'}/>
                <SmartServicesListItem imgUrl={"https://onex.am/images/smart_services/photos-inside.svg"} text={'Լուսանկարել ներսից'}/>
                <SmartServicesListItem imgUrl={"https://onex.am/images/smart_services/stop.svg"} text={'Կանգնեցնել'}/>
                <SmartServicesListItem imgUrl={"https://onex.am/images/smart_services/check-order.svg"} text={'Ստուգել պատվերը'}/>
                <SmartServicesListItem imgUrl={"https://onex.am/images/smart_services/repackaging.svg"} text={'Չվերափաթեթավորել'}/>
                <SmartServicesListItem imgUrl={"https://onex.am/images/smart_services/change-receiver.svg"} text={'Հավելյալ վերափաթեթավորում'}/>
                <SmartServicesListItem imgUrl={"https://onex.am/images/smart_services/unboxing.svg"} text={'Փոխել ստացողին'}/>
            </div>
        </div>
    )
}

const SmartServicesListItem  =({imgUrl , text}) =>{
    return (
        <p className='smart-services-list-item'>
        <img src={imgUrl} alt="" />
        <span>
            {text}
        </span>
    </p>
    )
}