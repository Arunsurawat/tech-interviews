# Hooks name start with use
    useState
    useEffect
    useContext
    useCustomHook
# Hooks should be call in the Top level in the component
# Hooks can not be call in Loops, Condition and Nested function
# Hooks only be used in inner component and Custom hooks not in javascript regular function  



# Performance Hooks 
A common way to optimize re rendring performance is to skip unnecessary work.
For example you can tell React to reuse a cached calculation or skip a re-render if the data has not changed since the previous render.

To skip calculations and unnecessary re-rendering, use one of these Hooks :
    useMemo : lets you cache the result of an expensive calculation.
    useCallback : lets you cache a function definition before passing it down to an optimized component.
    
    
    
# useMemo memorise the value so i can help if the value change then only re-render
# useCallback memorise the function.

# useRef is simmiler to useState only deiffrence is if the useRef get chage it will not rerender to component.
