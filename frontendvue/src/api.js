import axios from 'axios'

const SERVER_URL = 'http://localhost:8080';

export default {
    getAllMajor() {
        const url = SERVER_URL + `/major`;
        return axios.get(url).then(response => response.data);
    },
    getAllStudent() {
        const url = SERVER_URL + `/student`;
        return axios.get(url).then(response => response.data);
    },
    postStudent(student_code, first_name, last_name, major_id) {
        const url = SERVER_URL + `/student`;
        return axios.post(url, {
            student_code: student_code,
            first_name: first_name,
            last_name: last_name,
            major_id: major_id
        }).then(function (response) {
            console.log(response.data)
        })
            .catch(function (error) {
                console.log(error)
            });
    },
    getStudent(student_id) {
        const url = SERVER_URL + `/student/` + student_id;
        return axios.get(url).then(response => response.data);
    },
    getMajor(major_id) {
        const url = SERVER_URL + `/major/` + major_id;
        return axios.get(url).then(response => response.data);
    },
    getStudentByMajor(major_id) {
        const url = SERVER_URL + `/studentbymajor/` + major_id;
        return axios.get(url).then(response => response.data);
    },
    putStudent(student_id, student_code, first_name, last_name, major_id) {
        const url = SERVER_URL + `/student/` + student_id;
        return axios.put(url, {
            student_code: student_code,
            first_name: first_name,
            last_name: last_name,
            major_id: major_id
        }).then(function (response) {
            console.log(response.data)
        })
            .catch(function (error) {
                console.log(error)
            });
    },
    deleteStudent(student_id) {
        const url = SERVER_URL + `/student/` + student_id;
        return axios.delete(url).then(function (response) {
            console.log("Deleted"+response)
        })
            .catch(function (error) {
                console.log(error)
            });
    },
}