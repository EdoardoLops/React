import { useEffect } from "react"
import { useRef } from "react"

export function  FocusableInput(){
    const inputRef = useRef(null)

    const mountedRef = useRef(false)

    useEffect(()=>{
        if (!mountedRef.current) {
            mountedRef.current = true
            console.log("fatto per la prima volta");
            
        } else {
            console.log("fatto per più volte");
            
        }

        inputRef.current?.focus()
    }, [])


    return (
        <form>
            <input ref={inputRef} type="text" name="username" id="" />
        </form>
    )
}