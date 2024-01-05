import { Response } from "express"

type MockResponse<Tresult> = Response & {
    state: {
        status?: number,
        json?: Tresult | unknown
    }
}


export function makeMockResponse <TResult> (){
    const response = {
        state: {}
    } as MockResponse<TResult>

    response.status = (status: number) =>{
        response.state.status = status
        return response
    }

    response.json = (json: TResult) =>{
        response.state.json = json
        return response
    }

    return response

}