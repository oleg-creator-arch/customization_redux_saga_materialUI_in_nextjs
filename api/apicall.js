import axios from "axios";

const cardApi = (pageNo) => {
    return axios.post(
        `http://localhost:4000/getUserCallWorkBook.do`,
        {},
        {
            headers: { "content-Type": "application/json" },
            params: {
                pageNumber: pageNo,
                pageSize: 5
            }
        }
    );
};

export default cardApi;
