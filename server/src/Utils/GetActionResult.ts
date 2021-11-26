import Error from "@Types/Error"
import ApiResponse from "@Types/ResponseType"



export default (code: number, result: any, error: Error | null, value: string = ''): ApiResponse => {
    if (value === ''){
        return {
            code,
            result,
            error: null
        }
    }else{
        if (code >= 400){
            return {
                code,
                result: `${value} failed`,
                error
            }
        }else{
            return {
                code,
                result: `${value} success`,
                error: null
            }
        }
    }
}