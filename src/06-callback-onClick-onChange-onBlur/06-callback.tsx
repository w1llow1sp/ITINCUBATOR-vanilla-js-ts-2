import React, {ChangeEvent, MouseEvent} from 'react'
/*const callBack = () :number => {
    alert('hey')
    return 12
}*/

/*window.setTimeout(callBack,1000)*/

export const User = () => {


    const search =(event: MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name)
        //alert('user should be deleted')
    }

    const saveUser =() => {
        alert('user have be saved')
    }
    const onNameChanged =() => {
        alert('name change')
    }
    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log('age changed:' + event.currentTarget.value)
    }
    const onFocusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={onFocusLostHandler}>Dimych</textarea>
            <input onChange={onAgeChanged } type={"number"}/>
            <button name='delete' onClick={search} >x</button>
        </div>
    )
}

// onChange -- подписывается на изменения из инпута, значение в нем допустим
// onBlur -- смотрит, потерян ли фокус с элемента
// onClick -- смотрит, сделан ли клик по тегу