import axios, {AxiosError, AxiosRequestConfig} from 'axios'

const client = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        'Content-Type': 'application/json'
    }
})

export const request = async (config: AxiosRequestConfig) => {
    try {
        const response = await client(config)
        return { data: response.data }
    } catch (error: any) {
        console.log(error.message)
        let reason = error.message
        let status = error.status || error.code
        if (error instanceof AxiosError) {
            reason = error.response?.data ? error.response.data?.message : reason
            status = error.response ? error.response.status : status
        }

        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return {
            error: {
                path: error.config.url,
                status,
                reason,
            },
        }
    }
}