import React,{useId} from 'react'

const Input = React.forwardRef( function Input({
    lable,
    type="text",
    className="",
    ...props
}, ref){
    const id = useId();
    return (
        <div className='w-full'>
            {lable && <lable
            className="inline-block mb-1 pl-1"
            htmlFor={id}>
            {lable}
            </lable>
            }
            <input type={type} className={`${className}`} ref={ref} {...props} id={id} required/>

        </div>
    )
})

export default Input