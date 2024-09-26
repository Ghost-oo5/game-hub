import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '879aea798f98488eafb05074cdd44299'
    }
})