import http from "./http-common";

const getAll = () => {
    return http.get("/api/users");
};

const create = data => {
    return http.post("/api/users", data);
};

export default {
    getAll,
    create
};