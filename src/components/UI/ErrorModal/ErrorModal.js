import './ErrorModal.css'
import Button from '../Button/Button';
import '../Button/Button.css'

const Error= (props)=>{
    console.log('!!!!', props)
    const saveGoal=(event)=>{
    props.onYes(event)
    }
    const unSaveGoal=(event)=>{
        console.log("@@@",event.target.innerText)
        props.onNo(event)

    }


    return (
        <div>
            <div className='backdrop'></div>
            <div className='modal'>
                <h1 className='header'>Are you sure to add new goal?</h1>
            <Button className='button' type="submit" onClick={saveGoal} >Yes      
            </Button>
            <Button className='button' type="submit" onClick={unSaveGoal}>No      
            </Button>
            </div>
        </div>
    )
}

export default Error;