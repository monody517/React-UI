function scopedClassMeak(prefix:string){
    return function x(name?:string){
        return [prefix,name].filter(Boolean).join('-')
    }
}
export default scopedClassMeak