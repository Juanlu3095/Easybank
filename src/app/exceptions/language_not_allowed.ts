// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
export class language_not_allowed extends TypeError {
    constructor(message: string){
        super(message)
    }
}