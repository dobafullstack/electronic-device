export default (error: any, value: string) => {
    return {
        code: 500,
        error: {
            message: error.message
        },
        result: `${value} failed`
    }
}