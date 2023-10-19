import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization:
            'Bearer ywPAAHOmMTctnMIPFxwOApEteEWnydnbWEq9RFi8UssZazQZcBgapAjufJ6g1w-lyBAWYjJuT0Ji8MaiGouKSoEBvV6G6GwDYgkuugmnR6GN7uaCIsAUTEOdHGYkZXYx'
    },
});